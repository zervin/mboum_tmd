// Mboum Calendar Events Plugin Implementation
async function mboum_calendar_events(params) {
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
      ipo: "/v1/markets/calendar/ipo",
      splits: "/v1/markets/calendar/splits",
      economic: "/v1/markets/calendar/economic_events",
      earnings: "/v2/markets/calendar/earnings",
      dividends: "/v2/markets/calendar/dividends"
    };

    // Get the API path for the specified endpoint
    const apiPath = endpointMap[endpoint];
    if (!apiPath) {
      return { error: true, message: `Invalid endpoint selected: '${endpoint}'. Please choose a valid calendar events endpoint.` };
    }

    // Define required parameters for each endpoint
    const requiredParamsMap = {
      ipo: [],
      splits: [],
      economic: [],
      earnings: [],
      dividends: []
    };

    // Define parameter validation rules based on Mboum API documentation
    const paramValidationMap = {
      ticker: {
        type: 'string',
        validate: (val) => typeof val === 'string' && val.trim().length > 0,
        errorMsg: "must be a non-empty string"
      },
      from: {
        type: 'string',
        validate: (val) => {
          // Check if it's a valid date in YYYY-MM-DD format
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          return dateRegex.test(val) && !isNaN(Date.parse(val));
        },
        errorMsg: "must be a valid date in YYYY-MM-DD format"
      },
      to: {
        type: 'string',
        validate: (val) => {
          // Check if it's a valid date in YYYY-MM-DD format
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          return dateRegex.test(val) && !isNaN(Date.parse(val));
        },
        errorMsg: "must be a valid date in YYYY-MM-DD format"
      },
      date: {
        type: 'string',
        validate: (val) => {
          const dateRegex = /^\d{4}-\d{2}(-\d{2})?$/;
          return dateRegex.test(val) && !isNaN(Date.parse(val));
        },
        errorMsg: "must be a valid date in YYYY-MM or YYYY-MM-DD format"
      },
      days: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && val > 0 && val <= 30,
        errorMsg: "must be an integer between 1 and 30"
      },
      page: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && val > 0,
        errorMsg: "must be a positive integer"
      },
      size: {
        type: 'integer',
        validate: (val) => Number.isInteger(Number(val)) && Number(val) > 0,
        errorMsg: "must be a positive integer"
      },
      country: {
        type: 'string',
        validate: (val) => typeof val === 'string' && val.trim().length > 0,
        errorMsg: "must be a valid country code (e.g., 'US', 'GB')"
      },
      importance: {
        type: 'string',
        validate: (val) => ['high', 'medium', 'low'].includes(val.toLowerCase()),
        errorMsg: "must be one of: 'high', 'medium', 'low'"
      },
      start_date: {
        type: 'string',
        validate: (val) => {
          // Check if it's a valid date in YYYY-MM-DD format
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          return dateRegex.test(val) && !isNaN(Date.parse(val));
        },
        errorMsg: "must be a valid date in YYYY-MM-DD format"
      },
      end_date: {
        type: 'string',
        validate: (val) => {
          // Check if it's a valid date in YYYY-MM-DD format
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          return dateRegex.test(val) && !isNaN(Date.parse(val));
        },
        errorMsg: "must be a valid date in YYYY-MM-DD format"
      },
      price_min: {
        type: 'string',
        validate: (val) => !isNaN(Number(val)),
        errorMsg: "must be a valid number"
      },
      optionable: {
        type: 'string',
        validate: (val) => ['true', 'false'].includes(val.toLowerCase()),
        errorMsg: "must be either 'true' or 'false'"
      }
    };

    // Determine which parameters are applicable for each endpoint
    const applicableParams = {
      ipo: ['date'],
      splits: ['date'],
      economic: ['date'],
      earnings: ['days', 'start_date', 'end_date', 'price_min', 'optionable', 'page'],
      dividends: ['date', 'page']
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

    // Special validation for earnings endpoint that requires either days OR start_date/end_date
    if (endpoint === 'earnings') {
      const hasDays = actualParams.hasOwnProperty('days') && actualParams.days !== undefined && actualParams.days !== null && actualParams.days !== '';
      const hasStartDate = actualParams.hasOwnProperty('start_date') && actualParams.start_date !== undefined && actualParams.start_date !== null && actualParams.start_date !== '';
      const hasEndDate = actualParams.hasOwnProperty('end_date') && actualParams.end_date !== undefined && actualParams.end_date !== null && actualParams.end_date !== '';
      
      if (!hasDays && !(hasStartDate && hasEndDate)) {
        invalidParams.push(`For '${endpoint}', either 'days' OR both 'start_date' and 'end_date' must be provided`);
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

    // Parse the response
    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      return {
        error: true,
        message: `Failed to parse MBOUM API response: ${parseError.message}`,
        details: {
          url: url.toString().replace(apiKey, '[REDACTED]'),
          errorType: 'PARSE'
        }
      };
    }

    // Return the successful response
    return {
      data,
      meta: {
        endpoint: apiPath,
        params: Object.fromEntries(url.searchParams.entries())
      }
    };
  } catch (error) {
    return {
      error: true,
      message: `Unexpected error in MBOUM calendar events plugin: ${error.message}`,
      details: {
        errorType: 'UNEXPECTED',
        stack: error.stack
      }
    };
  }
}

// Export the function for browser environments
if (typeof window !== 'undefined') {
  window.mboum_calendar_events = mboum_calendar_events;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = mboum_calendar_events;
}
