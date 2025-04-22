# Development Plan: Mboum API Plugin Refactoring

## 1. Goal

Refactor the existing monolithic Mboum API plugin into a suite of specialized plugins for the TypingMind LLM. This aims to improve the LLM's ability to select the correct API endpoint and parameters based on natural language user queries.

## 2. Problem Statement

The current single plugin struggles to accurately map natural language requests to the appropriate Mboum API functions and parameters, especially when combining different data types or functionalities. Testing revealed that the LLM often fails to identify the correct endpoint or include all necessary parameters for a specific request.

## 3. Proposed Solution: Specialized Plugins

Create multiple distinct plugins, each focused on a specific category of Mboum API data. This modular approach simplifies the task for the LLM, allowing it to more easily identify the relevant plugin and its specific functions based on the user's query.

**Plugin Categories:**

1.  **Mboum General Data:** Core data like quotes, company info, market movers, news.
    *   `/v1/markets/search`
    *   `/v1/markets/movers`
    *   `/v1/markets/screener`
    *   `/v1/markets/insider-trades`
    *   `/v1/markets/news`
    *   `/v2/markets/search`
    *   `/v2/markets/movers`
    *   `/v2/markets/tickers`
    *   `/v2/markets/market-info`
    *   `/v2/markets/screener`
    *   `/v2/markets/news`
2.  **Mboum Stock Data:** Specific stock analysis data (financials, dividends, splits, holders).
    *   `/v1/markets/quote`
    *   `/v1/markets/stock/quotes`
    *   `/v1/markets/stock/history`
    *   `/v1/markets/stock/modules`
    *   `/v1/markets/stock/earnings`
    *   `/v1/markets/stock/dividends`
    *   `/v1/markets/stock/analyst-ratings`
    *   `/v2/markets/stock/ticker-summary`
    *   `/v2/markets/stock/price-targets`
    *   `/v2/markets/stock/financials`
    *   `/v2/markets/stock/revenue`
    *   `/v2/markets/stock/short-interest`
    *   `/v2/markets/stock/institutional-holdings`
    *   `/v2/markets/stock/sec-filings`
    *   `/v2/markets/stock/historical`
3.  **Mboum Options Data:** Options chain, greeks, historical options data.
    *   `/v1/markets/options`
    *   `/v1/markets/options/unusual-options-activity`
    *   `/v1/markets/options/iv-rank-percentile`
    *   `/v1/markets/options/iv-change`
    *   `/v1/markets/options/most-active`
    *   `/v1/markets/options/highest-iv`
    *   `/v1/markets/options/options-flow`
    *   `/v2/markets/options`
4.  **Mboum Calendar Events:** Earnings, IPOs, economic events.
    *   `/v1/markets/calendar/earnings`
    *   `/v1/markets/calendar/dividends`
    *   `/v1/markets/calendar/economic_events`
    *   `/v1/markets/calendar/ipo`
    *   `/v1/markets/calendar/public_offerings`
    *   `/v2/markets/calendar/earnings`
    *   `/v2/markets/calendar/dividends`
5.  **Mboum Technical Indicators:** SMA, EMA, RSI, MACD, etc.
    *   `/v1/markets/indicators/sma`
    *   `/v1/markets/indicators/rsi`
    *   `/v1/markets/indicators/macd`
    *   `/v1/markets/indicators/cci`
    *   `/v1/markets/indicators/adx`
    *   `/v1/markets/indicators/ema`
    *   `/v1/markets/indicators/stoch`
    *   `/v1/markets/indicators/adosc`
    *   `/v1/markets/indicators/ad`
6.  **Mboum Crypto Data:** Crypto quotes, news, market data.
    *   `/v1/crypto/profile`
    *   `/v1/crypto/holders`
    *   `/v1/crypto/quotes`
    *   `/v1/crypto/coins`
    *   `/v1/crypto/modules`

## 4. Repository Structure (New Repository)

