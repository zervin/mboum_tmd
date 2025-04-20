// Main function definition directly in global scope
async function mboum_financial_data(params) {
  try {
    // Extract parameters
    const { endpoint, params: endpointParams } = params;
    const apiKey = "demo"; // Replace with your actual MBOUM API key

    if (!endpoint) {
      // Return error object directly for validation errors
      return { error: true, message: "Endpoint parameter is required." };
    }

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
      // Return error object directly for validation errors
      return { error: true, message: `Invalid endpoint: ${endpoint}` };
    }

    const url = new URL(`https://api.mboum.com${apiEndpoint}`);
    if (endpointParams) {
      Object.entries(endpointParams).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    url.searchParams.append('apikey', apiKey);

    // Make the request
    const response = await fetch(url.toString());

    // Handle non-OK responses specifically
    if (!response.ok) {
      let errorBody = '';
      try {
        // Try to get more details from the API error response
        errorBody = await response.text();
      } catch (e) {
        // Ignore if reading the body fails
      }
      // Return standard error object for API errors
      return {
        error: true,
        message: `MBOUM API request failed: ${response.status} - ${response.statusText}. ${errorBody}`.trim()
      };
    }

    // Try to parse the JSON response
    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      // Return standard error object if JSON parsing fails
      return { error: true, message: `Failed to parse JSON response from MBOUM API: ${parseError.message}` };
    }

    // TypeMind expects the plain data object on success
    return data;

  } catch (error) {
    // Catch any other unexpected errors (e.g., network issues)
    // Return standard error object
    return {
      error: true,
      message: error.message || 'An unexpected error occurred.'
    };
  }
}

// Explicitly expose function to global scope
window.mboum_financial_data = mboum_financial_data;
