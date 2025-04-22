# Mboum Crypto Data Plugin

## Overview
This plugin provides access to Mboum's cryptocurrency data API, focusing on cryptocurrency market summaries, quotes, trending coins, currency lists, and historical pricing data.

## Plugin Specifications
- **UUID**: mboum-crypto-data
- **Emoji**: 🪙
- **Implementation Type**: JavaScript
- **Method**: GET
- **Base URL**: https://api.mboum.com

## Endpoints
This plugin supports the following Mboum API endpoints:

1. **`/v1/crypto/market-summary`** (`summary`)
   - **Required Parameters**: None
   - **Optional Parameters**:
     - `region`: String - Region code for localized data
     - `lang`: String - Language code for localized data
   - **Example**: `/v1/crypto/market-summary?region=US&lang=en`

2. **`/v1/crypto/trending`** (`trending`)
   - **Required Parameters**: None
   - **Optional Parameters**:
     - `region`: String - Region code for localized data
     - `lang`: String - Language code for localized data
   - **Example**: `/v1/crypto/trending?region=US&lang=en`

3. **`/v1/crypto/currencies`** (`currencies`)
   - **Required Parameters**: None
   - **Optional Parameters**:
     - `page`: Integer - Page number for pagination
     - `pageSize`: Integer - Number of results per page (max 100)
     - `currency`: String - Base currency for conversion
   - **Example**: `/v1/crypto/currencies?page=1&pageSize=50&currency=USD`

4. **`/v1/crypto/quotes`** (`quotes`)
   - **Required Parameters**:
     - `symbol`: String - Cryptocurrency symbol(s)
   - **Optional Parameters**:
     - `region`: String - Region code for localized data
     - `lang`: String - Language code for localized data
   - **Example**: `/v1/crypto/quotes?symbol=BTC-USD,ETH-USD&region=US`

5. **`/v1/crypto/historical`** (`historical`)
   - **Required Parameters**:
     - `symbol`: String - Cryptocurrency symbol
     - `interval`: String - Time interval, one of: "1d", "1wk", "1mo", "3mo"
   - **Optional Parameters**:
     - `range`: String - Time range, one of: "1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y", "10y", "ytd", "max"
     - `region`: String - Region code for localized data
     - `lang`: String - Language code for localized data
   - **Example**: `/v1/crypto/historical?symbol=BTC-USD&interval=1d&range=3mo`

## Implementation Details

### Function: `mboum_crypto_data`
The main implementation function that processes requests for Mboum's cryptocurrency data.

#### Parameters
- `params`: Object containing `requestDetails` with:
  - `endpoint`: String - The specific endpoint to call
  - `queryParams`: Object - Key-value pairs for endpoint parameters

#### Endpoint Mapping
The function maps shorthand endpoint names to actual API paths:
```javascript
const endpointMap = {
  summary: "/v1/crypto/market-summary",
  trending: "/v1/crypto/trending",
  currencies: "/v1/crypto/currencies",
  quotes: "/v1/crypto/quotes",
  historical: "/v1/crypto/historical"
};
```

#### Parameter Validation
The implementation includes comprehensive validation for all parameters:

1. **Required Parameter Checks**: Verifies all required parameters for each endpoint are provided.
2. **Parameter Type Validation**: Validates the format and type of each parameter.
3. **Enumeration Validation**: Ensures parameters with specific allowed values match one of the allowed options.
4. **Numeric Validation**: Confirms that numeric parameters are valid integers or numbers.
5. **Applicability Validation**: Validates that only relevant parameters for the selected endpoint are provided.

For example, validation for the `interval` parameter:
```javascript
interval: {
  type: 'string',
  validate: (val) => ['1d', '1wk', '1mo', '3mo'].includes(val),
  errorMsg: "must be one of: '1d', '1wk', '1mo', '3mo'"
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
1. **Symbol Format**: Cryptocurrency symbols should include the currency (e.g., "BTC-USD")
2. **Multiple Symbols**: For multiple symbols, use comma-separated values without spaces
3. **Pagination**: For large result sets, use `page` and `pageSize` parameters for pagination
4. **Time Ranges**: For historical data, select appropriate `interval` and `range` combinations
5. **Error Details**: Check error messages for specific validation and API issues

## Example Usage

### Market Summary
```javascript
const result = await mboum_crypto_data({
  requestDetails: {
    endpoint: "summary",
    queryParams: {
      region: "US",
      lang: "en"
    }
  }
});
```

### Trending Cryptocurrencies
```javascript
const result = await mboum_crypto_data({
  requestDetails: {
    endpoint: "trending",
    queryParams: {
      region: "US"
    }
  }
});
```

### List of Cryptocurrencies
```javascript
const result = await mboum_crypto_data({
  requestDetails: {
    endpoint: "currencies",
    queryParams: {
      page: 1,
      pageSize: 50,
      currency: "USD"
    }
  }
});
```

### Quotes for Multiple Cryptocurrencies
```javascript
const result = await mboum_crypto_data({
  requestDetails: {
    endpoint: "quotes",
    queryParams: {
      symbol: "BTC-USD,ETH-USD,SOL-USD",
      region: "US"
    }
  }
});
```

### Historical Price Data
```javascript
const result = await mboum_crypto_data({
  requestDetails: {
    endpoint: "historical",
    queryParams: {
      symbol: "BTC-USD",
      interval: "1d",
      range: "3mo"
    }
  }
});
```

## Related Documentation
- [Mboum API Documentation](https://mboum.com/api/documentation)
- [Development Plan](../../development_plan.md)
