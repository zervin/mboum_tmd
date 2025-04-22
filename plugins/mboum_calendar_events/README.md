# Mboum Calendar Events Plugin

## Overview
This plugin provides access to Mboum's financial calendar events API, focusing on time-sensitive financial events such as earnings announcements, IPOs, stock splits, dividend payments, and economic events.

## Plugin Specifications
- **UUID**: mboum-calendar-events
- **Emoji**: 📅
- **Implementation Type**: JavaScript
- **Method**: GET
- **Base URL**: https://api.mboum.com

## Endpoints
This plugin supports the following Mboum API endpoints:

1. **`/v1/calendar/earnings`** (`earnings`)
   - **Required Parameters**: None
   - **Optional Parameters**:
     - `ticker`: String - Stock symbol or comma-separated list of symbols
     - `from`: String - Start date (YYYY-MM-DD format)
     - `to`: String - End date (YYYY-MM-DD format)
     - `date`: String - Specific date (YYYY-MM-DD format)
     - `page`: Integer - Page number for pagination
     - `size`: Integer - Number of results per page
   - **Example**: `/v1/calendar/earnings?ticker=AAPL&from=2023-01-01&to=2023-12-31`

2. **`/v1/calendar/ipo`** (`ipo`)
   - **Required Parameters**: None
   - **Optional Parameters**:
     - `from`: String - Start date (YYYY-MM-DD format)
     - `to`: String - End date (YYYY-MM-DD format)
     - `page`: Integer - Page number for pagination
     - `size`: Integer - Number of results per page
   - **Example**: `/v1/calendar/ipo?from=2023-01-01&to=2023-12-31`

3. **`/v1/calendar/splits`** (`splits`)
   - **Required Parameters**: None
   - **Optional Parameters**:
     - `ticker`: String - Stock symbol or comma-separated list of symbols
     - `from`: String - Start date (YYYY-MM-DD format)
     - `to`: String - End date (YYYY-MM-DD format)
     - `page`: Integer - Page number for pagination
     - `size`: Integer - Number of results per page
   - **Example**: `/v1/calendar/splits?from=2023-01-01&to=2023-12-31`

4. **`/v1/calendar/dividends`** (`dividends`)
   - **Required Parameters**: None
   - **Optional Parameters**:
     - `ticker`: String - Stock symbol or comma-separated list of symbols
     - `from`: String - Start date (YYYY-MM-DD format)
     - `to`: String - End date (YYYY-MM-DD format)
     - `page`: Integer - Page number for pagination
     - `size`: Integer - Number of results per page
   - **Example**: `/v1/calendar/dividends?ticker=AAPL&from=2023-01-01&to=2023-12-31`

5. **`/v1/calendar/economic`** (`economic`)
   - **Required Parameters**: None
   - **Optional Parameters**:
     - `country`: String - Country code (e.g., 'US', 'GB')
     - `from`: String - Start date (YYYY-MM-DD format)
     - `to`: String - End date (YYYY-MM-DD format)
     - `importance`: String - Event importance level, one of: "high", "medium", "low"
     - `page`: Integer - Page number for pagination
     - `size`: Integer - Number of results per page
   - **Example**: `/v1/calendar/economic?country=US&importance=high`

## Implementation Details

### Function: `mboum_calendar_events`
The main implementation function that processes requests for Mboum's calendar events data.

#### Parameters
- `params`: Object containing `requestDetails` with:
  - `endpoint`: String - The specific endpoint to call
  - `queryParams`: Object - Key-value pairs for endpoint parameters

#### Endpoint Mapping
The function maps shorthand endpoint names to actual API paths:
```javascript
const endpointMap = {
  earnings: "/v1/calendar/earnings",
  ipo: "/v1/calendar/ipo",
  splits: "/v1/calendar/splits",
  dividends: "/v1/calendar/dividends",
  economic: "/v1/calendar/economic"
};
```

#### Parameter Validation
The implementation includes comprehensive validation for all parameters:

1. **Required Parameter Checks**: Verifies all required parameters for each endpoint are provided.
2. **Parameter Type Validation**: Validates the format and type of each parameter.
3. **Date Format Validation**: Ensures dates follow the YYYY-MM-DD format.
4. **Numeric Validation**: Confirms that numeric parameters are valid integers or numbers.
5. **Enumeration Validation**: Checks that parameters with specific allowed values match the allowed options.
6. **Applicability Validation**: Validates that only relevant parameters for the selected endpoint are provided.

For example, validation for the `date` parameter:
```javascript
'date': {
  type: 'string',
  validate: (val) => {
    // Check if it's a valid date in YYYY-MM-DD format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(val) && !isNaN(Date.parse(val));
  },
  errorMsg: "must be a valid date in YYYY-MM-DD format"
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
1. **Date Formats**: Ensure all dates follow the YYYY-MM-DD format
2. **Pagination**: Remember that `page` starts from 1, not 0
3. **Symbol Formatting**: For multiple symbols, use comma-separated values without spaces
4. **Error Details**: Check error messages for specific validation issues
5. **Time Ranges**: Make sure `from` dates are before `to` dates for valid ranges

## Example Usage

### Upcoming Earnings for a Specific Company
```javascript
const result = await mboum_calendar_events({
  requestDetails: {
    endpoint: "earnings",
    queryParams: {
      ticker: "AAPL",
      from: "2023-01-01",
      to: "2023-12-31"
    }
  }
});
```

### Recent IPO Activity
```javascript
const result = await mboum_calendar_events({
  requestDetails: {
    endpoint: "ipo",
    queryParams: {
      from: "2023-01-01",
      to: "2023-06-30",
      page: 1,
      size: 20
    }
  }
});
```

### Upcoming Stock Splits
```javascript
const result = await mboum_calendar_events({
  requestDetails: {
    endpoint: "splits",
    queryParams: {
      from: "2023-01-01",
      to: "2023-12-31"
    }
  }
});
```

### Dividend Calendar for Multiple Stocks
```javascript
const result = await mboum_calendar_events({
  requestDetails: {
    endpoint: "dividends",
    queryParams: {
      ticker: "AAPL,MSFT,JNJ",
      from: "2023-01-01",
      to: "2023-12-31"
    }
  }
});
```

### Important Economic Events
```javascript
const result = await mboum_calendar_events({
  requestDetails: {
    endpoint: "economic",
    queryParams: {
      country: "US",
      importance: "high",
      from: "2023-01-01",
      to: "2023-03-31"
    }
  }
});
```

## Related Documentation
- [Mboum API Documentation](https://mboum.com/api/documentation)
- [Development Plan](../../development_plan.md)
