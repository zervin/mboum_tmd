(function() {
  // Main function definition at top level
  async function mboum_financial_data(params) {
    try {
      // Extract parameters
      const { endpoint, params: endpointParams } = params;
      
      // Hardcoded API key - replace with your actual API key
      const apiKey = "demo"; // Replace with your actual MBOUM API key

      // Validate endpoint
      if (!endpoint) {
        throw new Error("Endpoint parameter is required.");
      }

      // Map endpoint to actual API endpoint
      const endpointMap = {
        quotes: "/v1/markets/stock/quotes",
        history: "/v1/markets/stock/history",
        news: "/v1/markets/stock/news",
        modules: "/v1/markets/stock/modules",
        earnings: "/v1/markets/stock/earnings",
        dividends: "/v1/markets/stock/dividends",
        options: "/v1/markets/stock/options",
        search: "/v1/markets/search",
        movers: "/v1/markets/movers"
      };

      const apiEndpoint = endpointMap[endpoint];
      if (!apiEndpoint) {
        throw new Error(`Invalid endpoint: ${endpoint}`);
      }

      // Build URL with correct base URL
      const url = new URL(`https://api.mboum.com${apiEndpoint}`);
      
      // Add parameters
      if (endpointParams) {
        Object.entries(endpointParams).forEach(([key, value]) => {
          url.searchParams.append(key, value);
        });
      }
      
      // Add API key
      url.searchParams.append('apikey', apiKey);

      // Make the request
      const response = await fetch(url.toString());
      
      if (!response.ok) {
        throw new Error(`MBOUM API request failed: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // TypeMind expects the content directly
      return data;
    } catch (error) {
      // Return formatted error response
      return {
        error: true,
        message: error.message
      };
    }
  }

  // Explicitly expose function to global scope
  window.mboum_financial_data = mboum_financial_data;
})();
