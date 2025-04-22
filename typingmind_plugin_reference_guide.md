
```markdown
# TypingMind Plugin Development Guide (Native Build Process)

This guide details how to build plugins directly within the TypingMind interface, based on information from the official documentation.

## 1. Introduction: What are TypingMind Plugins (Native)?

TypingMind plugins extend the capabilities of the Language Model (LLM) by allowing it to trigger actions based on your definitions. These actions can be:

1.  **JavaScript Code:** Custom JavaScript executed directly in the user's browser (within a secure sandbox).
2.  **HTTP Actions:** Pre-configured HTTP requests sent from the user's browser to an external API endpoint.

The LLM decides when to use your plugin based on a description you provide using the OpenAI Function Calling specification.

## 2. How Native Plugins Work

1.  **User Prompt:** The user sends a message.
2.  **LLM Analysis:** The LLM analyzes the prompt alongside the descriptions provided in the **OpenAI Function Specification** for all enabled plugins.
3.  **Plugin Selection & Parameter Extraction (by LLM):** If a plugin's function spec matches the user's need, the LLM decides to "call" that function and extracts the required parameters from the user's query based on the spec's parameter definitions.
4.  **Execution (by TypingMind):**
    * **JavaScript:** TypingMind executes your JS code within a sandboxed `iframe` in the user's browser, passing the parameters extracted by the LLM and any configured User Settings.
    * **HTTP Action:** TypingMind constructs and sends the HTTP request from the user's browser as configured, interpolating parameters and User Settings into the URL, headers, or body.
5.  **Result Processing:**
    * **JavaScript:** The return value of your JS function is sent back to the LLM.
    * **HTTP Action:** The response from the external API is sent back to the LLM.
6.  **Final Answer:** The LLM uses the result from the plugin (JS return value or HTTP response) to formulate the final answer to the user.

## 3. Key Components (Defined within TypingMind)

When building a plugin natively in TypingMind, you define these components directly in the plugin editor:

1.  **OpenAI Function Specification (JSON):** Describes *what* your plugin function does and *what inputs* (parameters) it needs. This is what the LLM interacts with.
2.  **Plugin User Settings (JSON):** Defines configuration fields (like API keys, preferences) that the user needs to fill out for the plugin to work. These settings are accessible to your implementation logic.
3.  **Implementation Logic:** The actual code or configuration that performs the action.
    * **JavaScript Code:** A JavaScript function.
    * **HTTP Action:** Configuration for an HTTP request (URL, method, headers, body).

## 4. Defining the OpenAI Function Specification

This JSON object tells the LLM about the function your plugin provides. It adheres to the OpenAI Function Calling format.

* **`name`:** The function name (unique across plugins, use meaningful names, e.g., `getRandomNumberInRange`, `searchImagesViaGoogle`).
* **`description`:** **Crucial.** Detailed description for the LLM explaining what the function does, when to use it, and what kind of results to expect.
* **`parameters`:** An object describing the inputs the function needs.
    * `type`: Should always be `"object"`.
    * `properties`: An object where each key is a parameter name.
        * Each parameter property defines its `type` (e.g., `"string"`, `"number"`, `"boolean"`) and a `description` explaining the parameter's purpose *to the LLM*.
    * `required`: An array listing the names of parameters that are mandatory.

**Example Function Spec (JSON):**

```json
{
  "name": "generate_random_number_in_range",
  "description": "Generate a random integer number between number 'a' and number 'b'. Use when the user asks for a random number within a specific range.",
  "parameters": {
    "type": "object",
    "properties": {
      "a": {
        "type": "number",
        "description": "The lower bound of the range (inclusive)."
      },
      "b": {
        "type": "number",
        "description": "The upper bound of the range (inclusive)."
      }
    },
    "required": [ "a", "b" ]
  }
}
```

## 5. Defining Plugin User Settings

This JSON array defines input fields presented to the user when they enable or configure your plugin.

* Each object in the array represents one setting field.
* **`name`:** Internal identifier for the setting (used to access the value in your code/HTTP action).
* **`label`:** User-friendly text displayed next to the input field.
* **`description`:** (Optional) Help text shown to the user.
* **`type`:** (Optional, defaults to `"text"`) Input field type. Common types include:
    * `"text"`
    * `"password"` (masks input)
    * `"enum"` (dropdown list - requires a `values` array)

**Example User Settings (JSON):**

```json
[
  {
    "name": "searchEngineID",
    "label": "Search Engine ID"
  },
  {
    "name": "searchEngineAPIKey",
    "label": "Search Engine API Key",
    "type": "password"
  },
  {
    "name": "imageQuality",
    "label": "Image Quality",
    "description": "Optional, default: \"standard\"",
    "type": "enum",
    "values": [ "standard", "hd", "4k" ]
  }
]
```

## 6. Implementing the Logic

Choose **one** of these implementation methods:

### A) JavaScript Code

* Write a JavaScript function that matches the `name` in your Function Spec.
* The function receives two arguments:
    1.  `params`: An object containing the parameter values extracted by the LLM (matching the `properties` in your Function Spec).
    2.  `userSettings`: An object containing the values entered by the user for the fields defined in your Plugin User Settings.
* Your code runs in a sandboxed `iframe` in the user's browser. It can perform calculations, manipulate data, or even make `Workspace` requests (subject to CORS).
* The **return value** of your function is sent back to the LLM.

**Example JavaScript Implementation:**

```javascript
// Function name matches the 'name' in the Function Spec
function generate_random_number_in_range(params, userSettings) {
  // Access parameters extracted by LLM
  const a = params.a;
  const b = params.b;

  // Access user settings (if any were defined)
  // const apiKey = userSettings.apiKey; // Example

  const min = Math.ceil(a);
  const max = Math.floor(b);

  if (isNaN(min) || isNaN(max) || min > max) {
    return "Invalid range provided."; // Return error message to LLM
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  // Return the result to the LLM
  return randomNumber;
}

// Example accessing user settings:
function search_images_via_google(params, userSettings) {
  const query = params.searchQuery; // Parameter from Function Spec
  const searchEngineID = userSettings.searchEngineID; // From User Settings
  const searchEngineAPIKey = userSettings.searchEngineAPIKey; // From User Settings

  console.log(`Searching for ${query} using ID ${searchEngineID}`);
  // ... implementation using fetch() with the API key ...
  // return search_results;
}
```

### B) HTTP Action

* Configure an HTTP request directly in the TypingMind plugin editor.
* **URL:** The target API endpoint. You can embed parameters and user settings using curly braces, e.g., `https://api.example.com/search?query={query}&apiKey={apiKey}`.
* **Method:** GET, POST, PUT, DELETE, etc.
* **Headers:** Define required HTTP headers. You can embed parameters/settings here too.
* **Body:** (For POST/PUT etc.) Define the request body (e.g., JSON). You can embed parameters/settings here.
* **CORS:** The destination server *must* be configured to accept Cross-Origin Resource Sharing (CORS) requests from the TypingMind domain, as the request is sent directly from the user's browser. This is a common requirement for browser-based API calls.

## 7. Plugin Invocation Flow (Recap)

LLM sees user prompt -> Matches prompt to Function Spec `description` -> Extracts `parameters` -> TypingMind calls your JS function / sends HTTP Action with `params` and `userSettings` -> Your logic runs / API responds -> Result sent back to LLM -> LLM generates final response.

## 8. Testing Your Plugin

* **HTTP Actions:** Use the "Send Test Request" feature in the editor with test variables to verify the request configuration.
* **General Testing:** Save and enable your plugin. Chat with the AI, crafting prompts designed to trigger your plugin's function. Observe if the AI calls it correctly and uses the results.
* **Debugging:**
    * Use `console.log()` within your JavaScript code; output appears in the browser's developer console.
    * Check the network tab in the developer console for HTTP Actions.
    * If the LLM hallucinates or calls the function with incorrect parameters, try regenerating the response or refining the `description` fields in your Function Spec for better clarity.

## 9. Key Considerations (Native Build)

* **Unique Function Names:** Ensure the `name` in your Function Spec is unique.
* **Clear Descriptions:** The LLM relies heavily on the `description` fields in the Function Spec (for the function itself and its parameters). Make them explicit and accurate.
* **CORS for HTTP Actions:** This is essential. Your target API must allow requests from TypingMind's origin.
* **Security:** Be mindful of security when using User Settings, especially for API keys in JavaScript code (though sandboxed, user interaction is possible) or when constructing HTTP requests.
```