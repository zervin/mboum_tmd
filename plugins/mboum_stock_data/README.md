# Mboum Stock Data Plugin

## Overview
This plugin provides access to Mboum's stock data API, focusing on individual stock quotes, company profiles, financial statements, historical pricing, analyst recommendations, key statistics, ESG data, and insider transactions.

## Plugin Specifications
- **UUID**: mboum-stock-data
- **Emoji**: 🏢
- **Implementation Type**: JavaScript
- **Method**: GET
- **Base URL**: https://api.mboum.com

## Endpoints
This plugin supports the following Mboum API endpoints:

1. **`/v1/quick-stats/quote`** (`quote`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**:
     - `region`: String - Region code for localized data
     - `lang`: String - Language code for localized data
   - **Example**: `/v1/quick-stats/quote?symbol=AAPL&region=US`

2. **`/v1/stocks/profile`** (`profile`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**:
     - `region`: String - Region code for localized data
     - `lang`: String - Language code for localized data
   - **Example**: `/v1/stocks/profile?symbol=AAPL&region=US`

3. **`/v1/stocks/summary`** (`summary`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**:
     - `region`: String - Region code for localized data
     - `lang`: String - Language code for localized data
   - **Example**: `/v1/stocks/summary?symbol=AAPL&region=US`

4. **`/v1/stocks/balance-sheet`** (`balance_sheet`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**:
     - `period`: String - Reporting period, one of: "annual", "quarterly"
   - **Example**: `/v1/stocks/balance-sheet?symbol=AAPL&period=annual`

5. **`/v1/stocks/cash-flow`** (`cash_flow`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**:
     - `period`: String - Reporting period, one of: "annual", "quarterly"
   - **Example**: `/v1/stocks/cash-flow?symbol=AAPL&period=annual`

6. **`/v1/stocks/income-statement`** (`income_statement`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**:
     - `period`: String - Reporting period, one of: "annual", "quarterly"
   - **Example**: `/v1/stocks/income-statement?symbol=AAPL&period=annual`

7. **`/v1/stocks/historical`** (`historical`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**:
     - `interval`: String - Time interval, one of: "1d", "1wk", "1mo"
     - `range`: String - Time range, one of: "1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y", "10y", "ytd", "max"
     - `events`: Boolean - Include events (dividends, splits)
     - `region`: String - Region code for localized data
     - `lang`: String - Language code for localized data
   - **Example**: `/v1/stocks/historical?symbol=AAPL&interval=1d&range=3mo`

8. **`/v1/stocks/recommendation`** (`recommendation`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**: None
   - **Example**: `/v1/stocks/recommendation?symbol=AAPL`

9. **`/v1/stocks/stats`** (`key_statistics`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**: None
   - **Example**: `/v1/stocks/stats?symbol=AAPL`

10. **`/v1/stocks/esg`** (`esg_data`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**: None
   - **Example**: `/v1/stocks/esg?symbol=AAPL`

11. **`/v1/stocks/insider`** (`insider_transactions`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**:
     - `page`: Integer - Page number for pagination
     - `type`: String - Transaction type, one of: "Buy", "Sell", "Option Exercise", "Award", "Payment", "Conversion", "Other", "Transfer"
   - **Example**: `/v1/stocks/insider?symbol=AAPL&type=Buy&page=1`

## Implementation Details

### Function: `mboum_stock_data`
The main implementation function that processes requests for Mboum's stock data.

#### Parameters
- `params`: Object containing `requestDetails` with:
  - `endpoint`: String - The specific endpoint to call
  - `queryParams`: Object - Key-value pairs for endpoint parameters

#### Endpoint Mapping
The function maps shorthand endpoint names to actual API paths:
```javascript
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
```

#### Parameter Validation
The implementation includes comprehensive validation for all parameters:

1. **Required Parameter Checks**: Ensures all required parameters for each endpoint are provided.
2. **Parameter Type Validation**: Validates the format and type of each parameter.
3. **Enumeration Validation**: Checks that parameters with specific allowed values match one of the allowed options.
4. **Numeric Validation**: Confirms that numeric parameters are valid integers or numbers.
5. **Applicability Validation**: Validates that only relevant parameters for the selected endpoint are provided.

For example, validation for the `period` parameter:
```javascript
period: {
  type: 'string',
  validate: (val) => ['annual', 'quarterly'].includes(val),
  errorMsg: "must be either 'annual' or 'quarterly'"
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
1. **Stock Symbols**: Use correct capitalization for stock symbols (e.g., "AAPL" not "aapl")
2. **Parameter Combinations**: Some endpoints work best with certain parameter combinations
3. **Time Ranges**: For historical data, choose appropriate `interval` and `range` parameters
4. **Error Details**: Error responses include specific validation issues to help with debugging
5. **Regional Settings**: For localized data, make sure to provide the correct `region` and `lang` parameters

## Example Usage

### Basic Stock Quote
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "quote",
    queryParams: {
      symbol: "AAPL",
      region: "US"
    }
  }
});
```

### Company Profile
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "profile",
    queryParams: {
      symbol: "AAPL"
    }
  }
});
```

### Annual Financial Statements
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "income_statement",
    queryParams: {
      symbol: "AAPL",
      period: "annual"
    }
  }
});
```

### Historical Price Data
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "historical",
    queryParams: {
      symbol: "AAPL",
      interval: "1d",
      range: "3mo",
      events: true
    }
  }
});
```

### Analyst Recommendations
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "recommendation",
    queryParams: {
      symbol: "AAPL"
    }
  }
});
```

### Insider Transactions
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "insider_transactions",
    queryParams: {
      symbol: "AAPL",
      type: "Buy",
      page: 1
    }
  }
});
```

## Related Documentation
- [Mboum API Documentation](https://mboum.com/api/documentation)
- [Development Plan](../../development_plan.md)
