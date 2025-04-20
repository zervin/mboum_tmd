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

      // Check if requests array exists
      if (!params.requests || !Array.isArray(params.requests) || params.requests.length === 0) {
        throw new Error("At least one request is required.");
      }

      // Process all requests
      const results = {};
      for (const request of params.requests) {
        const { endpoint, params: endpointParams } = request;
        
        if (!endpoint) {
          throw new Error("Endpoint parameter is required for each request.");
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
          throw new Error(`MBOUM API request failed for ${endpoint}: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        results[endpoint] = data;
      }

      return formatResponse(results);
    } catch (error) {
      return displayErrorMessage(error.message);
    }
  }

  // Helper functions
  function formatResponse(data) {
    return `
      <div style="font-family: Arial, sans-serif; padding: 15px;">
        <h2>MBOUM Financial Data Results</h2>
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
