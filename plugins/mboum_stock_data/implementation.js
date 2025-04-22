// Mboum Stock Data Plugin Implementation
async function mboum_stock_data(params) {
  try {
    // Extract the structured details from the top-level params object
    const { requestDetails } = params;

    if (!requestDetails || typeof requestDetails !== 'object') {
      return { error: true, message: "Invalid 'requestDetails' parameter structure provided." };
    }

    const { endpoint, queryParams } = requestDetails;

    const apiKey = "demo"; // API key for Mboum (hardcoded for now)

    if (!endpoint) {
      return { error: true, message: "'endpoint' is required within 'requestDetails'." };
    }

    // Define API endpoint paths
    const endpointMap = {
      quote: "/v1/quick-stats/quote",
      profile: "/v1/stocks/profile",
      summary: "/v1/stocks/summary",
      balance_sheet: "/v1/stocks/balance-sheet",
      cash_flow: "/v1/stocks/cash-flow",
      income_statement: "/v1/stocks/income-statement",
      historical: "/v1/stocks/historical",
      recommendation: "/v1/stocks/recommendation",
      key_statistics: "/v1/stocks/stats",
      esg_data: "/v1/stocks/esg",
      insider_transactions: "/v1/stocks/insider"
    };

    // Get the API path for the specified endpoint
    const apiPath = endpointMap[endpoint];
    if (!apiPath) {
      return { error: true, message: `Invalid endpoint selected: '${endpoint}'. Please choose a valid stock data endpoint.` };
    }

    // Define required parameters for each endpoint
    const requiredParamsMap = {
      quote: ['symbol'],
      profile: ['symbol'],
      summary: ['symbol'],
      balance_sheet: ['symbol'],
      cash_flow: ['symbol'],
      income_statement: ['symbol'],
      historical: ['symbol'],
      recommendation: ['symbol'],
      key_statistics: ['symbol'],
      esg_data: ['symbol'],
      insider_transactions: ['symbol']
    };

    // Define parameter validation rules based on Mboum API documentation
    const paramValidationMap = {
      symbol: {
        type: 'string',
        validate: (val) => typeof val === 'string' && val.trim().length > 0,
        errorMsg: "must be a non-empty string (e.g., 'AAPL', 'MSFT')"
      },
      region: {
        type: 'string',
        validate: (val) => typeof val === 'string' && val.trim().length > 0,
        errorMsg: "must be a valid region code (e.g., 'US')"
      },
      lang: {
        type: 'string',
        validate: (val) => typeof val === 'string' && val.trim().length > 0,
        errorMsg: "must be a valid language code (e.g., 'en')"
      },
      period: {
        type: 'string',
        validate: (val) => ['annual', 'quarterly'].includes(val),
        errorMsg: "must be either 'annual' or 'quarterly'"
      },
      interval: {
        type: 'string',
        validate: (val) => ['1d', '1wk', '1mo'].includes(val),
        errorMsg: "must be one of: '1d', '1wk', '1mo'"
      },
      range: {
        type: 'string',
        validate: (val) => ['1d', '5d', '1mo', '3mo', '6mo', '1y', '2y', '5y', '10y', 'ytd', 'max'].includes(val),
        errorMsg: "must be one of: '1d', '5d', '1mo', '3mo', '6mo', '1y', '2y', '5y', '10y', 'ytd', 'max'"
      },
      events: {
        type: 'boolean',
        validate: (val) => val === 'true' || val === 'false' || val === true || val === false,
        errorMsg: "must be either 'true' or 'false'"
      },
      page: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive integer"
      },
      type: {
        type: 'string',
        validate: (val) => ['Buy', 'Sell', 'Option Exercise', 'Award', 'Payment', 'Conversion', 'Other', 'Transfer'].includes(val),
        errorMsg: "must be one of: 'Buy', 'Sell', 'Option Exercise', 'Award', 'Payment', 'Conversion', 'Other', 'Transfer'"
      }
    };

    // Determine which parameters are applicable for each endpoint
    const applicableParams = {
      quote: ['symbol', 'region', 'lang'],
      profile: ['symbol', 'region', 'lang'],
      summary: ['symbol', 'region', 'lang'],
      balance_sheet: ['symbol', 'period'],
      cash_flow: ['symbol', 'period'],
      income_statement: ['symbol', 'period'],
      historical: ['symbol', 'interval', 'range', 'events', 'region', 'lang'],
      recommendation: ['symbol'],
      key_statistics: ['symbol'],
      esg_data: ['symbol'],
      insider_transactions: ['symbol', 'page', 'type']
    };

    // Validate parameters
    const actualParams = queryParams || {};
    const missingParams = [];
    const invalidParams = [];

    // Check required parameters
    const requiredParams = requiredParamsMap[endpoint] || [];
    for (const param of requiredParams) {
      if (!actualParams.hasOwnProperty(param) || actualParams[param] === undefined || actualParams[param] === null || actualParams[param] === '') {
        missingParams.push(param);
      } else if (paramValidationMap[param] && !paramValidationMap[param].validate(actualParams[param])) {
        invalidParams.push(`'${param}' ${paramValidationMap[param].errorMsg}`);
      }
    }

    // Check optional parameters if present
    const allApplicableParams = applicableParams[endpoint] || [];
    for (const param of Object.keys(actualParams)) {
      // Skip validation for required params that have already been checked
      if (requiredParams.includes(param)) continue;
      
      // Validate that this parameter is applicable for this endpoint
      if (!allApplicableParams.includes(param)) {
        invalidParams.push(`'${param}' is not applicable for endpoint '${endpoint}'`);
        continue;
      }
      
      // Validate parameter value
      if (paramValidationMap[param] && !paramValidationMap[param].validate(actualParams[param])) {
        invalidParams.push(`'${param}' ${paramValidationMap[param].errorMsg}`);
      }
    }

    // Return error if any parameters are missing or invalid
    if (missingParams.length > 0) {
      return { 
        error: true, 
        message: `Missing required parameter(s) for endpoint '${endpoint}': ${missingParams.join(', ')}` 
      };
    }

    if (invalidParams.length > 0) {
      return {
        error: true,
        message: `Invalid parameter(s): ${invalidParams.join('; ')}`
      };
    }

    // Construct the API URL
    const url = new URL(`https://api.mboum.com${apiPath}`);
    
    // Add query parameters
    for (const [key, value] of Object.entries(actualParams)) {
      if (value !== null && value !== undefined && value !== '') {
        url.searchParams.append(key, value);
      }
    }
    
    // Add API key
    url.searchParams.append('apikey', apiKey);

    // Make the API call
    let response;
    try {
      response = await fetch(url.toString());
    } catch (networkError) {
      return { 
        error: true, 
        message: `Network error calling MBOUM API: ${networkError.message}`,
        details: {
          url: url.toString().replace(apiKey, '[REDACTED]'),
          errorType: 'NETWORK'
        }
      };
    }

    // Handle API error responses
    if (!response.ok) {
      let errorBody = '';
      try {
        errorBody = await response.text();
      } catch (e) {
        // Ignore if reading the body fails
      }
      
      return {
        error: true,
        message: `MBOUM API request failed: ${response.status} - ${response.statusText}. ${errorBody}`.trim(),
        details: {
          url: url.toString().replace(apiKey, '[REDACTED]'),
          status: response.status,
          errorBody: errorBody,
          errorType: 'API'
        }
      };
    }

    // Parse and return the API response
    try {
      const jsonData = await response.json();
      return jsonData;
    } catch (jsonError) {
      return { 
        error: true, 
        message: `Failed to parse MBOUM API response as JSON: ${jsonError.message}`,
        details: {
          url: url.toString().replace(apiKey, '[REDACTED]'),
          errorType: 'PARSING'
        }
      };
    }
  } catch (generalError) {
    console.error("Unexpected error in mboum_stock_data:", generalError);
    return { 
      error: true, 
      message: `An unexpected error occurred: ${generalError.message}`,
      details: {
        errorType: 'GENERAL'
      }
    };
  }
}

// Export the function for browser environments
if (typeof window !== 'undefined') {
  window.mboum_stock_data = mboum_stock_data;
}
