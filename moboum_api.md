
# Introduction

Explore in-depth API documentation for Mboum's endpoints, parameters, and practical examples. Seamlessly integrate our APIs into your projects.

**Base URL**: `https://api.mboum.com`

## Authentication

To authenticate requests, include an Authorization header with the value "Bearer {YOUR_AUTH_KEY}" or through a browser with an "apikey" parameter. 

For example:
```
https://api.mboum.com/v1/markets/search?search=AA&apikey=null
```

All authenticated endpoints are marked with a "requires authentication" badge in the documentation.

To generate a token:
1. Visit your dashboard
2. Go to your account in the upper-right corner
3. Click on Personal Access Tokens in the dropdown menu
4. Generate and manage your Personal Access Tokens

## Rate Limiting

Our API implements rate limiting to ensure fair usage and maintain optimal performance for all users.

- Current limit: 15 requests per second
- Exceeding this rate may result in a 429 Too Many Requests response
- We recommend implementing a retry mechanism in your application to handle rate-limited responses gracefully

## Error Codes

The API may return the following error codes:

- 401 Unauthenticated: Invalid or missing authentication token
- 403 Unauthorized: The action is not permitted for your account
- 404 Not Found: The requested resource was not found
- 422 Validation Error: Invalid parameters or request format
- 429 Too Many Requests: Rate limit exceeded

## Response Format

All responses follow this general structure:

```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com"
  },
  "body": {
    // Response data
  }
}
```
# Rate Limiting

Our API implements rate limiting to ensure fair usage and maintain optimal performance for all users.

## Current Limits

- 15 requests per second per API key

## Handling Rate Limits

When you exceed the rate limit, you'll receive:
- HTTP Status Code: `429 Too Many Requests`
- Error Response: A message indicating you've exceeded the allowed rate

## Best Practices

1. Implement a retry mechanism in your application to handle rate-limited responses gracefully
2. Add exponential backoff to your retry logic
3. Monitor your API usage to stay within limits
4. Cache responses when possible to reduce API calls

## Rate Limit Headers

The API includes rate limit information in response headers:

- `X-RateLimit-Limit`: Total number of requests allowed per second
- `X-RateLimit-Remaining`: Number of requests remaining in current window
- `X-RateLimit-Reset`: Time when the rate limit will reset (Unix timestamp)

## Example Error Response

```json
{
  "status": 429,
  "error": "Too Many Requests",
  "message": "API rate limit exceeded. Please retry after reset."
}
```

## Tips to Avoid Rate Limiting

1. Batch requests when possible
2. Implement caching for frequently accessed data
3. Use webhooks for real-time updates instead of polling
4. Monitor your API usage patterns
5. Distribute requests evenly across your time window

# General Stock Options Endpoints

These endpoints provide search capabilities, news, screeners, insider trades, market movers, trending tickers, and general market information.

## General Endpoint Overview

### GET /v1/search

Requires authentication  
**Endpoint weight**: 1  

Get tickers for any stock, company, ETF, mutual fund, crypto, and more.  
*Note: A newer version of this endpoint is available at `/v2/search`.*

**Example request**:
```python
import requests
import json

url = 'https://api.mboum.com/v1/markets/search'
params = {
    'search': 'AA',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

Example response (200, Success):
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "symbol": "mu",
    "processedTime": "2023-08-11T00:11:21.369821Z"
  },
  "body": [
    {
      "symbol": "MU",
      "name": "Micron Technology, Inc.",
      "exch": "NAS",
      "type": "S",
      "exchDisp": "NASDAQ",
      "typeDisp": "Equity"
    },
    ...
  ]
}
```

### GET /v1/movers

Requires authentication  
**Endpoint weight**: 1  

Get market movers in today's trading session.

**Example request**:
```python
import requests
import json

url = 'https://api.mboum.com/v1/markets/movers'
params = {
    'type': 'ETF',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

Example response (200, Success):
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com"
  },
  "body": {
    "MostActiveByShareVolume": {
      ...
    }
  }
}
```

