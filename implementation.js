(function() {
  const BASE_URL = 'https://mboum.com/api';
  const API_KEY = 'demo'; // Using MBOUM's demo key for testing

  function mboum_financial_data(params) {
    const { endpoint, params: endpointParams } = params;
    const API_KEY = 'demo'; // Hardcoded for now
    
    // Build URL
    const url = new URL(`${BASE_URL}/v1/${endpoint}`);
    Object.entries(endpointParams || {}).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    url.searchParams.append('apikey', API_KEY);

    // Make request
    return fetch(url.toString())
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
        
        // Format response as HTML
        return formatResponse(data, endpoint);
      })
      .catch(error => {
        return displayErrorMessage(error.message);
      });
  }

  function formatResponse(data, endpoint) {
    // Basic HTML formatting
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

  // Return the function directly without export
  return mboum_financial_data;
})();
