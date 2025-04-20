(function() {
  // Main function definition at top level
  function mboum_financial_data(params, userSettings) {
    const { endpoint, params: endpointParams } = params;
    const API_KEY = userSettings?.mboumApiKey || 'demo';
  
    if (!API_KEY) {
      return `<div style='color:red'>MBOUM API key required</div>`;
    }

    const url = new URL(`https://mboum.com/api/v1/${endpoint}`);
    Object.entries(endpointParams || {}).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    return fetch(url, {
      headers: {'X-API-KEY': API_KEY}
    })
    .then(response => response.json())
    .then(data => {
      return `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
      return `<div style='color:red'>Error: ${error.message}</div>`;
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
