# Mboum General Data Plugin

## Overview
This plugin provides access to Mboum's general market data API, focusing on market-wide information, searches, market movers, news, and screeners. It's designed for broad market inquiries rather than specific stock analysis.

## Plugin Specifications
- **UUID**: mboum-general-data
- **Emoji**: 📊
- **Implementation Type**: JavaScript
- **Method**: GET
- **Base URL**: https://api.mboum.com

## Endpoints
This plugin supports the following Mboum API endpoints:

### General Market Endpoints

1. **`/v1/markets/search`** (`search`)
   - **Required Parameters**: 
     - `search`: String - Search query
   - **Optional Parameters**: None
   - **Example**: `/v1/markets/search?search=AAPL`

2. **`/v1/markets/movers`** (`movers`)
   - **Required Parameters**:
     - `type`: String - Type of securities, one of: "STOCKS", "ETF", "MUTUALFUNDS", "FUTURES"
   - **Optional Parameters**: None
   - **Example**: `/v1/markets/movers?type=STOCKS`

3. **`/v1/markets/screener`** (`screener`)
   - **Required Parameters**:
     - `list`: String - Screening list, one of: "trending", "undervalued_growth_stocks", "growth_technology_stocks", "day_gainers", "day_losers", "most_actives", "undervalued_large_caps", "aggressive_small_caps", "small_cap_gainers"
   - **Optional Parameters**:
     - `offset`: Integer - Pagination offset
   - **Example**: `/v1/markets/screener?list=day_gainers`

4. **`/v1/markets/insider-trades`** (`insider_trades`)
   - **Required Parameters**: None
   - **Optional Parameters**:
     - `ticker`: String - Stock symbol to filter
     - `type`: String - Type of trade, one of: "Buy", "Sell", "Transfer"
     - `minValue`: String - Minimum transaction value
     - `politiciansOnly`: String - Filter for politician trades, one of: "true", "false"
     - `page`: Integer - Page number for pagination
   - **Example**: `/v1/markets/insider-trades?type=Buy&minValue=10000`

5. **`/v1/markets/news`** (`news`)
   - **Required Parameters**: None
   - **Optional Parameters**:
     - `ticker`: String - Stock symbol(s) to filter news
   - **Example**: `/v1/markets/news?ticker=AAPL,MSFT`

6. **`/v2/markets/search`** (`search_v2`)
   - **Required Parameters**:
     - `search`: String - Search query
   - **Optional Parameters**: None
   - **Example**: `/v2/markets/search?search=AAPL`

7. **`/v2/markets/movers`** (`movers_v2`)
   - **Required Parameters**:
     - `change_type`: String - Type of change, one of: "PERCENT", "PRICE", "GAP"
   - **Optional Parameters**:
     - `direction`: String - Direction filter, one of: "UP", "DOWN"
     - `price_min`: String - Minimum price filter
     - `page`: Integer - Page number for pagination
   - **Example**: `/v2/markets/movers?change_type=PERCENT&direction=UP`

8. **`/v2/markets/tickers`** (`tickers`)
   - **Required Parameters**:
     - `type`: String - Type of securities, one of: "STOCKS", "ETF", "MUTUALFUNDS", "FUTURES", "INDEX"
   - **Optional Parameters**:
     - `page`: Integer - Page number for pagination
   - **Example**: `/v2/markets/tickers?type=STOCKS`

9. **`/v2/markets/market-info`** (`market_info`)
   - **Required Parameters**: None
   - **Optional Parameters**: None
   - **Example**: `/v2/markets/market-info`

10. **`/v2/markets/screener`** (`screener_v2`)
    - **Required Parameters**:
      - `metricType`: String - Type of metric, one of: "overview", "technical", "performance", "fundamental"
      - `filter`: String - Filter criteria, one of: "high_volume", "hot_stocks", "top_under_10", "dividend", "top_fundamentals", "top_tech", "j_pattern", "golden_cross", "death_cross", "consolidation", "rsi_overbought", "rsi_oversold", "52wk_toppicks", "penny_gap", "defensive_stock", "income_growth", "buy_longterm", "sell_growth"
    - **Optional Parameters**:
      - `page`: Integer - Page number for pagination
    - **Example**: `/v2/markets/screener?metricType=overview&filter=high_volume`

11. **`/v2/markets/news`** (`news_v2`)
    - **Required Parameters**: None
    - **Optional Parameters**:
      - `ticker`: String - Stock symbol to filter news
      - `type`: String - News type, one of: "ALL", "MARKET", "VIDEO", "PRESS-RELEASE"
      - `page`: Integer - Page number for pagination
    - **Example**: `/v2/markets/news?ticker=AAPL&type=ALL`

## Implementation Details

### Function: `mboum_general_data`
The main implementation function that processes requests for Mboum's general market data.

#### Parameters
- `params`: Object containing `requestDetails` with:
  - `endpoint`: String - The specific endpoint to call
  - `queryParams`: Object - Key-value pairs for endpoint parameters

#### Endpoint Mapping
The function maps shorthand endpoint names to actual API paths:
```javascript
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
```

#### Parameter Validation
The implementation includes comprehensive validation for all parameters:

1. **Required Parameter Checks**: Ensures all required parameters for each endpoint are provided.
2. **Parameter Type Validation**: Validates the format and type of each parameter.
3. **Enumeration Validation**: Checks that parameters with specific allowed values match one of the allowed options.
4. **Applicability Validation**: Validates that only relevant parameters for the selected endpoint are provided.

For example, validation for the `list` parameter:
```javascript
list: {
    type: 'string',
    validate: (val) => [
        'trending', 'undervalued_growth_stocks', 'growth_technology_stocks', 
        'day_gainers', 'day_losers', 'most_actives', 'undervalued_large_caps', 
        'aggressive_small_caps', 'small_cap_gainers'
    ].includes(val),
    errorMsg: "must be one of the valid screening lists (e.g., 'day_gainers', 'trending')"
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
1. **Endpoint Selection**: Choose the endpoint that best matches the user's request for general market data.
2. **Required Parameters**: Check the documentation for required parameters specific to each endpoint.
3. **Parameter Formats**: Pay attention to formats and allowed values for parameters like `type`, `list`, etc.
4. **Error Details**: The error responses include detailed information about what went wrong.
5. **API Limitations**: Some endpoints may have rate limits or restrictions on parameter combinations.

## Example Usage

### Simple Market Search
```javascript
const result = await mboum_general_data({
  requestDetails: {
    endpoint: "search",
    queryParams: {
      search: "AAPL"
    }
  }
});
```

### Market Movers with Direction Filter
```javascript
const result = await mboum_general_data({
  requestDetails: {
    endpoint: "movers_v2",
    queryParams: {
      change_type: "PERCENT",
      direction: "UP",
      price_min: "10"
    }
  }
});
```

### Advanced Market Screener
```javascript
const result = await mboum_general_data({
  requestDetails: {
    endpoint: "screener_v2",
    queryParams: {
      metricType: "overview",
      filter: "dividend"
    }
  }
});
```

### Insider Trading with Filters
```javascript
const result = await mboum_general_data({
  requestDetails: {
    endpoint: "insider_trades",
    queryParams: {
      type: "Buy",
      minValue: "10000",
      politiciansOnly: "true",
      page: 1
    }
  }
});
```

### Latest Market News
```javascript
const result = await mboum_general_data({
  requestDetails: {
    endpoint: "news_v2",
    queryParams: {
      type: "MARKET",
      page: 1
    }
  }
});
```

## Related Documentation
- [Mboum API Documentation](https://mboum.com/api/documentation)
- [Development Plan](../../development_plan.md)
