# Mboum Technical Indicators Plugin

## Overview
This plugin provides access to Mboum's technical indicators API, focusing on technical analysis tools such as moving averages, oscillators, bands, and other popular technical analysis indicators for stock market analysis.

## Plugin Specifications
- **UUID**: mboum-technical-indicators
- **Emoji**: 📊
- **Implementation Type**: JavaScript
- **Method**: GET
- **Base URL**: https://api.mboum.com

## Endpoints
This plugin supports the following Mboum API endpoints:

1. **`/v1/indicators/sma`** (`sma`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
     - `period`: Integer - Number of periods
   - **Optional Parameters**:
     - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
     - `price_type`: String - Price type, one of: "close", "open", "high", "low", "volume"
     - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
   - **Example**: `/v1/indicators/sma?symbol=AAPL&period=50&interval=daily`

2. **`/v1/indicators/ema`** (`ema`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
     - `period`: Integer - Number of periods
   - **Optional Parameters**:
     - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
     - `price_type`: String - Price type, one of: "close", "open", "high", "low", "volume"
     - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
   - **Example**: `/v1/indicators/ema?symbol=AAPL&period=20&interval=daily`

3. **`/v1/indicators/rsi`** (`rsi`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
     - `period`: Integer - Number of periods
   - **Optional Parameters**:
     - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
     - `price_type`: String - Price type, one of: "close", "open", "high", "low", "volume"
     - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
   - **Example**: `/v1/indicators/rsi?symbol=AAPL&period=14&interval=daily`

4. **`/v1/indicators/macd`** (`macd`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
     - `fast_period`: Integer - Fast period
     - `slow_period`: Integer - Slow period
     - `signal_period`: Integer - Signal period
   - **Optional Parameters**:
     - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
     - `price_type`: String - Price type, one of: "close", "open", "high", "low", "volume"
     - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
   - **Example**: `/v1/indicators/macd?symbol=AAPL&fast_period=12&slow_period=26&signal_period=9`

5. **`/v1/indicators/bbands`** (`bbands`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
     - `period`: Integer - Number of periods
     - `stddev`: Number - Standard deviation multiplier
   - **Optional Parameters**:
     - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
     - `price_type`: String - Price type, one of: "close", "open", "high", "low", "volume"
     - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
     - `ma_type`: String - Moving average type, one of: "sma", "ema", "wma", "dema", "tema", "trima", "kama", "mama", "t3"
   - **Example**: `/v1/indicators/bbands?symbol=AAPL&period=20&stddev=2`

6. **`/v1/indicators/adx`** (`adx`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
     - `period`: Integer - Number of periods
   - **Optional Parameters**:
     - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
     - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
   - **Example**: `/v1/indicators/adx?symbol=AAPL&period=14&interval=daily`

7. **`/v1/indicators/stoch`** (`stoch`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
     - `k_period`: Integer - K period
     - `d_period`: Integer - D period
   - **Optional Parameters**:
     - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
     - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
   - **Example**: `/v1/indicators/stoch?symbol=AAPL&k_period=14&d_period=3`

8. **`/v1/indicators/fibonacci`** (`fibonacci`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
   - **Optional Parameters**:
     - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
     - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
   - **Example**: `/v1/indicators/fibonacci?symbol=AAPL&interval=daily`

9. **`/v1/indicators/atr`** (`atr`)
   - **Required Parameters**:
     - `symbol`: String - Stock symbol
     - `period`: Integer - Number of periods
   - **Optional Parameters**:
     - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
     - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
   - **Example**: `/v1/indicators/atr?symbol=AAPL&period=14&interval=daily`

10. **`/v1/indicators/cci`** (`cci`)
    - **Required Parameters**:
      - `symbol`: String - Stock symbol
      - `period`: Integer - Number of periods
    - **Optional Parameters**:
      - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
      - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
    - **Example**: `/v1/indicators/cci?symbol=AAPL&period=20&interval=daily`

11. **`/v1/indicators/pivots`** (`pivots`)
    - **Required Parameters**:
      - `symbol`: String - Stock symbol
    - **Optional Parameters**:
      - `interval`: String - Time interval, one of: "1m", "5m", "15m", "30m", "60m", "daily", "weekly", "monthly"
      - `time_period`: String - Time period, one of: "daily", "weekly", "monthly"
    - **Example**: `/v1/indicators/pivots?symbol=AAPL&interval=daily`

## Implementation Details

### Function: `mboum_technical_indicators`
The main implementation function that processes requests for Mboum's technical indicators data.

#### Parameters
- `params`: Object containing `requestDetails` with:
  - `endpoint`: String - The specific endpoint to call
  - `queryParams`: Object - Key-value pairs for endpoint parameters

#### Endpoint Mapping
The function maps shorthand endpoint names to actual API paths:
```javascript
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
```

#### Parameter Validation
The implementation includes comprehensive validation for all parameters:

1. **Required Parameter Checks**: Ensures all required parameters for each endpoint are provided.
2. **Parameter Type Validation**: Validates the format and type of each parameter.
3. **Enumeration Validation**: Checks that parameters with specific allowed values match one of the allowed options.
4. **Numeric Validation**: Confirms that numeric parameters are valid integers or numbers.
5. **Applicability Validation**: Validates that only relevant parameters for the selected endpoint are provided.

For example, validation for the `interval` parameter:
```javascript
interval: {
  type: 'string',
  validate: (val) => ['1m', '5m', '15m', '30m', '60m', 'daily', 'weekly', 'monthly'].includes(val.toLowerCase()),
  errorMsg: "must be one of: '1m', '5m', '15m', '30m', '60m', 'daily', 'weekly', 'monthly'"
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
1. **Symbol Format**: Use correct capitalization for stock symbols (e.g., "AAPL" not "aapl")
2. **Required Parameters**: Each indicator has specific required parameters - check them carefully
3. **Parameter Values**: Make sure enumerated values match exactly (e.g., "daily" not "day")
4. **Period Values**: For oscillators like RSI, typical periods are 14, for moving averages, 20, 50, or 200
5. **Error Details**: Check error responses for specific validation issues to help with debugging

## Example Usage

### Simple Moving Average (SMA)
```javascript
const result = await mboum_technical_indicators({
  requestDetails: {
    endpoint: "sma",
    queryParams: {
      symbol: "AAPL",
      period: 50,
      interval: "daily"
    }
  }
});
```

### Exponential Moving Average (EMA)
```javascript
const result = await mboum_technical_indicators({
  requestDetails: {
    endpoint: "ema",
    queryParams: {
      symbol: "AAPL",
      period: 20,
      interval: "daily"
    }
  }
});
```

### Relative Strength Index (RSI)
```javascript
const result = await mboum_technical_indicators({
  requestDetails: {
    endpoint: "rsi",
    queryParams: {
      symbol: "AAPL",
      period: 14,
      interval: "daily",
      price_type: "close"
    }
  }
});
```

### Moving Average Convergence Divergence (MACD)
```javascript
const result = await mboum_technical_indicators({
  requestDetails: {
    endpoint: "macd",
    queryParams: {
      symbol: "AAPL",
      fast_period: 12,
      slow_period: 26,
      signal_period: 9,
      interval: "daily"
    }
  }
});
```

### Bollinger Bands
```javascript
const result = await mboum_technical_indicators({
  requestDetails: {
    endpoint: "bbands",
    queryParams: {
      symbol: "AAPL",
      period: 20,
      stddev: 2,
      interval: "daily"
    }
  }
});
```

### Stochastic Oscillator
```javascript
const result = await mboum_technical_indicators({
  requestDetails: {
    endpoint: "stoch",
    queryParams: {
      symbol: "AAPL",
      k_period: 14,
      d_period: 3,
      interval: "daily"
    }
  }
});
```

## Related Documentation
- [Mboum API Documentation](https://mboum.com/api/documentation)
- [Development Plan](../../development_plan.md)