```
mboum-plugin-suite/
├── .gitignore
├── LICENSE
├── README.md
├── development_plan.md  <-- This file
│
├── plugins/
│   ├── mboum_general_data/
│   │   ├── plugin.json         # OpenAPI Spec for General Data
│   │   └── implementation.js   # JS implementation for General Data
│   │
│   ├── mboum_stock_data/
│   │   ├── plugin.json         # OpenAPI Spec for Stock Data
│   │   └── implementation.js   # JS implementation for Stock Data
│   │
│   ├── mboum_options_data/
│   │   ├── plugin.json         # OpenAPI Spec for Options Data
│   │   └── implementation.js   # JS implementation for Options Data
│   │
│   ├── mboum_calendar_events/
│   │   ├── plugin.json         # OpenAPI Spec for Calendar Events
│   │   └── implementation.js   # JS implementation for Calendar Events
│   │
│   ├── mboum_technical_indicators/
│   │   ├── plugin.json         # OpenAPI Spec for Technical Indicators
│   │   └── implementation.js   # JS implementation for Technical Indicators
│   │
│   └── mboum_crypto_data/
│       ├── plugin.json         # OpenAPI Spec for Crypto Data
│       └── implementation.js   # JS implementation for Crypto Data
│
└── docs/
    └── Mboum_API_Reference.md # Consolidated/simplified Mboum API docs (optional but helpful)
```

## 5. Plugin Specification (`plugin.json`)

Each `plugin.json` file will follow the OpenAPI 3.x specification tailored for LLM tool use. Key elements:

*   **`openapi`**: "3.0.0"
*   **`info`**:
    *   `title`: Descriptive title (e.g., "Mboum Stock Data API").
    *   `description`: Clear description guiding the LLM on the plugin's purpose and the *types* of requests it handles (e.g., "Fetches specific stock analysis data like financials, dividends, splits, and institutional holders from the Mboum API. Use this for detailed inquiries about a specific company's financial health or ownership structure.").
    *   `version`: "1.0.0"
*   **`servers`**: [{ "url": "https://mboum-api.p.rapidapi.com" }] (or appropriate base URL)
*   **`paths`**: Define relevant endpoints for *that specific plugin category*.
    *   Each path item (e.g., `/tr/data`) will have a clear `summary` and `description`.
    *   Use a `post` operation (as required by TypingMind).
    *   The `requestBody` will define a *single* `requestDetails` object parameter containing `endpoint` (fixed for the path) and `queryParams` (specific parameters for that endpoint).
    *   Clearly list `required` parameters within the `queryParams` schema for each endpoint.
*   **`components`**: Define reusable schemas if necessary, especially for `queryParams`.

**Example Snippet (`mboum_stock_data/plugin.json` for `/tr/data`):**

```json
// ... info, servers ...
"paths": {
  "/tr/data": {
    "post": {
      "summary": "Get Stock Financial Data",
      "description": "Fetches financial statement data (Income Statement, Balance Sheet, Cash Flow) for a given stock symbol.",
      "operationId": "getStockFinancialData",
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "requestDetails": {
                  "type": "object",
                  "properties": {
                    "endpoint": {
                      "type": "string",
                      "description": "API endpoint path.",
                      "example": "/tr/data",
                      "enum": ["/tr/data"] // Fixed for this path
                    },
                    "queryParams": {
                      "type": "object",
                      "properties": {
                        "symbol": {
                          "type": "string",
                          "description": "Stock symbol (e.g., AAPL)."
                        },
                        "statement": {
                          "type": "string",
                          "description": "Type of financial statement.",
                          "enum": ["income-statement", "balance-sheet", "cash-flow"]
                        },
                        "freq": {
                          "type": "string",
                          "description": "Frequency of data (annual or quarterly).",
                          "enum": ["annual", "quarterly"],
                           "default": "annual"
                        }
                        // Add other relevant params for /tr/data
                      },
                      "required": ["symbol", "statement"]
                    }
                  },
                  "required": ["endpoint", "queryParams"]
                }
              }
            }
          }
        }
      },
      "responses": {
        // ... standard response definitions ...
      }
    }
  }
  // ... other paths relevant to Stock Data ...
},
"components": {
  // ... schemas if needed ...
}
```