### GET /v1/screener

Requires authentication  
**Endpoint weight**: 1  

Get a collection of stocks, ETFs, and mutual funds based on selected criteria.  
*Note: A newer version of this endpoint is available at `/v2/screener`.*

**Example request**:
```python
import requests
import json

url = 'https://api.mboum.com/v1/markets/screener'
params = {
    'list': 'day_gainers',
    'offset': '3',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

Example response (200, Success):
```json
{
  "meta": {
    "description": "most_actives",
    ...
  },
  "body": [
    {
      "symbol": "A",
      "symbolName": "Agilent Technologies",
      ...
    },
    ...
  ]
}
```

### GET /v1/insider-trades

Requires authentication  
**Endpoint weight**: 1  

Get the latest insider trading activities from U.S. Congressmen and Senators, CEO, Directors, etc.

**Example request**:
```python
import requests
import json

url = 'https://api.mboum.com/v1/markets/insider-trades'
params = {
    'minValue': '10000',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

Example response (200, Success):
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": [
    {
      "transactionDate": "01/24/24",
      "firstName": "Joshua",
      ...
    },
    ...
  ]
}
```

### GET /v1/news

Requires authentication  
**Endpoint weight**: 1  

Get the most recent investment and stock news for a given company.

**Example request**:
```python
import requests
import json

url = 'https://api.mboum.com/v1/markets/news'
params = {
    'ticker': 'AAPL,TSLA',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

Example response (200, Success):
```json
[
  {
    "description": "STOCKSTOWATCHTODAY BLOG...",
    ...
  },
  ...
]
```

### GET /v2/search

Requires authentication  
**Endpoint weight**: 1  

Get tickers for any stock, company, ETF, mutual fund, crypto, and more.

**Example request**:
```python
import requests
import json

url = 'https://api.mboum.com/v2/markets/search'
params = {
    'search': 'AA',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

Example response (200, Success):
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com"
  },
  "body": [
    {
      "symbol": "AA",
      "name": "Alcoa Corporation Common Stock",
      ...
    },
    ...
  ]
}
```

### GET /v2/movers

Requires authentication  
**Endpoint weight**: 1  

Get market movers in today's trading session.

**Example request**:
```python
import requests
import json

url = 'https://api.mboum.com/v2/markets/movers'
params = {
    'change_type': 'PERCENT',
    'direction': 'UP',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

Example response (200, Success):
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": [
    {
      "symbol": "HELE",
      ...
    },
    ...
  ]
}
```

### GET /v2/tickers

Requires authentication  
**Endpoint weight**: 1  

Get ticker symbols.

**Example request**:
```python
import requests
import json

url = 'https://api.mboum.com/v2/markets/tickers'
params = {
    'type': 'STOCKS',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

Example response (200, Success):
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": [
    {
      "symbol": "AAPL",
      ...
    },
    ...
  ]
}
```

### GET /v2/market-info

Requires authentication  
**Endpoint weight**: 1  

Get market info data.

**Example request**:
```python
import requests
import json

url = 'https://api.mboum.com/v2/markets/market-info'
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers)
response.json()
```

Example response (200, Success):
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": {
    ...
  }
}
```

### GET /v2/screener

Requires authentication  
**Endpoint weight**: 1  

Get a collection of stocks, ETFs, and mutual funds based on selected criteria.

**Example request**:
```python
import requests
import json

