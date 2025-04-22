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

### v1 Endpoints
- **`/v1/markets/quote`** (`quote`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
     - `type`: String - Type of security (STOCKS|ETF|MUTUALFUNDS|FUTURES)
   - **Optional Parameters**: None
   - **Example**: `/v1/markets/quote?ticker=AAPL&type=STOCKS`

- **`/v1/markets/stock/quotes`** (`stock_quotes`)
   - **Required Parameters**:
     - `ticker`: String - Comma-separated list of stock tickers
   - **Optional Parameters**: None
   - **Example**: `/v1/markets/stock/quotes?ticker=AAPL,GOOG,MSFT`

- **`/v1/markets/stock/history`** (`stock_history`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
     - `interval`: String - Time interval (1m|5m|15m|30m|1d|1wk|1mo|3mo)
   - **Optional Parameters**:
     - `diffandsplits`: Boolean - Include differences and splits
   - **Example**: `/v1/markets/stock/history?ticker=AAPL&interval=1d&diffandsplits=true`

- **`/v1/markets/stock/modules`** (`stock_modules`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
     - `module`: String - Financial data module (see full list below)
   - **Optional Parameters**:
     - `timeframe`: String - Timeframe (annually|quarterly|trailing)
   - **Example**: `/v1/markets/stock/modules?ticker=AAPL&module=income-statement&timeframe=annually`

- **`/v1/markets/stock/analyst-ratings`** (`analyst_ratings`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
   - **Optional Parameters**:
     - `page`: Integer - Page number for pagination
   - **Example**: `/v1/markets/stock/analyst-ratings?ticker=AAPL&page=1`

### v2 Endpoints
- **`/v2/markets/stock/ticker-summary`** (`ticker_summary`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
     - `type`: String - Type of security (STOCKS|ETF|MUTUALFUNDS|FUTURES)
   - **Optional Parameters**: None
   - **Example**: `/v2/markets/stock/ticker-summary?ticker=AAPL&type=STOCKS`

- **`/v2/markets/stock/price-targets`** (`price_targets`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
   - **Optional Parameters**: None
   - **Example**: `/v2/markets/stock/price-targets?ticker=AAPL`

- **`/v2/markets/stock/financials`** (`financials`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
   - **Optional Parameters**: None
   - **Example**: `/v2/markets/stock/financials?ticker=AAPL`

- **`/v2/markets/stock/revenue`** (`revenue`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
   - **Optional Parameters**:
     - `page`: Integer - Page number for pagination
   - **Example**: `/v2/markets/stock/revenue?ticker=AAPL&page=1`

- **`/v2/markets/stock/short-interest`** (`short_interest`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
     - `type`: String - Type of security (STOCKS|ETF|MUTUALFUNDS|FUTURES)
   - **Optional Parameters**: None
   - **Example**: `/v2/markets/stock/short-interest?ticker=AAPL&type=STOCKS`

- **`/v2/markets/stock/institutional-holdings`** (`institutional_holdings`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
     - `type`: String - Type of holding (TOTAL|INCREASED|NEW|DECREASED|SOLDOUT|ACTIVITY)
   - **Optional Parameters**:
     - `limit`: Integer - Limit number of results
   - **Example**: `/v2/markets/stock/institutional-holdings?ticker=AAPL&type=TOTAL&limit=10`

- **`/v2/markets/stock/sec-filings`** (`sec_filings`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
     - `type`: String - Type of filing (FORM-4|ALL)
   - **Optional Parameters**:
     - `limit`: Integer - Limit number of results
   - **Example**: `/v2/markets/stock/sec-filings?ticker=AAPL&type=FORM-4&limit=10`

- **`/v2/markets/stock/historical`** (`historical`)
   - **Required Parameters**:
     - `ticker`: String - Stock ticker
     - `type`: String - Type of security (STOCKS|ETF|MUTUALFUNDS|FUTURES)
   - **Optional Parameters**:
     - `from_date`: String - Start date for historical data
     - `to_date`: String - End date for historical data
     - `limit`: Integer - Limit number of results
   - **Example**: `/v2/markets/stock/historical?ticker=AAPL&type=STOCKS&from_date=2020-01-01&to_date=2020-12-31&limit=100`

## Module Options
The following modules are available for the `/v1/markets/stock/modules` endpoint:
- profile
- income-statement
- balance-sheet
- cashflow-statement
- financial-data
- statistics
- ratios
- calendar-events
- sec-filings
- recommendation-trend
- upgrade-downgrade-history
- insider-transactions
- insider-holders
- net-share-purchase-activity
- earnings
- index-trend
- industry-trend
- sector-trend

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
  quote: "/v1/markets/quote",
  stock_quotes: "/v1/markets/stock/quotes",
  stock_history: "/v1/markets/stock/history",
  stock_modules: "/v1/markets/stock/modules",
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
      ticker: "AAPL",
      type: "STOCKS"
    }
  }
});
```

### Company Profile
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "stock_modules",
    queryParams: {
      ticker: "AAPL",
      module: "profile"
    }
  }
});
```

### Annual Financial Statements
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "stock_modules",
    queryParams: {
      ticker: "AAPL",
      module: "income-statement",
      timeframe: "annual"
    }
  }
});
```

### Historical Price Data
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "stock_history",
    queryParams: {
      ticker: "AAPL",
      interval: "1d",
      diffandsplits: true
    }
  }
});
```

### Analyst Recommendations
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "analyst_ratings",
    queryParams: {
      ticker: "AAPL"
    }
  }
});
```

### Insider Transactions
```javascript
const result = await mboum_stock_data({
  requestDetails: {
    endpoint: "stock_modules",
    queryParams: {
      ticker: "AAPL",
      module: "insider-transactions"
    }
  }
});
```

## Related Documentation
- [Mboum API Documentation](https://mboum.com/api/documentation)
- [Development Plan](../../development_plan.md)