## 6. Implementation (`implementation.js`)

Each `implementation.js` will contain the JavaScript function(s) corresponding to the `operationId`s defined in its paired `plugin.json`.

*   The function signature will accept the `requestDetails` object.
*   Extract `endpoint` and `queryParams` from `requestDetails`.
*   Perform necessary validation (though the LLM should ideally provide correct params based on `plugin.json`).
*   Construct the actual API request to Mboum using the `queryParams`.
*   Handle API key injection securely (likely via environment variables or TypingMind's configuration).
*   Process the response from Mboum and return it in the expected format.

**Example Snippet (`mboum_stock_data/implementation.js`):**

```javascript
async function getStockFinancialData({ requestDetails }) {
  const { endpoint, queryParams } = requestDetails; // Endpoint will be "/tr/data"

  // 1. Validate required params are present in queryParams (e.g., symbol, statement)
  if (!queryParams || !queryParams.symbol || !queryParams.statement) {
    throw new Error("Missing required parameters: symbol and statement are needed.");
  }

  // 2. Construct URL and headers
  const apiKey = process.env.MBOUM_API_KEY; // Or get from plugin context
  if (!apiKey) {
    throw new Error("Mboum API key not configured.");
  }

  const url = `https://mboum-api.p.rapidapi.com${endpoint}`;
  const options = {
    method: 'GET', // Mboum uses GET, but TypingMind requires POST wrapper
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'mboum-api.p.rapidapi.com'
    }
  };

  // 3. Append queryParams to URL
  const searchParams = new URLSearchParams(queryParams);
  const fullUrl = `${url}?${searchParams.toString()}`;

  // 4. Make the API call
  try {
    const response = await fetch(fullUrl, options);
    const data = await response.json();

    if (!response.ok) {
      // Handle Mboum API errors
      throw new Error(`Mboum API Error (${response.status}): ${data.message || 'Unknown error'}`);
    }

    // 5. Return the data
    return data;

  } catch (error) {
    console.error("Error fetching Mboum data:", error);
    // Return or throw a structured error for the LLM
    return { error: true, message: error.message };
  }
}

// Export the function(s)
module.exports = {
  getStockFinancialData,
  // ... other exported functions for this plugin ...
};
```

## 7. Development Steps

1.  **Setup New Repository:** Create the `mboum-plugin-suite` repository with the structure outlined above.
2.  **Create `.gitignore`, `LICENSE`, `README.md`.**
3.  **Add `development_plan.md` (this file).**
4.  **Implement Plugin 1 (e.g., General Data):**
    *   Create `plugins/mboum_general_data/`.
    *   Define `plugin.json` with relevant endpoints and clear descriptions/parameter requirements.
    *   Implement corresponding functions in `implementation.js`.
    *   Test thoroughly with sample natural language queries in TypingMind.
5.  **Implement Remaining Plugins:** Repeat Step 4 for each plugin category (Stock, Options, Calendar, Technicals, Crypto).
6.  **Documentation:** Optionally create `docs/Mboum_API_Reference.md` to consolidate relevant API details.
7.  **Refine Descriptions:** Continuously refine the `description` fields in each `plugin.json` based on testing to optimize LLM understanding.
8.  **Final Testing:** Test interactions between plugins and ensure the LLM correctly routes requests.

## 8. Key Considerations

*   **API Key Management:** Securely handle the Mboum API key. Avoid hardcoding.
*   **Error Handling:** Implement robust error handling in `implementation.js` to provide useful feedback to the LLM/user.
*   **LLM Guidance:** The clarity and specificity of the `description` fields in `plugin.json` are crucial for the LLM's success.
*   **Endpoint Specificity:** Ensure each `plugin.json` only includes endpoints relevant to its category. Avoid overlap where possible. If an endpoint serves multiple categories, decide its primary home or potentially duplicate *carefully* if necessary, ensuring distinct `operationId`s and clear descriptions.
*   **Parameter Consistency:** Use consistent naming and descriptions for parameters across plugins where applicable.
