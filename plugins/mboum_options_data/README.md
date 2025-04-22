# Mboum Options Data Plugin

## Overview
This plugin provides access to Mboum's options data API, focusing exclusively on stock options data rather than underlying equity information. It handles options chains, unusual options activity, implied volatility (IV) metrics, and options flow data.

## Plugin Specifications
- **UUID**: mboum-options-data
- **Emoji**: 🔄
- **Implementation Type**: JavaScript
- **Method**: GET
- **Base URL**: https://api.mboum.com

## Endpoints
This plugin supports the following Mboum API endpoints:

### Options Endpoints

1. **`/v1/markets/options`** (`options`)
   - **Required Parameters**: 
     - `ticker`: String - Stock symbol (e.g., "AAPL")
   - **Optional Parameters**:
     - `expiration`: Integer - Unix timestamp representing expiration date
     - `display`: String - Display format, one of: "list", "straddle"
   - **Example**: `/v1/markets/options?ticker=AAPL&display=straddle`

2. **`/v1/markets/options/unusual-options-activity`** (`unusual_options_activity`)
   - **Required Parameters**:
     - `type`: String - Asset type, one of: "STOCKS", "ETFS", "INDICES"
   - **Optional Parameters**:
     - `date`: String - Date filter in YYYY-MM-DD format
     - `price_min`: String - Minimum price filter
     - `page`: Integer - Page number for pagination
   - **Example**: `/v1/markets/options/unusual-options-activity?type=STOCKS&price_min=50`

3. **`/v1/markets/options/iv-rank-percentile`** (`iv_rank_percentile`)
   - **Required Parameters**:
     - `type`: String - Asset type, one of: "STOCKS", "ETFS", "INDICES"
   - **Optional Parameters**:
     - `price_min`: String - Minimum price filter
     - `page`: Integer - Page number for pagination
   - **Example**: `/v1/markets/options/iv-rank-percentile?type=STOCKS&page=1`

4. **`/v1/markets/options/iv-change`** (`iv_change`)
   - **Required Parameters**:
     - `type`: String - Asset type, one of: "STOCKS", "ETFS", "INDICES"
   - **Optional Parameters**:
     - `direction`: String - Direction filter, one of: "UP", "DOWN"
     - `price_min`: String - Minimum price filter
     - `page`: Integer - Page number for pagination
   - **Example**: `/v1/markets/options/iv-change?type=STOCKS&direction=UP`

5. **`/v1/markets/options/most-active`** (`most_active`)
   - **Required Parameters**:
     - `type`: String - Asset type, one of: "STOCKS", "ETFS", "INDICES"
   - **Optional Parameters**:
     - `page`: Integer - Page number for pagination
   - **Example**: `/v1/markets/options/most-active?type=STOCKS&page=1`

6. **`/v1/markets/options/highest-iv`** (`highest_iv`)
   - **Required Parameters**:
     - `sort`: String - Sort order, one of: "HIGHEST", "LOWEST"
   - **Optional Parameters**:
     - `page`: Integer - Page number for pagination
   - **Example**: `/v1/markets/options/highest-iv?sort=HIGHEST&page=1`

7. **`/v1/markets/options/options-flow`** (`options_flow`)
   - **Required Parameters**:
     - `type`: String - Asset type, one of: "STOCKS", "ETFS", "INDICES"
   - **Optional Parameters**:
     - `page`: Integer - Page number for pagination
   - **Example**: `/v1/markets/options/options-flow?type=STOCKS&page=1`

8. **`/v2/markets/options`** (`options_v2`)
   - **Required Parameters**:
     - `ticker`: String - Stock symbol (e.g., "AAPL")
     - `type`: String - Asset type, one of: "STOCKS", "ETF", "MUTUALFUNDS", "FUTURES"
   - **Optional Parameters**:
     - `from_date`: String - Start date in YYYY-MM-DD format
     - `to_date`: String - End date in YYYY-MM-DD format
     - `limit`: Integer - Limit number of results
   - **Example**: `/v2/markets/options?ticker=AAPL&type=STOCKS&limit=50`

## Implementation Details

### Function: `mboum_options_data`
The main implementation function that processes requests for Mboum's options data.

#### Parameters
- `params`: Object containing `requestDetails` with:
  - `endpoint`: String - The specific endpoint to call
  - `queryParams`: Object - Key-value pairs for endpoint parameters

#### Endpoint Mapping
The function maps shorthand endpoint names to actual API paths:
```javascript
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
```

#### Parameter Validation
The implementation includes comprehensive validation for all parameters:

1. **Required Parameter Checks**: Ensures all required parameters for each endpoint are provided.
2. **Parameter Type Validation**: Validates the format and type of each parameter.
3. **Enumeration Validation**: Checks that parameters with specific allowed values match one of the allowed options.
4. **Applicability Validation**: Validates that only relevant parameters for the selected endpoint are provided.

For example, validation for the `type` parameter changes based on the endpoint:
```javascript
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
}
```

#### Error Handling
The implementation provides detailed error messages in several categories:

1. **Missing Parameters**: When required parameters are not provided
2. **Invalid Parameters**: When parameters fail validation rules
3. **Network Errors**: When connection to the API fails
4. **API Errors**: When the API returns an error response
5. **Parsing Errors**: When the API response cannot be parsed as JSON

Each error includes detailed information to help with debugging.

## Debugging Tips
1. **Endpoint Selection**: Choose the endpoint that best matches the user's request for options data.
2. **Required Parameters**: Each endpoint has different required parameters; check the documentation.
3. **Parameter Formats**: Pay special attention to date formats (YYYY-MM-DD) and enumeration values.
4. **Error Details**: The implementation provides detailed error information in the response to help diagnose issues.
5. **Pagination**: Many endpoints support pagination via the `page` parameter for large result sets.

## Example Usage

### Basic Options Chain
```javascript
const result = await mboum_options_data({
  requestDetails: {
    endpoint: "options",
    queryParams: {
      ticker: "AAPL"
    }
  }
});
```

### Options Chain with Specific Expiration and Display Format
```javascript
const result = await mboum_options_data({
  requestDetails: {
    endpoint: "options",
    queryParams: {
      ticker: "AAPL",
      expiration: 1734652800,  // June 20, 2025
      display: "straddle"
    }
  }
});
```

### Unusual Options Activity with Filters
```javascript
const result = await mboum_options_data({
  requestDetails: {
    endpoint: "unusual_options_activity",
    queryParams: {
      type: "STOCKS",
      date: "2023-12-15",
      price_min: "50"
    }
  }
});
```

### Highest Implied Volatility
```javascript
const result = await mboum_options_data({
  requestDetails: {
    endpoint: "highest_iv",
    queryParams: {
      sort: "HIGHEST",
      page: 1
    }
  }
});
```

### V2 Options with Date Range
```javascript
const result = await mboum_options_data({
  requestDetails: {
    endpoint: "options_v2",
    queryParams: {
      ticker: "MSFT",
      type: "STOCKS",
      from_date: "2023-01-01",
      to_date: "2023-12-31",
      limit: 100
    }
  }
});
```

## Related Documentation
- [Mboum API Documentation](https://mboum.com/api/documentation)
- [Development Plan](../../development_plan.md)