url = 'https://api.mboum.com/v2/markets/screener'
params = {
    'metricType': 'overview',
    'filter': 'high_volume',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

Example response (200, Success):
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": [
    {
      ...
    },
    ...
  ]
}
```

# Stocks Endpoints

These endpoints provide real-time quotes, historical data, analyst ratings, financial summaries, price targets, and institutional holdings. They also cover ticker summaries, revenue details, short interest, SEC filings, and historical data.

## Stock Endpoint Overview

### GET /v1/quote

Requires authentication  
**Endpoint weight**: 1  

Get real-time quote data for a given ticker symbol.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/quote'
params = {
    'ticker': 'AAPL',
    'type': 'STOCKS',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "processedTime": "2023-12-21T22:13:30.914543Z"
  },
  "body": {
    "symbol": "AAPL",
    "companyName": "Apple Inc. Common Stock",
    "stockType": "Common Stock",
    "exchange": "NASDAQ-GS",
    "primaryData": {
      "lastSalePrice": "$194.83",
      "netChange": "+0.15",
      "percentageChange": "+0.08%",
      "lastTradeTimestamp": "Dec 21, 2023 5:13 PM ET",
      "isRealTime": true
    },
    ...
  }
}
```

### GET /v1/quotes

Requires authentication  
**Endpoint weight**: 1  

Get the most recent quote data for a given company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/stock/quotes'
params = {
    'ticker': 'AAPL,TSLA',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "symbol": "Quotes Data",
    "processedTime": "2023-08-11T00:47:22.112881Z"
  },
  "body": [
    {
      "shortName": "Apple Inc.",
      "postMarketPrice": "178.43",
      ...
    }
  ]
}
```

### GET /v1/history

Requires authentication  
**Endpoint weight**: 1  

Get historical stock data for any company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/stock/history'
params = {
    'ticker': 'AAPL',
    'interval': '5m',
    'diffandsplits': '0',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "processedTime": "2023-08-10T13:08:23.071878Z",
    ...
  },
  "body": {
    "1691593276": {
      "date": "09-08-2023",
      "open": 177.85,
      ...
    }
  }
}
```

### GET /v1/modules

Requires authentication  
**Endpoint weight**: 2  

Get company data such as profile, earnings, statistics, balance sheet, and more.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/stock/modules'
params = {
    'ticker': 'AAPL',
    'module': 'profile',
    'timeframe': 'annually',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "processedTime": "2023-08-09T09:10:21.978992Z"
  },
  "body": {
    "address1": "One Apple Park Way",
    "city": "Cupertino",
    ...
  }
}
```

### GET /v1/analyst-ratings

Requires authentication  
**Endpoint weight**: 2  

Get Analyst Ratings to gauge the possible future performance of a stock.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/stock/analyst-ratings'
params = {
    'ticker': 'AAPL,NVDA',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "count": 3,
    ...
  },
  "body": [
    {
      "symbol": "AAPL",
      "exchange": "NASDAQ",
      ...
    }
  ]
}
```

### GET /v2/ticker-summary

Requires authentication  
**Endpoint weight**: 1  

Get ticker market summary such as price range, marketCap, P/E, earnings, and more!

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v2/markets/stock/ticker-summary'
params = {
    'ticker': 'AAPL',
    'type': 'STOCKS',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": {
    "symbol": "AAPL",
    "summaryData": {
      "Exchange": {
        "label": "Exchange",
        "value": "NASDAQ-GS"
      },
      ...
    }
  }
}
```

### GET /v2/financials

Requires authentication  
**Endpoint weight**: 1  

Get a company income statement, balance sheet, cash flow, and financial ratios.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v2/markets/stock/financials'
params = {
    'ticker': 'AAPL',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": {
    "incomeStatementTable": {
      "headers": {
        "value1": "Period Ending:"
      },
      "rows": [
        {
          "value1": "Total Revenue",
          "value2": "$383,285,000"
        }
      ]
    }
  }
}
```

### GET /v2/revenue

Requires authentication  
**Endpoint weight**: 1  

Get a company's revenue and earnings per share (EPS).

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v2/markets/stock/revenue'
params = {
    'ticker': 'AAPL',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": {
    "title": "APPLE INC. REVENUE & EARNINGS PER SHARE (EPS)",
    ...
  }
}
```

### GET /v2/short-interest

Requires authentication  
**Endpoint weight**: 1  

Get a company's short interest, settlement date, daily volume, and days to cover.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v2/markets/stock/short-interest'
params = {
    'ticker': 'AAPL',
    'type': 'STOCKS',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": [
    {
      "settlementDate": "01/12/2024",
      "interest": "101,263,039",
      ...
    }
  ]
}
```

