(function() {
  // Main function definition at top level
  function mboum_financial_data(params, userSettings) {
    try {
      // Extract parameters
      const { endpoint, params: endpointParams } = params;
      
      // Check for API key
      const apiKey = userSettings && userSettings.mboumApiKey;
      if (!apiKey) {
        return `<div style="font-family: Arial, sans-serif; color: red; padding: 15px;">
          <strong>Error:</strong> MBOUM API key is required. Please set it in the user settings.
        </div>`;
      }

      // Validate endpoint
      if (!endpoint) {
        return `<div style="font-family: Arial, sans-serif; color: red; padding: 15px;">
          <strong>Error:</strong> Endpoint parameter is required.
        </div>`;
      }

      // Build URL
      const url = new URL(`https://mboum.com/api/v1/${endpoint}`);
      
      // Add parameters
      if (endpointParams) {
        Object.entries(endpointParams).forEach(([key, value]) => {
          url.searchParams.append(key, value);
        });
      }
      
      // Add API key
      url.searchParams.append('apikey', apiKey);

      // Make the request
      return fetch(url.toString())
        .then(response => {
          if (!response.ok) {
            throw new Error(`MBOUM API request failed: ${response.status} - ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          return `
            <div style="font-family: Arial, sans-serif; padding: 15px;">
              <h2>MBOUM ${endpoint.toUpperCase()} Data</h2>
              <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 5px; overflow: auto; max-height: 500px;">${JSON.stringify(data, null, 2)}</pre>
            </div>
          `;
        })
        .catch(error => {
          return `
            <div style="font-family: Arial, sans-serif; color: red; padding: 15px;">
              <strong>Error:</strong> ${error.message}
            </div>
          `;
        });
    } catch (error) {
      return `
        <div style="font-family: Arial, sans-serif; color: red; padding: 15px;">
          <strong>Error:</strong> ${error.message}
        </div>
      `;
    }
  }

  // Explicitly expose function to global scope
  window.mboum_financial_data = mboum_financial_data;
})();
