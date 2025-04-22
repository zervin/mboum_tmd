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
        errorMsg: "must be a non-empty string"
      },
      type: {
        type: 'string',
        validate: (val) => ['STOCKS', 'ETF', 'MUTUALFUNDS', 'FUTURES'].includes(val),
        errorMsg: "must be one of: STOCKS, ETF, MUTUALFUNDS, FUTURES"
      },
      interval: {
        type: 'string',
        validate: (val) => ['1m', '5m', '15m', '30m', '1d', '1wk', '1mo', '3mo'].includes(val),
        errorMsg: "must be one of: 1m, 5m, 15m, 30m, 1d, 1wk, 1mo, 3mo"
      },
      module: {
        type: 'string',
        validate: (val) => [
          'profile', 'income-statement', 'balance-sheet', 'cashflow-statement',
          'financial-data', 'statistics', 'ratios', 'calendar-events', 'sec-filings',
          'recommendation-trend', 'upgrade-downgrade-history', 'insider-transactions',
          'insider-holders', 'net-share-purchase-activity', 'earnings', 'index-trend',
          'industry-trend', 'sector-trend'
        ].includes(val),
        errorMsg: "must be a valid module name"
      },
      diffandsplits: {
        type: 'string',
        validate: (val) => ['true', 'false'].includes(val.toLowerCase()),
        errorMsg: "must be either 'true' or 'false'"
      },
      timeframe: {
        type: 'string',
        validate: (val) => ['annually', 'quarterly', 'trailing'].includes(val),
        errorMsg: "must be one of: annually, quarterly, trailing"
      },
      page: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) >= 1,
        errorMsg: "must be a positive integer"
      },
      limit: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) >= 1,
        errorMsg: "must be a positive integer"
      },
      from_date: {
        type: 'string',
        validate: (val) => /^\d{4}-\d{2}-\d{2}$/.test(val) && !isNaN(Date.parse(val)),
        errorMsg: "must be a valid date in YYYY-MM-DD format"
      },
      to_date: {
        type: 'string',
        validate: (val) => /^\d{4}-\d{2}-\d{2}$/.test(val) && !isNaN(Date.parse(val)),
        errorMsg: "must be a valid date in YYYY-MM-DD format"
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