### GET /v2/institutional-holdings

Requires authentication  
**Endpoint weight**: 1  

Get a company's institutional holdings.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v2/markets/stock/institutional-holdings'
params = {
    'ticker': 'AAPL',
    'type': 'TOTAL',
    'limit': '15',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": {
    ...
  }
}
```

### GET /v2/sec-filings

Requires authentication  
**Endpoint weight**: 1  

Get a company's latest filings in insider trades, annual and quarterly reports, 8-K, proxies, and registration statements.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v2/markets/stock/sec-filings'
params = {
    'ticker': 'AAPL',
    'type': 'ALL',
    'limit': '15',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": {
    ...
  }
}
```

### GET /v2/historical

Requires authentication  
**Endpoint weight**: 1  

Get a company's historical data such as open, high, low, and close for the past 10 years.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v2/markets/stock/historical'
params = {
    'ticker': 'AAPL',
    'type': 'STOCKS',
    'limit': '50',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    ...
  },
  "body": [
    {
      "date": "02/02/2024",
      "close": "494.35",
      ...
    }
  ]
}
```



# Options Endpoints

These endpoints provide options trading activity, unusual options activity, implied volatility rankings, the most active options, and options flow. Additionally, there are endpoints for upcoming earnings and trending options data, offering a comprehensive view of the options market.

## Options Endpoint Overview

### GET /v1/options

Requires authentication  
**Endpoint weight**: 1  

Get the most recent options tick for a given company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/options'
params = {
    'ticker': 'AAPL',
    'expiration': '1734652800',
    'display': 'straddle',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "symbol": "AAPL",
    "processedTime": "2023-08-09T22:12:09.199084Z",
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com"
  },
  "body": [
    {
      "underlyingSymbol": "AAPL",
      "expirationDates": [1691712000, ...],
      "strikes": [50, 70, ...],
      "quote": {
        "language": "en-US",
        "region": "US",
        "quoteType": "EQUITY",
        ...
      },
      ...
    }
  ]
}
```

### GET /v1/unusual-options-activity

Requires authentication  
**Endpoint weight**: 2  

Unusual options activity identifies options contracts trading at higher volume relative to the open interest.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/options/unusual-options-activity'
params = {
    'type': 'STOCKS',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "count": 20,
    "total": 1736,
    "page": "3"
  },
  "body": [
    {
      "symbol": "PANW|20240223|310.00C",
      "baseSymbol": "PANW",
      ...
    }
  ]
}
```

### GET /v1/iv-rank-percentile

Requires authentication  
**Endpoint weight**: 2  

Get stocks, ETFs, and indices with the most option activity, along with the ATM average IV Rank and IV Percentile.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/options/iv-rank-percentile'
params = {
    'type': 'STOCKS',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "count": 20,
    "total": 500,
    "page": "1"
  },
  "body": [
    {
      "symbol": "RUN",
      "symbolName": "Sunrun Inc",
      ...
    }
  ]
}
```

### GET /v1/iv-change

Requires authentication  
**Endpoint weight**: 2  

Get stocks, ETFs, and indices with significant changes in implied volatility per options contract.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/options/iv-change'
params = {
    'type': 'STOCKS',
    'direction': 'UP',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "count": 20,
    "total": 273,
    "page": "1"
  },
  "body": [
    {
      "symbol": "IONQ|20241018|8.00C",
      ...
    }
  ]
}
```

### GET /v1/most-active

Requires authentication  
**Endpoint weight**: 2  

Get stocks, ETFs, and indices with the most options activity on the day.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/options/most-active'
params = {
    'type': 'STOCKS',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "count": 20,
    "total": 500,
    "page": "1"
  },
  "body": [
    {
      "symbol": "NVDA",
      ...
    }
  ]
}
```

### GET /v2/options

Requires authentication  
**Endpoint weight**: 1  

