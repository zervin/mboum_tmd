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
      quote: "/v1/markets/quote",
      quotes: "/v1/markets/stock/quotes",
      history: "/v1/markets/stock/history",
      modules: "/v1/markets/stock/modules",
      analyst_ratings: "/v1/markets/stock/analyst-ratings",
      ticker_summary: "/v2/markets/stock/ticker-summary",
      price_targets: "/v2/markets/stock/price-targets",
      financials: "/v2/markets/stock/financials",
      revenue: "/v2/markets/stock/revenue",
      short_interest: "/v2/markets/stock/short-interest",
      institutional_holdings: "/v2/markets/stock/institutional-holdings",
      sec_filings: "/v2/markets/stock/sec-filings",
      historical: "/v2/markets/stock/historical"
    };

    // Get the API path for the specified endpoint
    const apiPath = endpointMap[endpoint];
    if (!apiPath) {
      return { error: true, message: `Invalid endpoint selected: '${endpoint}'. Please choose a valid stock data endpoint.` };
    }

    // Define required parameters for each endpoint
    const requiredParamsMap = {
      quote: ['ticker', 'type'],
      quotes: ['ticker'],
      history: ['ticker', 'interval'],
      modules: ['ticker', 'module'],
      analyst_ratings: ['ticker'],
      ticker_summary: ['ticker', 'type'],
      price_targets: ['ticker'],
      financials: ['ticker'],
      revenue: ['ticker'],
      short_interest: ['ticker', 'type'],
      institutional_holdings: ['ticker', 'type'],
      sec_filings: ['ticker', 'type'],
      historical: ['ticker', 'type']
    };

    // Define parameter validation rules based on Mboum API documentation
    const paramValidationMap = {
      ticker: {
        type: 'string',
        validate: (val) => typeof val === 'string' && val.trim().length > 0,
        errorMsg: "must be a non-empty string (e.g., 'AAPL', 'MSFT')"
      },
      type: {
        type: 'string',
        validate: (val) => ['realtime', 'delayed'].includes(val),
        errorMsg: "must be either 'realtime' or 'delayed'"
      },
      interval: {
        type: 'string',
        validate: (val) => ['1min', '5min', '15min', '30min', '60min'].includes(val),
        errorMsg: "must be one of: '1min', '5min', '15min', '30min', '60min'"
      },
      module: {
        type: 'string',
        validate: (val) => ['profile', 'summary', 'income-statement', 'cash-flow', 'balance-sheet', 'key-metrics', 'financials', 'major-holders', 'institutional-holders', 'sector-performance', 'recommendation-ratings', 'price-targets', 'earnings', 'earnings-history', 'insider-transactions', 'ipo-upcoming', 'ipo-calendar', 'analyst-recommendations', 'index-trends', 'industry-trends', 'sector-trends', 'symbol-lookup', 'market-news', 'list-trends', 'etf-trends', 'index-constituents', 'crypto-ratings', 'crypto-news', 'crypto-exchanges', 'crypto-asset-profile', 'crypto-asset-holdings', 'crypto-asset-profile-2', 'crypto-asset-holdings-2', 'crypto-asset-profile-3', 'crypto-asset-holdings-3', 'crypto-asset-profile-4', 'crypto-asset-holdings-4', 'crypto-asset-profile-5', 'crypto-asset-holdings-5', 'crypto-asset-profile-6', 'crypto-asset-holdings-6', 'crypto-asset-profile-7', 'crypto-asset-holdings-7', 'crypto-asset-profile-8', 'crypto-asset-holdings-8', 'crypto-asset-profile-9', 'crypto-asset-holdings-9', 'crypto-asset-profile-10', 'crypto-asset-holdings-10', 'crypto-asset-profile-11', 'crypto-asset-holdings-11', 'crypto-asset-profile-12', 'crypto-asset-holdings-12', 'crypto-asset-profile-13', 'crypto-asset-holdings-13', 'crypto-asset-profile-14', 'crypto-asset-holdings-14', 'crypto-asset-profile-15', 'crypto-asset-holdings-15', 'crypto-asset-profile-16', 'crypto-asset-holdings-16', 'crypto-asset-profile-17', 'crypto-asset-holdings-17', 'crypto-asset-profile-18', 'crypto-asset-holdings-18', 'crypto-asset-profile-19', 'crypto-asset-holdings-19', 'crypto-asset-profile-20', 'crypto-asset-holdings-20', 'crypto-asset-profile-21', 'crypto-asset-holdings-21', 'crypto-asset-profile-22', 'crypto-asset-holdings-22', 'crypto-asset-profile-23', 'crypto-asset-holdings-23', 'crypto-asset-profile-24', 'crypto-asset-holdings-24', 'crypto-asset-profile-25', 'crypto-asset-holdings-25', 'crypto-asset-profile-26', 'crypto-asset-holdings-26', 'crypto-asset-profile-27', 'crypto-asset-holdings-27', 'crypto-asset-profile-28', 'crypto-asset-holdings-28', 'crypto-asset-profile-29', 'crypto-asset-holdings-29', 'crypto-asset-profile-30', 'crypto-asset-holdings-30', 'crypto-asset-profile-31', 'crypto-asset-holdings-31', 'crypto-asset-profile-32', 'crypto-asset-holdings-32', 'crypto-asset-profile-33', 'crypto-asset-holdings-33', 'crypto-asset-profile-34', 'crypto-asset-holdings-34', 'crypto-asset-profile-35', 'crypto-asset-holdings-35', 'crypto-asset-profile-36', 'crypto-asset-holdings-36', 'crypto-asset-profile-37', 'crypto-asset-holdings-37', 'crypto-asset-profile-38', 'crypto-asset-holdings-38', 'crypto-asset-profile-39', 'crypto-asset-holdings-39', 'crypto-asset-profile-40', 'crypto-asset-holdings-40', 'crypto-asset-profile-41', 'crypto-asset-holdings-41', 'crypto-asset-profile-42', 'crypto-asset-holdings-42', 'crypto-asset-profile-43', 'crypto-asset-holdings-43', 'crypto-asset-profile-44', 'crypto-asset-holdings-44', 'crypto-asset-profile-45', 'crypto-asset-holdings-45', 'crypto-asset-profile-46', 'crypto-asset-holdings-46', 'crypto-asset-profile-47', 'crypto-asset-holdings-47', 'crypto-asset-profile-48', 'crypto-asset-holdings-48', 'crypto-asset-profile-49', 'crypto-asset-holdings-49', 'crypto-asset-profile-50', 'crypto-asset-holdings-50', 'crypto-asset-profile-51', 'crypto-asset-holdings-51', 'crypto-asset-profile-52', 'crypto-asset-holdings-52', 'crypto-asset-profile-53', 'crypto-asset-holdings-53', 'crypto-asset-profile-54', 'crypto-asset-holdings-54', 'crypto-asset-profile-55', 'crypto-asset-holdings-55', 'crypto-asset-profile-56', 'crypto-asset-holdings-56', 'crypto-asset-profile-57', 'crypto-asset-holdings-57', 'crypto-asset-profile-58', 'crypto-asset-holdings-58', 'crypto-asset-profile-59', 'crypto-asset-holdings-59', 'crypto-asset-profile-60', 'crypto-asset-holdings-60', 'crypto-asset-profile-61', 'crypto-asset-holdings-61', 'crypto-asset-profile-62', 'crypto-asset-holdings-62', 'crypto-asset-profile-63', 'crypto-asset-holdings-63', 'crypto-asset-profile-64', 'crypto-asset-holdings-64', 'crypto-asset-profile-65', 'crypto-asset-holdings-65', 'crypto-asset-profile-66', 'crypto-asset-holdings-66', 'crypto-asset-profile-67', 'crypto-asset-holdings-67', 'crypto-asset-profile-68', 'crypto-asset-holdings-68', 'crypto-asset-profile-69', 'crypto-asset-holdings-69', 'crypto-asset-profile-70', 'crypto-asset-holdings-70', 'crypto-asset-profile-71', 'crypto-asset-holdings-71', 'crypto-asset-profile-72', 'crypto-asset-holdings-72', 'crypto-asset-profile-73', 'crypto-asset-holdings-73', 'crypto-asset-profile-74', 'crypto-asset-holdings-74', 'crypto-asset-profile-75', 'crypto-asset-holdings-75', 'crypto-asset-profile-76', 'crypto-asset-holdings-76', 'crypto-asset-profile-77', 'crypto-asset-holdings-77', 'crypto-asset-profile-78', 'crypto-asset-holdings-78', 'crypto-asset-profile-79', 'crypto-asset-holdings-79', 'crypto-asset-profile-80', 'crypto-asset-holdings-80', 'crypto-asset-profile-81', 'crypto-asset-holdings-81', 'crypto-asset-profile-82', 'crypto-asset-holdings-82', 'crypto-asset-profile-83', 'crypto-asset-holdings-83', 'crypto-asset-profile-84', 'crypto-asset-holdings-84', 'crypto-asset-profile-85', 'crypto-asset-holdings-85', 'crypto-asset-profile-86', 'crypto-asset-holdings-86', 'crypto-asset-profile-87', 'crypto-asset-holdings-87', 'crypto-asset-profile-88', 'crypto-asset-holdings-88', 'crypto-asset-profile-89', 'crypto-asset-holdings-89', 'crypto-asset-profile-90', 'crypto-asset-holdings-90', 'crypto-asset-profile-91', 'crypto-asset-holdings-91', 'crypto-asset-profile-92', 'crypto-asset-holdings-92', 'crypto-asset-profile-93', 'crypto-asset-holdings-93', 'crypto-asset-profile-94', 'crypto-asset-holdings-94', 'crypto-asset-profile-95', 'crypto-asset-holdings-95', 'crypto-asset-profile-96', 'crypto-asset-holdings-96', 'crypto-asset-profile-97', 'crypto-asset-holdings-97', 'crypto-asset-profile-98', 'crypto-asset-holdings-98', 'crypto-asset-profile-99', 'crypto-asset-holdings-99', 'crypto-asset-profile-100', 'crypto-asset-holdings-100'].includes(val),
        errorMsg: "must be one of the valid module names"
      },
      timeframe: {
        type: 'string',
        validate: (val) => ['annual', 'quarterly'].includes(val),
        errorMsg: "must be either 'annual' or 'quarterly'"
      },
      diffandsplits: {
        type: 'boolean',
        validate: (val) => val === 'true' || val === 'false' || val === true || val === false,
        errorMsg: "must be either 'true' or 'false'"
      },
      page: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive integer"
      },
      limit: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive integer"
      },
      from_date: {
        type: 'string',
        validate: (val) => typeof val === 'string' && val.trim().length > 0,
        errorMsg: "must be a non-empty string (e.g., '2022-01-01')"
      },
      to_date: {
        type: 'string',
        validate: (val) => typeof val === 'string' && val.trim().length > 0,
        errorMsg: "must be a non-empty string (e.g., '2022-12-31')"
      }
    };

    // Determine which parameters are applicable for each endpoint
    const applicableParams = {
      quote: ['ticker', 'type'],
      quotes: ['ticker'],
      history: ['ticker', 'interval', 'diffandsplits'],
      modules: ['ticker', 'module', 'timeframe'],
      analyst_ratings: ['ticker', 'page'],
      ticker_summary: ['ticker', 'type'],
      price_targets: ['ticker'],
      financials: ['ticker'],
      revenue: ['ticker', 'page'],
      short_interest: ['ticker', 'type'],
      institutional_holdings: ['ticker', 'type', 'limit'],
      sec_filings: ['ticker', 'type', 'limit'],
      historical: ['ticker', 'type', 'from_date', 'to_date', 'limit']
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
