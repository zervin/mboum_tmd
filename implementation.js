(function() {
  // Main function definition at top level
  async function mboum_financial_data(params, userSettings) {
    try {
      // Check if userSettings exists and has the API key
      if (!userSettings) {
        throw new Error("User settings are not available. Please try again or reload the application.");
      }
      
      const apiKey = userSettings.mboumApiKey;
      if (!apiKey) {
        throw new Error("MBOUM API key is required. Please set it in the user settings.");
      }

      const { endpoint, params: endpointParams } = params;
      if (!endpoint) {
        throw new Error("Endpoint parameter is required.");
      }

      // Build the URL with parameters
      const url = new URL(`https://mboum.com/api/v1/${endpoint}`);
      Object.entries(endpointParams || {}).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });

      // Make the API request
      const response = await fetch(url, {
        headers: {'X-API-KEY': apiKey}
      });

      if (!response.ok) {
        throw new Error(`MBOUM API request failed: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return formatResponse(data, endpoint);
    } catch (error) {
      return displayErrorMessage(error.message);
    }
  }

  // Helper functions
  function formatResponse(data, endpoint) {
    return `
      <div style="font-family: Arial, sans-serif; padding: 15px;">
        <h2>MBOUM ${endpoint.toUpperCase()} Data</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      </div>
    `;
  }

  function displayErrorMessage(message) {
    return `
      <div style="font-family: Arial, sans-serif; color: red; padding: 15px;">
        <strong>Error:</strong> ${message}
      </div>
    `;
  }

  // Explicitly expose function to global scope
  window.mboum_financial_data = mboum_financial_data;
})();