Get a company's option-chain data.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v2/markets/options'
params = {
    'ticker': 'AAPL',
    'type': 'STOCKS',
    'limit': '50',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "totalrecords": 48,
    ...
  },
  "body": [
    {
      "expiryDate": "2023-08-10",
      ...
    }
  ]
}
```

## Error Handling

Responses may return the following error codes:
- **401 Unauthenticated**: The authorization token provided is missing or invalid.
- **403 Unauthorized**: The action is not permitted for your account.
- **404 Not Found**: The requested resource cannot be found.
- **422 Validation Error**: The required parameters are missing or invalid.







# Calendar Events Endpoints

The Calendar Events API endpoints provide access to important financial events such as earnings reports, dividends, economic events, IPOs, and public offerings. These endpoints are essential for tracking key market activities and provide investors with timely information.

## Calendar Events Endpoint Overview

### GET /v1/earnings

Requires authentication  
**Endpoint weight**: 1  

Get past, present, and upcoming company earnings data. *Note: A newer version of this endpoint is available at `/v2/earnings`.*

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/calendar/earnings'
params = {
    'date': '2023-11-30',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "date": "2023-11-30",
    "processedTime": "2023-12-01T00:37:56.343683Z"
  },
  "body": [
    {
      "lastYearReportDate": "11/30/2022",
      "lastYearEPS": "$2.09",
      "time": "time-pre-market",
      "symbol": "RY",
      "name": "Royal Bank Of Canada",
      ...
    },
    ...
  ]
}
```

### GET /v1/dividends

Requires authentication  
**Endpoint weight**: 1  

Get past, present, and upcoming dividends data. *Note: A newer version of this endpoint is available at `/v2/dividends`.*

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/calendar/dividends'
params = {
    'date': '2023-11-30',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "date": "2023-11-30",
    "processedTime": "2023-12-01T00:53:49.609846Z"
  },
  "body": [
    {
      "companyName": "ACNB Corporation Common Stock",
      "symbol": "ACNB",
      "dividend_Ex_Date": "11/30/2023",
      ...
    },
    ...
  ]
}
```

### GET /v1/economic_events

Requires authentication  
**Endpoint weight**: 1  

Get global economic events data.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/calendar/economic_events'
params = {
    'date': '2023-11-30',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "date": "2023-11-30",
    "processedTime": "2023-12-01T01:03:25.016842Z"
  },
  "body": [
    {
      "gmt": "24H",
      "country": "Japan",
      "eventName": "Construction Orders",
      ...
    },
    ...
  ]
}
```

### GET /v1/ipo

Requires authentication  
**Endpoint weight**: 1  

Get the latest and upcoming IPO data.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/calendar/ipo'
params = {
    'date': '2023-11',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "date": "2023-11",
    "processedTime": "2023-12-01T01:12:14.365196Z"
  },
  "body": [
    {
      "dealID": "1273030-107900",
      "proposedTickerSymbol": "CLBRU",
      "companyName": "COLOMBIER ACQUISITION CORP. II",
      ...
    },
    ...
  ]
}
```

### GET /v1/public_offerings

Requires authentication  
**Endpoint weight**: 1  

Get the past, current, and upcoming secondary public offerings (SPO) data.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/calendar/public_offerings'
params = {
    'date': '2023-11',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "date": "2023-11",
    "processedTime": "2023-12-01T01:28:23.124844Z"
  },
  "body": {
    "priced": [
      {
        "dealID": "1003944-107155",
        "proposedTickerSymbol": "SNES",
        ...
      },
      ...
    ],
    "upcoming": [],
    "filed": [
      {
        "dealID": "1153880-108422",
        ...
      }
    ],
    ...
  }
}
```

### GET /v2/earnings

Requires authentication  
**Endpoint weight**: 1  

