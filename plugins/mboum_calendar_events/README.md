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

1. **`/v1/markets/calendar/ipo`** (`ipo`)
   - **Optional Parameters**:
     - `date`: String - Date (YYYY-MM format)
   - **Example**: `/v1/markets/calendar/ipo?date=2023-01`

2. **`/v1/markets/calendar/splits`** (`splits`)
   - **Optional Parameters**:
     - `date`: String - Date (YYYY-MM format)
   - **Example**: `/v1/markets/calendar/splits?date=2023-01`

3. **`/v1/markets/calendar/economic_events`** (`economic`)
   - **Optional Parameters**:
     - `date`: String - Date (YYYY-MM-DD format)
   - **Example**: `/v1/markets/calendar/economic_events?date=2023-01-01`

4. **`/v2/markets/calendar/earnings`** (`earnings`)
   - **Required Parameters**: Either `days` OR `start_date`/`end_date`
   - **Optional Parameters**:
     - `days`: Integer - Number of days to look ahead for events
     - `start_date`: String - Start date (YYYY-MM-DD format)
     - `end_date`: String - End date (YYYY-MM-DD format)
     - `price_min`: Integer - Minimum stock price
     - `optionable`: Boolean - Filter by optionable stocks
     - `page`: Integer - Page number for pagination
   - **Example**: `/v2/markets/calendar/earnings?days=7` or `/v2/markets/calendar/earnings?start_date=2023-01-01&end_date=2023-01-31`

5. **`/v2/markets/calendar/dividends`** (`dividends`)
   - **Optional Parameters**:
     - `date`: String - Date (YYYY-MM-DD format)
     - `page`: Integer - Page number for pagination
   - **Example**: `/v2/markets/calendar/dividends?date=2023-01-01`

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
  ipo: "/v1/markets/calendar/ipo",
  splits: "/v1/markets/calendar/splits",
  economic: "/v1/markets/calendar/economic_events",
  earnings: "/v2/markets/calendar/earnings",
  dividends: "/v2/markets/calendar/dividends"
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
7. **Special Validation**: For earnings and dividends endpoints, validates that either `days` OR both `start_date` and `end_date` are provided.

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
6. **Earnings & Dividends Endpoints**: Either provide `days` OR both `start_date` and `end_date`

## Example Usage

### Upcoming Earnings
```javascript
const result = await mboum_calendar_events({
  requestDetails: {
    endpoint: "earnings",
    queryParams: {
      days: 7
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
      date: "2023-01"
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
      date: "2023-01"
    }
  }
});
```

### Dividend Calendar for a Specific Company
```javascript
const result = await mboum_calendar_events({
  requestDetails: {
    endpoint: "dividends",
    queryParams: {
      date: "2023-01-01"
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
      date: "2023-01-01"
    }
  }
});
