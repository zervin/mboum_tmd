// Mboum Technical Indicators Plugin Implementation
async function mboum_technical_indicators(params) {
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
      sma: "/v1/indicators/sma",
      ema: "/v1/indicators/ema",
      rsi: "/v1/indicators/rsi",
      macd: "/v1/indicators/macd",
      bbands: "/v1/indicators/bbands",
      adx: "/v1/indicators/adx",
      stoch: "/v1/indicators/stoch",
      fibonacci: "/v1/indicators/fibonacci",
      atr: "/v1/indicators/atr",
      cci: "/v1/indicators/cci",
      pivots: "/v1/indicators/pivots"
    };

    // Get the API path for the specified endpoint
    const apiPath = endpointMap[endpoint];
    if (!apiPath) {
      return { error: true, message: `Invalid endpoint selected: '${endpoint}'. Please choose a valid technical indicator endpoint.` };
    }

    // Define required parameters for each endpoint
    const requiredParamsMap = {
      sma: ['symbol', 'period'],
      ema: ['symbol', 'period'],
      rsi: ['symbol', 'period'],
      macd: ['symbol', 'fast_period', 'slow_period', 'signal_period'],
      bbands: ['symbol', 'period', 'stddev'],
      adx: ['symbol', 'period'],
      stoch: ['symbol', 'k_period', 'd_period'],
      fibonacci: ['symbol'],
      atr: ['symbol', 'period'],
      cci: ['symbol', 'period'],
      pivots: ['symbol']
    };

    // Define parameter validation rules based on Mboum API documentation
    const paramValidationMap = {
      symbol: {
        type: 'string',
        validate: (val) => typeof val === 'string' && val.trim().length > 0,
        errorMsg: "must be a non-empty string (e.g., 'AAPL', 'MSFT')"
      },
      period: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive integer"
      },
      fast_period: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive integer"
      },
      slow_period: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive integer"
      },
      signal_period: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive integer"
      },
      stddev: {
        type: 'number',
        validate: (val) => !isNaN(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive number"
      },
      k_period: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive integer"
      },
      d_period: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive integer"
      },
      ma_type: {
        type: 'string',
        validate: (val) => ['sma', 'ema', 'wma', 'dema', 'tema', 'trima', 'kama', 'mama', 't3'].includes(val.toLowerCase()),
        errorMsg: "must be one of: 'sma', 'ema', 'wma', 'dema', 'tema', 'trima', 'kama', 'mama', 't3'"
      },
      interval: {
        type: 'string',
        validate: (val) => ['1m', '5m', '15m', '30m', '60m', 'daily', 'weekly', 'monthly'].includes(val.toLowerCase()),
        errorMsg: "must be one of: '1m', '5m', '15m', '30m', '60m', 'daily', 'weekly', 'monthly'"
      },
      price_type: {
        type: 'string',
        validate: (val) => ['close', 'open', 'high', 'low', 'volume'].includes(val.toLowerCase()),
        errorMsg: "must be one of: 'close', 'open', 'high', 'low', 'volume'"
      },
      time_period: {
        type: 'string',
        validate: (val) => ['daily', 'weekly', 'monthly'].includes(val.toLowerCase()),
        errorMsg: "must be one of: 'daily', 'weekly', 'monthly'"
      }
    };

    // Determine which parameters are applicable for each endpoint
    const applicableParams = {
      sma: ['symbol', 'period', 'interval', 'price_type', 'time_period'],
      ema: ['symbol', 'period', 'interval', 'price_type', 'time_period'],
      rsi: ['symbol', 'period', 'interval', 'price_type', 'time_period'],
      macd: ['symbol', 'fast_period', 'slow_period', 'signal_period', 'interval', 'price_type', 'time_period'],
      bbands: ['symbol', 'period', 'stddev', 'interval', 'price_type', 'time_period', 'ma_type'],
      adx: ['symbol', 'period', 'interval', 'time_period'],
      stoch: ['symbol', 'k_period', 'd_period', 'interval', 'time_period'],
      fibonacci: ['symbol', 'interval', 'time_period'],
      atr: ['symbol', 'period', 'interval', 'time_period'],
      cci: ['symbol', 'period', 'interval', 'time_period'],
      pivots: ['symbol', 'interval', 'time_period']
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
    console.error("Unexpected error in mboum_technical_indicators:", generalError);
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
  window.mboum_technical_indicators = mboum_technical_indicators;
}