Get past, present, and upcoming company earnings data.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v2/markets/calendar/earnings'
params = {
    'days': '7',
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "count": 8,
    "total": 8,
    "page": "1"
  },
  "body": [
    {
      "symbol": "AZO",
      "symbolName": "Autozone",
      ...
    },
    ...
  ]
}
```

### GET /v2/dividends

Requires authentication  
**Endpoint weight**: 1  

Get past, present, and upcoming dividends data.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v2/markets/calendar/dividends'
params = {
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "count": 56,
    "total": 56,
    "page": "1"
  },
  "body": [
    {
      "symbol": "ALCO",
      "symbolName": "Alico Inc",
      ...
    },
    ...
  ]
}
```



# Technical Indicators Endpoints

The Technical Indicator API provides access to key technical indicators essential for market analysis. These include Simple Moving Average (SMA), Relative Strength Index (RSI), Moving Average Convergence Divergence (MACD), Commodity Channel Index (CCI), Average Directional Index (ADX), Exponential Moving Average (EMA), Stochastic Oscillator (STOCH), Accumulation/Distribution Oscillator (ADOSC), and Accumulation/Distribution (AD).

## Technical Indicators Endpoint Overview

### GET /v1/indicators/sma

Requires authentication  
**Endpoint weight**: 2  

Get the Simple Moving Average (SMA) for a specified company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/indicators/sma'
params = {
    'ticker': 'AAPL',
    'interval': '5m',
    'series_type': 'close',
    'time_period': '50',
    'limit': '50',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "symbol": "AAPL"
  },
  "body": [
    {
      "time": 1676401201,
      "SMA": 150.10
    },
    ...
  ]
}
```

### GET /v1/indicators/rsi

Requires authentication  
**Endpoint weight**: 2  

Get the Relative Strength Index (RSI) for a specified company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/indicators/rsi'
params = {
    'ticker': 'AAPL',
    'interval': '5m',
    'series_type': 'close',
    'time_period': '14',
    'limit': '50',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "symbol": "AAPL"
  },
  "body": [
    {
      "time": 1676401201,
      "RSI": 65.5
    },
    ...
  ]
}
```

### GET /v1/indicators/macd

Requires authentication  
**Endpoint weight**: 2  

Get the Moving Average Convergence Divergence (MACD) for a specified company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/indicators/macd'
params = {
    'ticker': 'AAPL',
    'interval': '5m',
    'series_type': 'close',
    'fast_period': '12',
    'slow_period': '26',
    'signal_period': '9',
    'limit': '50'
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "symbol": "AAPL"
  },
  "body": [
    {
      "time": 1676401201,
      "MACD": 1.25,
      "signal": 1.12,
      "histogram": 0.13
    },
    ...
  ]
}
```

### GET /v1/indicators/cci

Requires authentication  
**Endpoint weight**: 2  

Get the Commodity Channel Index (CCI) for a specified company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/indicators/cci'
params = {
    'ticker': 'AAPL',
    'interval': '5m',
    'series_type': 'close',
    'time_period': '20',
    'limit': '50',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "symbol": "AAPL"
  },
  "body": [
    {
      "time": 1676401201,
      "CCI": 110.5
    },
    ...
  ]
}
```

### GET /v1/indicators/adx

Requires authentication  
**Endpoint weight**: 2  

Get the Average Directional Index (ADX) for a specified company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/indicators/adx'
params = {
    'ticker': 'AAPL',
    'interval': '5m',
    'series_type': 'close',
    'time_period': '14',
    'limit': '50'
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "symbol": "AAPL"
  },
  "body": [
    {
      "time": 1676401201,
      "ADX": 25.5
    },
    ...
  ]
}
```

### GET /v1/indicators/ema

Requires authentication  
**Endpoint weight**: 2  

Get the Exponential Moving Average (EMA) for a specified company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/indicators/ema'
params = {
    'ticker': 'AAPL',
    'interval': '5m',
    'series_type': 'close',
    'time_period': '50',
    'limit': '50'
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "symbol": "AAPL"
  },
  "body": [
    {
      "time": 1676401201,
      "EMA": 150.2
    },
    ...
  ]
}
```

