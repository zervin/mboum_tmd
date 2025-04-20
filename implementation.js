(function() {
  // Main function definition at top level
  function mboum_financial_data(params, userSettings) {
    const { endpoint, params: endpointParams } = params;
    const API_KEY = userSettings?.mboumApiKey || 'demo'; // Fallback to demo key

    // Build URL
    const url = new URL(`https://mboum.com/api/v1/${endpoint}`);
    Object.entries(endpointParams || {}).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    
    // Make request
    return fetch(url.toString(), {
      headers: {
        'Accept': 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      return formatResponse(data, endpoint);
    })
    .catch(error => {
      return displayErrorMessage(error.message);
    });
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
