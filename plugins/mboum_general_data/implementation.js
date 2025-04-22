// Mboum General Data Plugin Implementation
async function mboum_general_data(params) { 
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
        search: "/v1/markets/search",
        movers: "/v1/markets/movers", 
        screener: "/v1/markets/screener",
        insider_trades: "/v1/markets/insider-trades",
        news: "/v1/markets/news",
        search_v2: "/v2/markets/search",
        movers_v2: "/v2/markets/movers",
        tickers: "/v2/markets/tickers",
        market_info: "/v2/markets/market-info",
        screener_v2: "/v2/markets/screener",
        news_v2: "/v2/markets/news"
    };

    // Get the API path for the specified endpoint
    const apiPath = endpointMap[endpoint]; 
    if (!apiPath) {
      return { error: true, message: `Invalid endpoint selected: '${endpoint}'. Please choose a valid general market data endpoint.` };
    }

    // Define required parameters for each endpoint
    const requiredParamsMap = {
        search: ['search'],
        movers: ['type'],
        screener: ['list'],
        insider_trades: [], // No required params
        news: [], // No required params
        search_v2: ['search'],
        movers_v2: ['change_type'],
        tickers: ['type'],
        market_info: [], // No required params
        screener_v2: ['metricType', 'filter'],
        news_v2: [] // No required params
    };

    // Define parameter validation rules based on Mboum API documentation
    const paramValidationMap = {
        search: {
            type: 'string',
            validate: (val) => typeof val === 'string' && val.trim().length > 0,
            errorMsg: "must be a non-empty string"
        },
        type: {
            type: 'string',
            validate: (val, endpoint) => {
                if (endpoint === 'movers') {
                    return ['STOCKS', 'ETF', 'MUTUALFUNDS', 'FUTURES'].includes(val);
                } else if (endpoint === 'tickers') {
                    return ['STOCKS', 'ETF', 'MUTUALFUNDS', 'FUTURES', 'INDEX'].includes(val);
                }
                return true; // For other endpoints that might use type
            },
            errorMsg: (endpoint) => {
                if (endpoint === 'movers') {
                    return "must be one of: 'STOCKS', 'ETF', 'MUTUALFUNDS', 'FUTURES'";
                } else if (endpoint === 'tickers') {
                    return "must be one of: 'STOCKS', 'ETF', 'MUTUALFUNDS', 'FUTURES', 'INDEX'";
                }
                return "invalid value";
            }
        },
        list: {
            type: 'string',
            validate: (val) => [
                'trending', 'undervalued_growth_stocks', 'growth_technology_stocks', 
                'day_gainers', 'day_losers', 'most_actives', 'undervalued_large_caps', 
                'aggressive_small_caps', 'small_cap_gainers'
            ].includes(val),
            errorMsg: "must be one of the valid screening lists (e.g., 'day_gainers', 'trending')"
        },
        ticker: {
            type: 'string',
            validate: (val) => typeof val === 'string' && val.trim().length > 0,
            errorMsg: "must be a non-empty string or comma-separated list of symbols"
        },
        offset: {
            type: 'integer',
            validate: (val) => Number.isInteger(Number(val)) && Number(val) >= 0,
            errorMsg: "must be a non-negative integer"
        },
        minValue: {
            type: 'string',
            validate: (val) => !isNaN(Number(val)) && Number(val) >= 0,
            errorMsg: "must be a non-negative number"
        },
        politiciansOnly: {
            type: 'string',
            validate: (val) => ['true', 'false'].includes(val),
            errorMsg: "must be either 'true' or 'false'"
        },
        page: {
            type: 'integer',
            validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
            errorMsg: "must be a positive integer"
        },
        change_type: {
            type: 'string',
            validate: (val) => ['PERCENT', 'PRICE', 'GAP'].includes(val),
            errorMsg: "must be one of: 'PERCENT', 'PRICE', 'GAP'"
        },
        direction: {
            type: 'string',
            validate: (val) => ['UP', 'DOWN'].includes(val),
            errorMsg: "must be either 'UP' or 'DOWN'"
        },
        price_min: {
            type: 'string',
            validate: (val) => !isNaN(Number(val)) && Number(val) >= 0,
            errorMsg: "must be a non-negative number"
        },
        metricType: {
            type: 'string',
            validate: (val) => ['overview', 'technical', 'performance', 'fundamental'].includes(val),
            errorMsg: "must be one of: 'overview', 'technical', 'performance', 'fundamental'"
        },
        filter: {
            type: 'string',
            validate: (val) => [
                'high_volume', 'hot_stocks', 'top_under_10', 'dividend', 
                'top_fundamentals', 'top_tech', 'j_pattern', 'golden_cross', 
                'death_cross', 'consolidation', 'rsi_overbought', 'rsi_oversold', 
                '52wk_toppicks', 'penny_gap', 'defensive_stock', 'income_growth', 
                'buy_longterm', 'sell_growth'
            ].includes(val),
            errorMsg: "must be one of the valid filter types (e.g., 'high_volume', 'dividend')"
        }
    };

    // Determine which parameters are applicable for this endpoint
    const applicableParams = {
        search: ['search'],
        movers: ['type'],
        screener: ['list', 'offset'],
        insider_trades: ['ticker', 'type', 'minValue', 'politiciansOnly', 'page'],
        news: ['ticker'],
        search_v2: ['search'],
        movers_v2: ['change_type', 'direction', 'price_min', 'page'],
        tickers: ['type', 'page'],
        market_info: [],
        screener_v2: ['metricType', 'filter', 'page'],
        news_v2: ['ticker', 'type', 'page']
    };

    // Validate required parameters are present and valid
    const actualParams = queryParams || {};
    const missingParams = [];
    const invalidParams = [];

    // Check required parameters
    const requiredParams = requiredParamsMap[endpoint] || [];
    for (const param of requiredParams) {
        if (!actualParams.hasOwnProperty(param) || actualParams[param] === undefined || actualParams[param] === null || actualParams[param] === '') {
            missingParams.push(param);
        } else if (paramValidationMap[param] && !paramValidationMap[param].validate(actualParams[param], endpoint)) {
            const errorMsg = typeof paramValidationMap[param].errorMsg === 'function' 
                ? paramValidationMap[param].errorMsg(endpoint) 
                : paramValidationMap[param].errorMsg;
            invalidParams.push(`'${param}' ${errorMsg}`);
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
        if (paramValidationMap[param] && !paramValidationMap[param].validate(actualParams[param], endpoint)) {
            const errorMsg = typeof paramValidationMap[param].errorMsg === 'function' 
                ? paramValidationMap[param].errorMsg(endpoint) 
                : paramValidationMap[param].errorMsg;
            invalidParams.push(`'${param}' ${errorMsg}`);
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
    console.error("Unexpected error in mboum_general_data:", generalError); 
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
  window.mboum_general_data = mboum_general_data;
}