### GET /v1/indicators/stoch

Requires authentication  
**Endpoint weight**: 2  

Get the Stochastic Oscillator (STOCH) for a specified company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/indicators/stoch'
params = {
    'ticker': 'AAPL',
    'interval': '5m',
    'fastK_Period': '5',
    'slowK_Period': '3',
    'slowD_Period': '3',
    'slowK_MAType': '0',
    'slowD_MAType': '0',
    'limit': '50'
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "symbol": "AAPL"
  },
  "body": [
    {
      "time": 1676401201,
      "fastK": 80.5,
      "slowK": 75.3,
      "slowD": 70.6
    },
    ...
  ]
}
```

### GET /v1/indicators/adosc

Requires authentication  
**Endpoint weight**: 2  

Get the Accumulation/Distribution Oscillator (ADOSC) for a specified company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/indicators/adosc'
params = {
    'ticker': 'AAPL',
    'interval': '5m',
    'limit': '50'
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "symbol": "AAPL"
  },
  "body": [
    {
      "time": 1676401201,
      "ADOSC": 10.4
    },
    ...
  ]
}
```

### GET /v1/indicators/ad

Requires authentication  
**Endpoint weight**: 2  

Get the Accumulation/Distribution (AD) for a specified company.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/markets/indicators/ad'
params = {
    'ticker': 'AAPL',
    'interval': '5m',
    'limit': '50'
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "symbol": "AAPL"
  },
  "body": [
    {
      "time": 1676401201,
      "AD": 20000.5
    },
    ...
  ]
}
```


# Crypto Endpoints

The Crypto API provides essential endpoints for retrieving information on cryptocurrencies, including profiles, holders, quotes, and other relevant data.

## Crypto Endpoint Overview

### GET /v1/crypto/profile

Requires authentication  
**Endpoint weight**: 1  

Get the profile of a specific cryptocurrency.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/crypto/profile'
params = {
    'key': 'bitcoin',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "key": "Bitcoin"
  },
  "body": {
    "key": "bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "category": "coin",
    "description": "Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by Satoshi Nakamoto.",
    ...
  }
}
```

### GET /v1/crypto/holders

Requires authentication  
**Endpoint weight**: 1  

Get the number of holders for a specific cryptocurrency.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/crypto/holders'
params = {
    'key': 'bitcoin',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "key": "Bitcoin",
    "holderCount": 48834937,
    "dailyActive": 963625
  },
  "data": [
    {
      "address": "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo",
      "balance": 248597.3905837,
      "share": 1.18
    },
    ...
  ]
}
```

### GET /v1/crypto/quotes

Requires authentication  
**Endpoint weight**: 1  

Get quotes for a specific cryptocurrency.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/crypto/quotes'
params = {
    'key': 'bitcoin',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "key": "Bitcoin",
    "total": 48
  },
  "data": {
    "price": 27777.48,
    "priceChangePercentage1h": -2.15,
    ...
  }
}
```

### GET /v1/crypto/coins

Requires authentication  
**Endpoint weight**: 5  

Get a list of all cryptocurrencies.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/crypto/coins'
params = {
    'page': '1',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "page": "1",
    "total": 7842
  },
  "data": {
    "1": {
      "key": "bitcoin",
      "name": "Bitcoin",
      "symbol": "BTC",
      ...
    },
    ...
  }
}
```

### GET /v1/crypto/modules

Requires authentication  
**Endpoint weight**: 1  

Get global metrics, crypto top gainers/losers, trends, new coins, etc.

**Example request**:
```python
import requests

url = 'https://api.mboum.com/v1/crypto/modules'
params = {
    'module': 'trending',
}
headers = {
    'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}
response = requests.get(url, headers=headers, params=params)
response.json()
```

**Example response (200, Success)**:
```json
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "total": 10,
    "module": "trendingList"
  },
  "body": [
    {
      "id": 24781,
      "name": "CyberConnect",
      "symbol": "CYBER",
      ...
    },
    ...
  ]
}
```
