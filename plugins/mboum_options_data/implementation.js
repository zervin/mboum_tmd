// Mboum Options Data Plugin Implementation
async function mboum_options_data(params) { 
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
        options: "/v1/markets/options",
        unusual_options_activity: "/v1/markets/options/unusual-options-activity",
        iv_rank_percentile: "/v1/markets/options/iv-rank-percentile",
        iv_change: "/v1/markets/options/iv-change",
        most_active: "/v1/markets/options/most-active",
        highest_iv: "/v1/markets/options/highest-iv",
        options_flow: "/v1/markets/options/options-flow",
        options_v2: "/v2/markets/options"
    };

    // Get the API path for the specified endpoint
    const apiPath = endpointMap[endpoint]; 
    if (!apiPath) {
      return { error: true, message: `Invalid endpoint selected: '${endpoint}'. Please choose a valid options data endpoint.` };
    }

    // Define required parameters for each endpoint
    const requiredParamsMap = {
        options: ['ticker'],
        unusual_options_activity: ['type'],
        iv_rank_percentile: ['type'],
        iv_change: ['type'],
        most_active: ['type'],
        highest_iv: ['sort'],
        options_flow: ['type'],
        options_v2: ['ticker', 'type']
    };

    // Define parameter validation rules based on Mboum API documentation
    const paramValidationMap = {
        ticker: {
            type: 'string',
            validate: (val) => typeof val === 'string' && val.trim().length > 0,
            errorMsg: "must be a non-empty string (e.g., 'AAPL')"
        },
        type: {
            type: 'string',
            validate: (val, endpoint) => {
                if (endpoint === 'options_v2') {
                    return ['STOCKS', 'ETF', 'MUTUALFUNDS', 'FUTURES'].includes(val);
                } else {
                    return ['STOCKS', 'ETFS', 'INDICES'].includes(val);
                }
            },
            errorMsg: (endpoint) => {
                if (endpoint === 'options_v2') {
                    return "must be one of: 'STOCKS', 'ETF', 'MUTUALFUNDS', 'FUTURES'";
                } else {
                    return "must be one of: 'STOCKS', 'ETFS', 'INDICES'";
                }
            }
        },
        sort: {
            type: 'string',
            validate: (val) => ['HIGHEST', 'LOWEST'].includes(val),
            errorMsg: "must be either 'HIGHEST' or 'LOWEST'"
        },
        expiration: {
            type: 'integer',
            validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
            errorMsg: "must be a positive integer representing a Unix timestamp"
        },
        display: {
            type: 'string',
            validate: (val) => ['list', 'straddle'].includes(val),
            errorMsg: "must be either 'list' or 'straddle'"
        },
        date: {
            type: 'string',
            validate: (val) => /^\d{4}-\d{2}-\d{2}$/.test(val),
            errorMsg: "must be in format 'YYYY-MM-DD'"
        },
        price_min: {
            type: 'string',
            validate: (val) => !isNaN(Number(val)) && Number(val) >= 0,
            errorMsg: "must be a non-negative number"
        },
        direction: {
            type: 'string',
            validate: (val) => ['UP', 'DOWN'].includes(val),
            errorMsg: "must be either 'UP' or 'DOWN'"
        },
        page: {
            type: 'integer',
            validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
            errorMsg: "must be a positive integer"
        },
        from_date: {
            type: 'string',
            validate: (val) => /^\d{4}-\d{2}-\d{2}$/.test(val),
            errorMsg: "must be in format 'YYYY-MM-DD'"
        },
        to_date: {
            type: 'string',
            validate: (val) => /^\d{4}-\d{2}-\d{2}$/.test(val),
            errorMsg: "must be in format 'YYYY-MM-DD'"
        },
        limit: {
            type: 'integer',
            validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
            errorMsg: "must be a positive integer"
        }
    };

    // Determine which parameters are applicable for this endpoint
    const applicableParams = {
        options: ['ticker', 'expiration', 'display'],
        unusual_options_activity: ['type', 'date', 'price_min', 'page'],
        iv_rank_percentile: ['type', 'price_min', 'page'],
        iv_change: ['type', 'direction', 'price_min', 'page'],
        most_active: ['type', 'page'],
        highest_iv: ['sort', 'page'],
        options_flow: ['type', 'page'],
        options_v2: ['ticker', 'type', 'from_date', 'to_date', 'limit']
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
    console.error("Unexpected error in mboum_options_data:", generalError); 
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
  window.mboum_options_data = mboum_options_data;
}
