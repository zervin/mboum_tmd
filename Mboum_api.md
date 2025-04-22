---
title: Mboum - Comprehensive API Documentation
created_at: 2025-04-20T04:43:21.196Z
updated_at: 2025-04-20T04:43:26.323Z
uuid: 8f77cc93-a1e6-4527-85e0-2fbb715aa724
---

Clip source: [https://docs.mboum.com/](https://docs.mboum.com/)

[MENU![navbar-image](chrome-extension://heapafmadojoodklnkhjanbinemaagok/images/navbar.png)](https://docs.mboum.com/#)

![logo](https://mboum.com/logo/logo-white.svg)

pythonphpjavascriptbash




- [Introduction](https://docs.mboum.com/#introduction)

- [Rate Limiting](https://docs.mboum.com/#rate-limiting)

- [General](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-general)
    - [GET /v1/search](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-search)
    - [GET /v1/movers](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-movers)
    - [GET /v1/screener](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-screener)
    - [GET /v1/insider-tradeshot!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-insider-trades)
    - [GET /v1/news](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-news)
    - [GET /v2/search](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-search)
    - [GET /v2/movers](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-movers)
    - [GET /v2/tickersnew!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-tickers)
    - [GET /v2/market-info](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-market-info)
    - [GET /v2/screenernew!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-screener)
    - [GET /v2/news](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-news)

- [Stocks](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-stocks)
    - [GET /v1/quote (real-time)hot!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-quote)
    - [GET /v1/quotes](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-stock-quotes)
    - [GET /v1/historyhot!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-stock-history)
    - [GET /v1/modulesupdated](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-stock-modules)
    - [GET /v1/analyst-ratings](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-stock-analyst-ratings)
    - [GET /v2/ticker-summary](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-stock-ticker-summary)
    - [GET /v2/price-targets](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-stock-price-targets)
    - [GET /v2/financials](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-stock-financials)
    - [GET /v2/revenue](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-stock-revenue)
    - [GET /v2/short-interest](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-stock-short-interest)
    - [GET /v2/institutional-holdings](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-stock-institutional-holdings)
    - [GET /v2/sec-filings](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-stock-sec-filings)
    - [GET /v2/historicalnew!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-stock-historical)

- [Options](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-options)
    - [GET /v1/options](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-options)
    - [GET /v1/unusual-options-activity](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-options-unusual-options-activity)
    - [GET /v1/iv-rank-percentile](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-options-iv-rank-percentile)
    - [GET /v1/iv-change](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-options-iv-change)
    - [GET /v1/most-activehot!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-options-most-active)
    - [GET /v1/highest-iv](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-options-highest-iv)
    - [GET /v1/options-flowhot!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-options-options-flow)
    - [GET /v2/optionsnew!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-options)

- [Calendar Events](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-calendar-events)
    - [GET /v1/earnings](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-calendar-earnings)
    - [GET /v1/dividends](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-calendar-dividends)
    - [GET /v1/economic_events](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-calendar-economic_events)
    - [GET /v1/ipo](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-calendar-ipo)
    - [GET /v1/public_offerings](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-calendar-public_offerings)
    - [GET /v2/earningshot!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-calendar-earnings)
    - [GET /v2/dividendsnew!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-calendar-dividends)

- [Technical Indicator](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-technical-indicator)
    - [GET /v1/indicators/sma](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-indicators-sma)
    - [GET /v1/indicators/rsihot!](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-indicators-rsi)
    - [GET /v1/indicators/macd](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-indicators-macd)
    - [GET /v1/indicators/cci](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-indicators-cci)
    - [GET /v1/indicators/adx](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-indicators-adx)
    - [GET /v1/indicators/ema](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-indicators-ema)
    - [GET /v1/indicators/stoch](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-indicators-stoch)
    - [GET /v1/indicators/adosc](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-indicators-adosc)
    - [GET /v1/indicators/ad](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v1-markets-indicators-ad)

- [Crypto](https://docs.mboum.com/#crypto)
    - [GET /v1/crypto/profile](https://docs.mboum.com/#crypto-GETapi-v1-crypto-profile)
    - [GET /v1/crypto/holders](https://docs.mboum.com/#crypto-GETapi-v1-crypto-holders)
    - [GET /v1/crypto/quoteshot!](https://docs.mboum.com/#crypto-GETapi-v1-crypto-quotes)
    - [GET /v1/crypto/coins](https://docs.mboum.com/#crypto-GETapi-v1-crypto-coins)
    - [GET /v1/crypto/modules](https://docs.mboum.com/#crypto-GETapi-v1-crypto-modules)

- [Create a Free Mboum account](http://mboum.com/register)

- Last updated: April 19, 2025




# Introduction

Explore in-depth API documentation for Mboum's endpoints, parameters, and practical examples. Seamlessly integrate our APIs into your projects.

**Base URL**: `https://api.mboum.com`

This documentation aims to provide all the information you need to work with our API.

As you scroll, you'll see code examples for working with the API in different programming languages in the dark area to the right (or as part of the content on mobile). You can switch the language used with the tabs at the top right (or from the nav menu at the top left on mobile).

To authenticate requests, include an Authorization header with the value "Bearer {YOUR_AUTH_KEY}" or through a browser with an "apikey" parameter. For example:

`https://api.mboum.com/v1/markets/search?search=AA&apikey=null`

All authenticated endpoints are marked with a `requires authentication` badge in the documentation below.

To generate a token, visit your dashboard, go to your account in the upper-right corner and click on the **[Personal Access Tokens](http://mboum.com/profile/personal-access-tokens)** in the dropdown menu. There you will have access to generate and delete **Personal Access Tokens**

# Rate Limiting

Our API implements rate limiting to ensure fair usage and maintain optimal performance for all users. The current limit is set to 15 requests per second.

If you exceed this rate, you may receive a 429 Too Many Requests response. We recommend implementing a retry mechanism in your application to handle rate-limited responses gracefully.

# Crypto

The Crypto API offers essential endpoints for retrieving information on coins, obtaining quotes, accessing modules, fetching profiles, and viewing holders' data. These endpoints provide crucial data points and insights into the cryptocurrency market, supporting various analytical and informational needs for developers and traders alike.

## GET /v1/crypto/profile

requires authentication

Endpoint weight: 1

Get profile for a specific crypto currency

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/crypto/profile'
params = {
  'key': 'bitcoin',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/crypto/profile';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'key' => 'bitcoin',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/crypto/profile"
);

const params = {
    "key": "bitcoin",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/crypto/profile?key=bitcoin" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
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
        "description": "## What Is Bitcoin (BTC)?\n\n[Bitcoin](https://coinmarketcap.com/alexandria/article/an-intro-to-bitcoin) is a decentralized [cryptocurrency](https://coinmarketcap.com/alexandria/article/what-are-cryptocurrencies) originally described in a 2008 [whitepaper](https://coinmarketcap.com/alexandria/glossary/whitepaper) by a person, or group of people, using the alias [Satoshi Nakamoto](https://coinmarketcap.com/alexandria/article/who-is-satoshi-nakamoto). It was launched soon after, in January 2009.\n\n[Bitcoin](https://coinmarketcap.com/alexandria/article/what-is-bitcoin) is a peer-to-peer online currency, meaning that all [transactions](https://coinmarketcap.com/alexandria/article/how-long-does-a-bitcoin-transaction-take) happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution...",
        "dateAdded": "2010-07-13T00:00:00.000Z",
        "status": "active",
        "urls": {
            "website": [
                "https://bitcoin.org/"
            ],
            "technical_doc": [
                "https://bitcoin.org/bitcoin.pdf"
            ],
            "explorer": [
                "https://blockchain.info/",
                "https://live.blockcypher.com/btc/",
                "https://blockchair.com/bitcoin",
                "https://explorer.viabtc.com/btc",
                "https://www.oklink.com/btc"
            ],
            "source_code": [
                "https://github.com/bitcoin/bitcoin"
            ],
            "message_board": [
                "https://coinmarketcap.com/community/profile/Bitcoin_CMC",
                "https://coinmarketcap.com/community/search/top/bitcoin",
                "https://bitcointalk.org"
            ],
            "chat": [],
            "announcement": [],
            "reddit": [
                "https://reddit.com/r/bitcoin"
            ],
            "facebook": [],
            "twitter": []
        }
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/crypto/profile**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**key**`  string   


Provide the crypto ID. Example: `bitcoin`

## GET /v1/crypto/holders

requires authentication

Endpoint weight: 1

Get the number of holders for a specific crypto currency

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/crypto/holders'
params = {
  'key': 'bitcoin',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/crypto/holders';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'key' => 'bitcoin',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/crypto/holders"
);

const params = {
    "key": "bitcoin",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/crypto/holders?key=bitcoin" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "key": "Bitcoin",
    "holderCount": 48834937,
    "dailyActive": 963625,
    "total": 100
  },
  "data": [
    {
      "address": "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo",
      "balance": 248597.3905837,
      "share": 1.18
    },
    { ... }
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/crypto/holders**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**key**`  string   


Provide the crypto ID. Example: `bitcoin`

## GET /v1/crypto/quotes

requires authentication

Endpoint weight: 1

Get quotes for a specific crypto currency

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/crypto/quotes'
params = {
  'key': 'bitcoin',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/crypto/quotes';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'key' => 'bitcoin',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/crypto/quotes"
);

const params = {
    "key": "bitcoin",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/crypto/quotes?key=bitcoin" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com",
        "key": "Bitcoin",
        "total": 48
    },
    "data": {
        "price": 27777.48286131564,
        "priceChangePercentage1h": -2.15185151,
        "priceChangePercentage24h": -4.02576734,
        "priceChangePercentage7d": -5.49823801,
        "priceChangePercentage30d": -7.16085892,
        "priceChangePercentage60d": 4.37805208,
        "priceChangePercentage90d": 3.1949905,
        "priceChangePercentageAll": 449231.6256237841,
        "marketCap": 540557260846.61,
        "marketCapChangePercentage24h": -4.0204,
        "fullyDilutedMarketCap": 583327140087.63,
        "fullyDilutedMarketCapChangePercentage24h": -4.03,
        "circulatingSupply": 19460268,
        "totalSupply": 19460268,
        "maxSupply": 21000000,
        "marketCapDominance": 48.8796,
        "rank": 1,
        "roi": 44923077.09278923,
        "low24h": 27718.146260229056,
        "high24h": 29192.260813211757,
        "low7d": 27718.146260229056,
        "high7d": 29660.25433927243,
        "low30d": 27718.146260229056,
        "high30d": 30330.64039201111,
        "low90d": 24797.167848615383,
        "high90d": 31814.51481206781,
        "low52w": 15599.047175382899,
        "high52w": 31814.51481206781,
        "lowAllTime": 0.04864654,
        "highAllTime": 68789.62593892214,
        "lowAllTimeChangePercentage": 57100534.21,
        "highAllTimeChangePercentage": -59.62,
        "lowAllTimeTimestamp": "2010-07-14T19:24:00.000Z",
        "highAllTimeTimestamp": "2021-11-10T14:17:02.000Z",
        "lowYesterday": 28701.77952453054,
        "highYesterday": 29221.97574297547,
        "openYesterday": 29169.074019916276,
        "closeYesterday": 28701.77952453054,
        "priceChangePercentageYesterday": -1.6,
        "volumeYesterday": 14949271904.13,
        "turnover": 0.03826141,
        "ytdPriceChangePercentage": 67.0818,
        "volumeRank": 2,
        "volumeMcRank": 2235,
        "mcTotalNum": 9598,
        "volumeTotalNum": 9598,
        "volumeMcTotalNum": 9598,
        "status": "",
        "volume": 20682484655.138218,
        "volumeChangePercentage24h": 48.7042
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/crypto/quotes**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**key**`  string   


Provide the crypto ID. Example: `bitcoin`

## GET /v1/crypto/coins

requires authentication

Endpoint weight: 5

Get a list of all crypto currencies

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/crypto/coins'
params = {
  'page': '1',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/crypto/coins';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/crypto/coins"
);

const params = {
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/crypto/coins?page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
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
      "rank": 1,
      "maxSupply": 21000000,
      "totalSupply": 19460268,
      "isActive": 1,
      "high24h": 29192.260813211757,
      "low24h": 27718.146260229056,
      "quote": {
        "quotes_name": 68789.62593892214,
        "quotes_price": 68789.62593892214,
        "quotes_lastUpdated": 68789.62593892214,
        "quotes_marketCap": 68789.62593892214,
        "quotes_percentChange1h": 68789.62593892214,
        "quotes_percentChange24h": 68789.62593892214,
        "quotes_percentChange30d": 68789.62593892214,
        "quotes_volume24h": 68789.62593892214,
        "quotes_volume30d": 68789.62593892214,
        "quotes_volume7d": 68789.62593892214,
        "quotes_ytdPriceChangePercentage": 68789.62593892214
      },
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      "external_link": "https://coinmarketcap.com/currencies/bitcoin"
    },
    "2": {
      "key": "ethereum",
      "name": "Ethereum",
      "symbol": "ETH",
      "rank": 2,
      "maxSupply": null,
      "totalSupply": 120135854.32244684,
      "isActive": 1,
      "high24h": 1826.8153604912118,
      "low24h": 1725.4621894172678,
      "quote": {
        "quotes_name": 4891.704697551414,
        "quotes_price": 4891.704697551414,
        "quotes_lastUpdated": 4891.704697551414,
        "quotes_marketCap": 4891.704697551414,
        "quotes_percentChange1h": 4891.704697551414,
        "quotes_percentChange24h": 4891.704697551414,
        "quotes_percentChange30d": 4891.704697551414,
        "quotes_volume24h": 4891.704697551414,
        "quotes_volume30d": 4891.704697551414,
        "quotes_volume7d": 4891.704697551414,
        "quotes_ytdPriceChangePercentage": 4891.704697551414
      },
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
      "external_link": "https://coinmarketcap.com/currencies/ethereum"
    },
    "3": {
      "key": "tether",
      "name": "Tether USDt",
      "symbol": "USDT",
      "rank": 3,
      "maxSupply": null,
      "totalSupply": 86684257831.21764,
      "isActive": 1,
      "high24h": 0.9996575505698431,
      "low24h": 0.9983872270969376,
      "quote": {
        "quotes_name": 1.2154899835586548,
        "quotes_price": 1.2154899835586548,
        "quotes_lastUpdated": 1.2154899835586548,
        "quotes_marketCap": 1.2154899835586548,
        "quotes_percentChange1h": 1.2154899835586548,
        "quotes_percentChange24h": 1.2154899835586548,
        "quotes_percentChange30d": 1.2154899835586548,
        "quotes_volume24h": 1.2154899835586548,
        "quotes_volume30d": 1.2154899835586548,
        "quotes_volume7d": 1.2154899835586548,
        "quotes_ytdPriceChangePercentage": 1.2154899835586548
      },
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      "external_link": "https://coinmarketcap.com/currencies/tether"
    },
    "4": {
      "key": "bnb",
      "name": "BNB",
      "symbol": "BNB",
      "rank": 4,
      "maxSupply": null,
      "totalSupply": 153852276.09539545,
      "isActive": 1,
      "high24h": 234.87925844208726,
      "low24h": 223.91012477330818,
      "quote": {
        "quotes_name": 690.93196468,
        "quotes_price": 690.93196468,
        "quotes_lastUpdated": 690.93196468,
        "quotes_marketCap": 690.93196468,
        "quotes_percentChange1h": 690.93196468,
        "quotes_percentChange24h": 690.93196468,
        "quotes_percentChange30d": 690.93196468,
        "quotes_volume24h": 690.93196468,
        "quotes_volume30d": 690.93196468,
        "quotes_volume7d": 690.93196468,
        "quotes_ytdPriceChangePercentage": 690.93196468
      },
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      "external_link": "https://coinmarketcap.com/currencies/bnb"
    },
    
    ...
  }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/crypto/coins**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**page**`  string   


Provide page number. Example: `1`

## GET /v1/crypto/modules

requires authentication

Endpoint weight: 1

Get global metrics, crypto top gainers/losers, trends, new coins, etc...

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/crypto/modules'
params = {
  'module': 'trending',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/crypto/modules';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'module' => 'trending',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/crypto/modules"
);

const params = {
    "module": "trending",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/crypto/modules?module=trending" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "total": 10,
    "module": "trendingList"
  },
  "body": [
    {
      "id": 24781,
      "dataType": 2,
      "name": "CyberConnect",
      "symbol": "CYBER",
      "rank": 378,
      "status": "active",
      "marketCap": 43825691.01,
      "selfReportedMarketCap": 0,
      "priceChange": {
        "price": 3.9704376710966343,
        "priceChange24h": -5.25190314,
        "priceChange7d": 120.13555185,
        "priceChange30d": 120.13555185,
        "volume24h": 39253295.67980275,
        "lastUpdate": "2023-08-17T17:31:00.000Z"
      }
    },
    { ... }
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/crypto/modules**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**module**`  string   


Provide a module.

- **global_matric**: Global Metric data.
- **trending**: Top Trending cryptocurrencies.
- **most_visited**: Most visited cryptocurrencies sites.
- **new_coins**: Newly launched cryptocurrencies.
- **gainer**: Top cryptocurrency gainers.
- **loser**: Top cryptocurrency losers. Example: `trending`

# Stocks & Options

The stocks and options API offers a variety of endpoints for comprehensive financial data retrieval. General endpoints include search and news functionalities. Stock-specific endpoints provide real-time quotes, historical data, analyst ratings, financial summaries, price targets, and institutional holdings. Options endpoints cover activity, implied volatility rankings, and most active options. Calendar event endpoints offer data on earnings, dividends, economic events, IPOs, and public offerings. Technical indicators such as SMA, RSI, and MACD are also supported for market analysis.

## GET /v1/search

requires authentication

Endpoint weight: 1

Get tickers for any stock company, ETF, mutual fund, crypto, and more—covering all companies traded globally. We have newer version of this endpoint here: [/v2/search](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-search)

> Example request:

```
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/search';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'search' => 'AA',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/search"
);

const params = {
    "search": "AA",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/search?search=AA" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
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
      {
        "symbol": "MULN",
        "name": "Mullen Automotive, Inc.",
        "exch": "NGM",
        "type": "S",
        "exchDisp": "NASDAQ",
        "typeDisp": "Equity"
      },
      {...}
    ]
  }


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/search**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**search**`  string   


Enter a search term. Example: `AA`

## GET /v1/movers

requires authentication

Endpoint weight: 1

Get market movers in today's trading session.

> Example request:

```
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/movers';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'type' => 'ETF',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/movers"
);

const params = {
    "type": "ETF",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/movers?type=ETF" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com"
  },
  "body": {
    "MostActiveByShareVolume": {
      "dataAsOf": "Data as of Jan 26, 2024 3:38 PM ET",
      "lastTradeTimestamp": "Jan 26, 2024 3:38 PM ET",
      "table": {
        "asOf": null,
        "headers": {
          "symbol": "Symbol",
          "name": "Name",
          "lastSalePrice": "Last",
          "lastSaleChange": "Change",
          "change": "Share Volume"
        },
        "rows": [
          {
            "symbol": "INTC",
            "name": "Intel Corporation",
            "lastSalePrice": "$43.60",
            "lastSaleChange": "-5.94",
            "change": "102,855,698",
            "deltaIndicator": "down"
          },
          {
            "symbol": "AMD",
            "name": "Advanced Micro Devices, Inc.",
            "lastSalePrice": "$177.42",
            "lastSaleChange": "-2.91",
            "change": "96,179,033",
            "deltaIndicator": "down"
          },
          ...
        ]
      }
    },
    "MostAdvanced": {
      "dataAsOf": "Data as of Jan 26, 2024 3:38 PM ET",
      "lastTradeTimestamp": "Jan 26, 2024 3:38 PM ET",
      "table": {
        "asOf": null,
        "headers": {
          "symbol": "Symbol",
          "name": "Name",
          "lastSalePrice": "Last",
          "lastSaleChange": "Change",
          "change": "% Change"
        },
        "rows": [
          {
            "symbol": "RTC",
            "name": "Baijiayun Group Ltd",
            "lastSalePrice": "$6.25",
            "lastSaleChange": "+2.03",
            "change": "+48.1%",
            "deltaIndicator": "up"
          },
          {
            "symbol": "APPF",
            "name": "AppFolio, Inc.",
            "lastSalePrice": "$224",
            "lastSaleChange": "+49.62",
            "change": "+28.46%",
            "deltaIndicator": "up"
          },
          ...
        ]
      }
    },
    "MostDeclined": {
      "dataAsOf": "Data as of Jan 26, 2024 3:38 PM ET",
      "lastTradeTimestamp": "Jan 26, 2024 3:38 PM ET",
      "table": {
        "asOf": null,
        "headers": {
          "symbol": "Symbol",
          "name": "Name",
          "lastSalePrice": "Last",
          "lastSaleChange": "Change",
          "change": "% Change"
        },
        "rows": [
          {
            "symbol": "LGST",
            "name": "Semper Paratus Acquisition Corporation",
            "lastSalePrice": "$7.34",
            "lastSaleChange": "-3.70",
            "change": "-33.57%",
            "deltaIndicator": "down"
          },
          {
            "symbol": "SGMT",
            "name": "Sagimet Biosciences Inc.",
            "lastSalePrice": "$10.43",
            "lastSaleChange": "-3.59",
            "change": "-25.61%",
            "deltaIndicator": "down"
          },
          ...
        ]
      }
    },
    "MostActiveByDollarVolume": {
      "dataAsOf": "Data as of Jan 26, 2024 3:37 PM ET",
      "lastTradeTimestamp": "Jan 26, 2024 3:37 PM ET",
      "table": {
        "asOf": null,
        "headers": {
          "symbol": "Symbol",
          "name": "Name",
          "lastSalePrice": "Last",
          "lastSaleChange": "Change",
          "change": "% Change"
        },
        "rows": [
          {
            "symbol": "NVDA",
            "name": "NVIDIA Corporation",
            "lastSalePrice": "$610.44",
            "lastSaleChange": "-5.72",
            "change": "-0.93%",
            "deltaIndicator": "down"
          },
          {
            "symbol": "TSLA",
            "name": "Tesla, Inc.",
            "lastSalePrice": "$183.17",
            "lastSaleChange": "+0.54",
            "change": "+0.3%",
            "deltaIndicator": "up"
          },
          ...
        ]
      }
    },
    "Nasdaq100Movers": {
      "dataAsOf": "Data as of Jan 26, 2024 3:56 PM ET",
      "lastTradeTimestamp": "Jan 26, 2024 3:56 PM ET",
      "table": {
        "asOf": null,
        "headers": {
          "symbol": "Symbol",
          "name": "Name",
          "lastSalePrice": "Last",
          "lastSaleChange": "Change",
          "change": "% Change"
        },
        "rows": [
          {
            "symbol": "ADBE",
            "name": "Adobe Inc.",
            "lastSalePrice": "614.1",
            "lastSaleChange": "-8.48",
            "change": "-1.36%",
            "deltaIndicator": "down"
          },
          {
            "symbol": "AMD",
            "name": "Advanced Micro Devices, Inc.",
            "lastSalePrice": "177.435",
            "lastSaleChange": "-2.895",
            "change": "-1.61%",
            "deltaIndicator": "down"
          },
          ...
        ]
      }
    }
  }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/movers**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETF or MUTUALFUNDS or FUTURES. Example: `ETF`

## GET /v1/screener

requires authentication

Endpoint weight: 1

Get a collection of stocks, ETFs and mutualFunds based on selected criteria. We have newer version of this endpoint here: [/v2/screener](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-screener).

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/screener'
params = {
  'list': 'day_gainers',
  'offset': '19',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/screener';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'list' => 'day_gainers',
            'offset' => '19',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/screener"
);

const params = {
    "list": "day_gainers",
    "offset": "19",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/screener?list=day_gainers&offset=19" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "description": "most_actives",
        "processedTime": "2023-08-10T10:49:27.251123Z",
        "offset": 0,
        "count": 25,
        "total": 200,
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com"
    },
    "body": [
        {
            "language": "en-US",
            "region": "US",
            "quoteType": "EQUITY",
            "typeDisp": "Equity",
            "quoteSourceName": "Nasdaq Real Time Price",
            "triggerable": false,
            "customPriceAlertConfidence": "LOW",
            "lastClosePriceToNNWCPerShare": 16.553095993152954,
            "currency": "USD",
            "regularMarketDayLow": 15.1,
            "regularMarketVolume": 124080792,
            "regularMarketPreviousClose": 17.04,
            "bid": 0,
            "ask": 0,
            "bidSize": 418,
            "askSize": 14,
            "market": "us_market",
            "messageBoardId": "finmb_43580005",
            "fullExchangeName": "NYSE",
            "longName": "Palantir Technologies Inc.",
            "financialCurrency": "USD",
            "regularMarketOpen": 16.76,
            "averageDailyVolume3Month": 85510943,
            "averageDailyVolume10Day": 102521260,
            "fiftyTwoWeekLowChange": 9.33,
            "fiftyTwoWeekLowChangePercent": 1.5760134,
            "fiftyTwoWeekRange": "5.92 - 20.24",
            "fiftyTwoWeekHighChange": -4.99,
            "fiftyTwoWeekHighChangePercent": -0.2465415,
            "fiftyTwoWeekChangePercent": 61.889603,
            "earningsTimestamp": 1691442000,
            "earningsTimestampStart": 1699277400,
            "earningsTimestampEnd": 1699623000,
            "trailingAnnualDividendRate": 0,
            "trailingAnnualDividendYield": 0,
            "marketState": "PRE",
            "epsTrailingTwelveMonths": -0.12,
            "epsForward": 0.26,
            "epsCurrentYear": 0.22,
            "priceEpsCurrentYear": 69.318184,
            "sharesOutstanding": 2013760000,
            "bookValue": 1.222,
            "fiftyDayAverage": 16.1592,
            "fiftyDayAverageChange": -0.90920067,
            "fiftyDayAverageChangePercent": -0.0562652,
            "twoHundredDayAverage": 10.072,
            "twoHundredDayAverageChange": 5.1780005,
            "twoHundredDayAverageChangePercent": 0.5140986,
            "marketCap": 32306208768,
            "forwardPE": 58.653847,
            "priceToBook": 12.479542,
            "sourceInterval": 15,
            "exchangeDataDelayedBy": 0,
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "gmtOffSetMilliseconds": -14400000,
            "ipoExpectedDate": "2020-09-29",
            "esgPopulated": false,
            "tradeable": false,
            "cryptoTradeable": false,
            "firstTradeDateMilliseconds": 1601472600000,
            "priceHint": 2,
            "preMarketChange": 0.03999996,
            "preMarketChangePercent": 0.26229483,
            "preMarketTime": 1691664430,
            "preMarketPrice": 15.29,
            "regularMarketChange": -1.7900009,
            "regularMarketTime": 1691611202,
            "regularMarketPrice": 15.25,
            "regularMarketDayHigh": 16.92,
            "regularMarketDayRange": "15.1 - 16.92",
            "averageAnalystRating": "3.3 - Hold",
            "regularMarketChangePercent": -10.5047,
            "exchange": "NYQ",
            "fiftyTwoWeekLow": 5.92,
            "fiftyTwoWeekHigh": 20.24,
            "shortName": "Palantir Technologies Inc.",
            "displayName": "Palantir",
            "symbol": "PLTR"
        },
        {...}
    ]
}



 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/screener**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**list**`  string   


Input a company ticker symbol. Available options:

- **trending**: Trending tickers in today's market
- **undervalued_growth_stocks**: Stocks with earnings growth rates better than 25% and relatively low PE and PEG ratios.
- **growth_technology_stocks**: Technology stocks with revenue and earnings growth in excess of 25%.
- **day_gainers**: Stocks ordered in descending order by price percent change with respect to the previous close.
- **day_losers**: Stocks ordered in ascending order by price percent change with respect to the previous close.
- **most_actives**: Stocks ordered in descending order by intraday trade volume.
- **undervalued_large_caps**: Large cap stocks that are potentially undervalued.
- **aggressive_small_caps**: Small cap stocks with earnings growth rates better than 25%.
- **small_cap_gainers**: Small Caps with a 1 day price change of 5.0% or more. Example: `day_gainers`

`**offset**`  integer   


Add an offset to the response. Example: `19`

## GET /v1/insider-trades

requires authentication

Endpoint weight: 1

Get the latest insider trading activities from U.S Congressmen and Senators, CEO, Directors, Chief Executive Officer, 10% Owner, etc...

> Example request:

```
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/insider-trades';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'minValue' => '10000',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/insider-trades"
);

const params = {
    "minValue": "10000",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/insider-trades?minValue=10000&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "count": 50,
    "total": 477,
    "page": "2"
  },
  "body": [
    {
      "transactionDate": "01/24/24",
      "firstName": "Joshua",
      "lastName": "Gottheimer",
      "shortJobTitle": "US Congressman",
      "symbol": "LAD",
      "symbolShortName": "Lithia Motors",
      "usdValue": "8,000",
      "transactionType": "Sell",
      "noteText": "Traded $1,001 to $15,000 (we have used the midpoint and the close price on the last day of trade to estimate the amount of shares).",
      "symbolCode": "STK",
      "hasOptions": "Yes",
      "symbolType": 1
    },
    {
      "transactionDate": "01/24/24",
      "firstName": "Joshua",
      "lastName": "Gottheimer",
      "shortJobTitle": "US Congressman",
      "symbol": "CHRD",
      "symbolShortName": "Chord Energy C",
      "usdValue": "8,000",
      "transactionType": "Buy",
      "noteText": "Traded $1,001 to $15,000 (we have used the midpoint and the close price on the last day of trade to estimate the amount of shares).",
      "symbolCode": "STK",
      "hasOptions": "Yes",
      "symbolType": 1
    },
    {...}
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/insider-trades**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string  *optional*  


Enter a company ticker symbol.

`**type**`  string  *optional*  


Filter results by type: Buy or Sell or Transfer.

`**minValue**`  string  *optional*  


Filter results by min transaction value.
Example: `10000`

`**politiciansOnly**`  string  *optional*  


Return insider trades from U.S Congressmen and Senators only: true or false.

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v1/news

requires authentication

Endpoint weight: 1

Get the most recent investment and stock news for a given company.

> Example request:

```
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/news';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL,TSLA',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/news"
);

const params = {
    "ticker": "AAPL,TSLA",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/news?ticker=AAPL%2CTSLA" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
[
    {
      "description": "STOCKSTOWATCHTODAY BLOG   Apple stock finally ended its post-earnings losing streak on Tuesday only to begin a new one on Wednesday. Don’t be surprised if it keeps falling. Yes, it might be tempting to buy the Apple dip.",
      "guid": "add44664-1841-3deb-b939-03622143ab97",
      "link": "https://finance.yahoo.com/m/add44664-1841-3deb-b939-03622143ab97/apple-stock-fell-again.-where.html?.tsrc=rss",
      "pubDate": "Wed, 09 Aug 2023 21:38:00 +0000",
      "title": "Apple Stock Fell Again. Where It Might Be Headed Next."
    },
    {
      "description": "The Supreme Court dealt a setback to video game publisher Epic in its battle against Apple over how the iPhone giant treats developers that sell programs on the App store.",
      "guid": "e3329cf7-c056-39f0-acb8-0054a20ff98e",
      "link": "https://finance.yahoo.com/m/e3329cf7-c056-39f0-acb8-0054a20ff98e/supreme-court-says-apple-can.html?.tsrc=rss",
      "pubDate": "Wed, 09 Aug 2023 21:33:19 +0000",
      "title": "Supreme Court Says Apple Can Keep Its Store Payment Rules, For Now"
    },
    {...}
  ]


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/news**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string  *optional*  


Input a company ticker symbol. Example: `AAPL,TSLA`

## GET /v2/search

requires authentication

Endpoint weight: 1

Get tickers for any stock company, ETF, mutual fund, crypto, and more—limited to companies traded within the U.S.

> Example request:

```
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/search';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'search' => 'AA',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/search"
);

const params = {
    "search": "AA",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/search?search=AA" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
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
      "exchange": "NYSE",
      "subCategory": "Common Stock",
      "region": "North America",
      "asset": "STOCKS",
      "industry": "Industrial Products",
      "flag": ""
    },
    {
      "symbol": "AAA",
      "name": "AXS First Priority CLO Bond ETF",
      "exchange": "PSE",
      "subCategory": "",
      "region": "north-america",
      "asset": "ETF",
      "industry": "N Products",
      "flag": ""
    },
    {
      "symbol": "AAAAX",
      "name": "DWS RREEF Real Assets Fund - Class A",
      "exchange": "",
      "subCategory": "MF",
      "region": "North America",
      "asset": "MUTUALFUNDS",
      "industry": "",
      "flag": ""
    },
    {
      "symbol": "AAACX",
      "name": "Alpha Alternative Assets Fund",
      "exchange": "",
      "subCategory": "MF",
      "region": "North America",
      "asset": "MUTUALFUNDS",
      "industry": "",
      "flag": ""
    },
    { ... }
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/search**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**search**`  string   


Enter a search term. Example: `AA`

## GET /v2/movers

requires authentication

Endpoint weight: 1

Get market movers in today's trading session.

> Example request:

```
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/movers';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'change_type' => 'PERCENT',
            'direction' => 'UP',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/movers"
);

const params = {
    "change_type": "PERCENT",
    "direction": "UP",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/movers?change_type=PERCENT&direction=UP&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "count": 20,
    "total": 200,
    "page": 1
  },
  "body": [
    {
      "symbol": "HELE",
      "symbolName": "Helen of Troy Ltd",
      "lastPrice": "73.79",
      "priceChange": "+11.42",
      "percentChange": "+18.31%",
      "volume": "2,418,808",
      "marketCap": "1,422,846",
      "enterpriseValue": "2,070,016",
      "sharesOutstanding": "22,813",
      "annualSales": "2,005,050,000",
      "annualNetIncome": "168,590,000",
      "lastQuarterSales": "416,850,000",
      "lastQuarterIncome": "6,200,000",
      "beta": "0.86",
      "percentInsider": "0.39%",
      "percentInstitutional": "N/A",
      "float": "22,724",
      "floatPercentage": "99.61%",
      "revenueGrowth5y": "28.19%",
      "ebit": "250,710,000",
      "ebitda": "303,440,000",
      "tradeTime": "13:24 ET",
      "symbolCode": "STK",
      "symbolType": 1,
      "hasOptions": "Yes"
    },
    { ... }
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/movers**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**change_type**`  string   


Enter one of the following types: PERCENT or PRICE or GAP Example: `PERCENT`

`**direction**`  string  *optional*  


Change direction: UP or DOWN. Example: `UP`

`**price_min**`  string  *optional*  


Filter results by min price of the stock per share value.

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v2/tickers

requires authentication

Endpoint weight: 1

Get ticker symbols.

> Example request:

```
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/tickers';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'type' => 'STOCKS',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/tickers"
);

const params = {
    "type": "STOCKS",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/tickers?type=STOCKS&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
      "version": "v1.0",
      "status": 200,
      "copywrite": "https://mboum.com",
      "totalrecords": 7249,
      "headers": {
        "symbol": "Symbol",
        "name": "Name",
        "lastsale": "Last Sale",
        "netchange": "Net Change",
        "pctchange": "% Change",
        "marketCap": "Market Cap"
      }
    },
    "body": [
      {
        "symbol": "AAPL",
        "name": "Apple Inc. Common Stock",
        "lastsale": "$185.795",
        "netchange": "-1.065",
        "pctchange": "-0.57%",
        "marketCap": "2,872,742,967,320"
      },
      {
        "symbol": "AMZN",
        "name": "Amazon.com, Inc. Common Stock",
        "lastsale": "$171.97",
        "netchange": "12.69",
        "pctchange": "7.967%",
        "marketCap": "1,777,143,239,874"
      },
      {
        "symbol": "GOOG",
        "name": "Alphabet Inc. Class C Capital Stock",
        "lastsale": "$142.82",
        "netchange": "0.11",
        "pctchange": "0.077%",
        "marketCap": "1,775,681,060,000"
      },
      {
        "symbol": "GOOGL",
        "name": "Alphabet Inc. Class A Common Stock",
        "lastsale": "$141.305",
        "netchange": "0.145",
        "pctchange": "0.103%",
        "marketCap": "1,756,845,065,000"
      },
      ...
    ]
  }


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/tickers**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**type**`  string   


Enter a security type: STOCKS or ETF or MUTUALFUNDS or FUTURES or INDEX. Example: `STOCKS`

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v2/market-info

requires authentication

Endpoint weight: 1

Get market info data.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/market-info'
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/market-info';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/market-info"
);

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/market-info" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com"
    },
    "body": {
        "country": "U.S.",
        "marketIndicator": "After Hours",
        "uiMarketIndicator": "After Hours",
        "marketCountDown": "Market Opens in 2D 14H 5M",
        "preMarketOpeningTime": "Feb 2, 2024 04:00 AM ET",
        "preMarketClosingTime": "Feb 2, 2024 09:30 AM ET",
        "marketOpeningTime": "Feb 2, 2024 09:30 AM ET",
        "marketClosingTime": "Feb 2, 2024 04:00 PM ET",
        "afterHoursMarketOpeningTime": "Feb 2, 2024 04:00 PM ET",
        "afterHoursMarketClosingTime": "Feb 2, 2024 08:00 PM ET",
        "previousTradeDate": "Feb 1, 2024",
        "nextTradeDate": "Feb 5, 2024",
        "isBusinessDay": true,
        "mrktStatus": "After-Hours",
        "mrktCountDown": "Opens in 2D 14H 5M"
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/market-info**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

## GET /v2/screener

requires authentication

Endpoint weight: 1

Get a collection of stocks, ETFs and mutualFunds based on selected criteria.

> Example request:

```
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/screener';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'metricType' => 'overview',
            'filter' => 'high_volume',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/screener"
);

const params = {
    "metricType": "overview",
    "filter": "high_volume",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/screener?metricType=overview&filter=high_volume&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
      "version": "v1.0",
      "status": 200,
      "copywrite": "https://mboum.com",
      "metricType": "overview",
      "description": "Stocks with strong volume gains from the previous session and positive price and volume momentum in the past month.",
      "count": 50,
      "total": 220,
      "page": "1"
    },
    "body": [
      {
        "symbol": "A",
        "symbolName": "Agilent Technologies",
        "lastPrice": "142.86",
        "priceChange": "+3.80",
        "percentChange": "+2.73%",
        "highPrice": "143.49",
        "lowPrice": "138.81",
        "volume": "2,169,200",
        "tradeTime": "03/04/24",
        "symbolCode": "STK",
        "symbolType": 1,
        "hasOptions": "Yes"
      },
      {
        "symbol": "AADI",
        "symbolName": "Aadi Biosciences Inc",
        "lastPrice": "2.4300",
        "priceChange": "+0.5100",
        "percentChange": "+26.82%",
        "highPrice": "2.4700",
        "lowPrice": "1.9200",
        "volume": "3,894,000",
        "tradeTime": "03/04/24",
        "symbolCode": "STK",
        "symbolType": 1,
        "hasOptions": "Yes"
      },
      {...}
    ]
  }


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/screener**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**metricType**`  string   


Select a metric type.

- **overview**: General overview, name and price actions
- **technical**: Technical analysis insights
- **performance**: Performance metrics
- **fundamental**: Fundamental analysis perspective
Example: `overview`

`**filter**`  string   


Select a screener filter. Available options:

- **high_volume**: Stocks with strong volume gains from the previous session and positive price and volume momentum in the past month.
- **hot_stocks**: High-performing stocks with a BUY rating and robust technical analysis support, indicating a strong and potential upward trend.
- **top_under_10**: Stocks priced under $10 with strong Price/Earnings and Price/Sales ratios.
- **dividend**: Dividend-paying stocks showing bullish signals and exhibiting strong momentum.
- **top_fundamentals**: Stocks demonstrating robust market fundamentals, featuring strong sales growth, increased cash flow, and higher shareholder equity.
- **top_tech**: Screen for computer and tech sector stocks hitting new 6-month highs, indicating a strong buying opportunity.
- **j_pattern**: Stocks with J-Hook pattern - up-trending price action that takes a little dip before resuming the trend.
- **golden_cross**: Stocks experiencing a bullish signal as their 50-day moving average crosses above the 200-day moving average today.
- **death_cross**: Stocks experiencing a bearish signal as their 50-day moving average crosses below the 200-day moving average today.
- **consolidation**: Stocks in a strong uptrend consolidating near highs, aiming to spot sideways price congestion within the trend.
- **rsi_overbought**: High-volume stocks with a 20-Day RSI above 70, signaling potential overbought conditions and suggesting a possible trend reversal.
- **rsi_oversold**: High-volume stocks with a 20-Day RSI below 30, signaling potential oversold conditions and suggesting a possible trend reversal to the upside.
- **52wk_toppicks**: Stocks achieved a new 52-Week High in the current session with over 10% price change over the past month.
- **penny_gap**: Penny stocks with the highest percentage change and price movements over the last 5 days.
- **defensive_stock**: Stocks offering reliable dividends and sustained positive sales growth irrespective of market conditions.
- **income_growth**: Stocks with high dividends and earnings growth, coupled with solid dividend yields.
- **buy_longterm**: Bullish stocks maintaining a 100% Overall Buy Signal.
- **sell_growth**: Bearish stocks maintaining a 100% Overall Sell Signal.
Example: `high_volume`

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v2/news

requires authentication

Endpoint weight: 1

Get market news and press releases for a given company.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/news'
params = {
  'ticker': 'AAPL',
  'type': 'ALL',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/news';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'type' => 'ALL',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/news"
);

const params = {
    "ticker": "AAPL",
    "type": "ALL",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/news?ticker=AAPL&type=ALL" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "total": 50
  },
  "body": [
    {
      "url": "https://nypost.com/2024/04/12/business/rite-aid-to-close-53-more-stores-amid-bankruptcy-proceedings/",
      "img": "https://cdn.snapi.dev/images/v1/x/p/wp-content2fuploads2fsites2f22-2368534.jpg",
      "title": "Rite Aid to close 53 more stores across 9 states amid bankruptcy proceedings",
      "text": "The company filed for bankruptcy in October in an attempt to address high debt.",
      "source": "New York Post",
      "type": "Article",
      "tickers": [
        "$RADCQ"
      ],
      "time": "Apr 12, 2024, 12:04 AM EDT",
      "ago": "22 minutes ago"
    },
    {
      "url": "https://www.cnbc.com/2024/04/12/jpmorgan-chase-jpm-earnings-q1-2024.html",
      "img": "https://cdn.snapi.dev/images/v1/p/k/107360168-1708972746073-107360-2368532.jpg",
      "title": "JPMorgan Chase is set to report first-quarter earnings — here's what the Street expects",
      "text": "JPMorgan Chase will be watched closely for clues on how banks fared at the start of the year.",
      "source": "CNBC",
      "type": "Article",
      "tickers": [
        "$JPM"
      ],
      "time": "Apr 12, 2024, 12:01 AM EDT",
      "ago": "25 minutes ago"
    },
    {
      "url": "https://www.reuters.com/business/autos-transportation/uber-lyft-delay-their-plans-leave-minneapolis-2024-04-12/",
      "img": "https://cdn.snapi.dev/images/v1/i/g/q3hn3kf3ffmpfeu7rblbfifiqa-2368530.jpg",
      "title": "Uber and Lyft delay their plans to leave Minneapolis",
      "text": "Ride-hailing companies Lyft and Uber will extend their services in Minneapolis till July 1, they said on Thursday, after city officials voted a day earlier to push back the start of a driver pay raise...",
      "source": "Reuters",
      "type": "Article",
      "tickers": [
        "$LYFT",
        "$UBER"
      ],
      "time": "Apr 11, 2024, 11:34 PM EDT",
      "ago": "52 minutes ago"
    },
    { ... }
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/news**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string  *optional*  


Input a company ticker symbol. Example: `AAPL`

`**type**`  string  *optional*  


Enter one of the following types: ALL or MARKET or VIDEO or PRESS-RELEASE. Example: `ALL`

## GET /v1/quote (real-time)

requires authentication

Endpoint weight: 1

Get real time quote data for a given ticker symbol.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/quote'
params = {
  'ticker': 'AAPL',
  'type': 'STOCKS',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/quote';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'type' => 'STOCKS',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/quote"
);

const params = {
    "ticker": "AAPL",
    "type": "STOCKS",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/quote?ticker=AAPL&type=STOCKS" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com",
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
            "deltaIndicator": "up",
            "lastTradeTimestamp": "Dec 21, 2023 5:13 PM ET",
            "isRealTime": true,
            "bidPrice": "$194.82",
            "askPrice": "$194.84",
            "bidSize": "112",
            "askSize": "400",
            "volume": "45,191,237"
        },
        "secondaryData": {
            "lastSalePrice": "$194.68",
            "netChange": "-0.15",
            "percentageChange": "-0.08%",
            "deltaIndicator": "down",
            "lastTradeTimestamp": "Closed at Dec 21, 2023 4:00 PM ET",
            "isRealTime": false,
            "bidPrice": "",
            "askPrice": "",
            "bidSize": "",
            "askSize": "",
            "volume": ""
        },
        "marketStatus": "After-Hours",
        "assetClass": "STOCKS",
        "keyStats": {
            "fiftyTwoWeekHighLow": {
                "label": "52 Week Range:",
                "value": "124.17 - 199.62"
            },
            "dayrange": {
                "label": "High/Low:",
                "value": "193.51 - 197.07"
            }
        }
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/quote**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Enter a company ticker symbol. Example: `AAPL`

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETF or MUTUALFUNDS or FUTURES. Example: `STOCKS`

## GET /v1/quotes

requires authentication

Endpoint weight: 1

Get the most recent Quote data for a given company.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/stock/quotes'
params = {
  'ticker': 'AAPL,TSLA',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/stock/quotes';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL,TSLA',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/stock/quotes"
);

const params = {
    "ticker": "AAPL,TSLA",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/stock/quotes?ticker=AAPL%2CTSLA" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
      "version": "v1.0",
      "status": 200,
      "copywrite": "https://mboum.com",
      "symbol": "Quotes Data",
      "processedTime": "2023-08-11T00:47:22.112881Z"
    },
    "body": [
      {
        "preMarketChange": null,
        "preMarketChangePercent": null,
        "preMarketPrice": null,
        "preMarketTime": null,
        "postMarketChange": 0.459991,
        "postMarketChangePercent": 0.258466,
        "postMarketPrice": 178.43,
        "postMarketTime": 1691711999,
        "language": "en-US",
        "region": "US",
        "quoteType": "EQUITY",
        "typeDisp": "Equity",
        "quoteSourceName": "Nasdaq Real Time Price",
        "triggerable": true,
        "customPriceAlertConfidence": "HIGH",
        "currency": "USD",
        "exchange": "NMS",
        "shortName": "Apple Inc.",
        "marketState": "POSTPOST",
        "longName": "Apple Inc.",
        "messageBoardId": "finmb_24937",
        "market": "us_market",
        "regularMarketPrice": 177.97,
        "regularMarketChangePercent": -0.1234644,
        "gmtOffSetMilliseconds": -14400000,
        "exchangeTimezoneName": "America/New_York",
        "exchangeTimezoneShortName": "EDT",
        "esgPopulated": false,
        "regularMarketDayLow": 177.601,
        "regularMarketVolume": 51330160,
        "fiftyTwoWeekRange": "124.17 - 198.23",
        "fiftyTwoWeekHighChange": -20.259995,
        "fiftyTwoWeekHighChangePercent": -0.10220449,
        "fiftyTwoWeekLow": 124.17,
        "fiftyTwoWeekHigh": 198.23,
        "fiftyTwoWeekChangePercent": 5.757022,
        "dividendDate": 1692230400,
        "earningsTimestamp": 1691096400,
        "earningsTimestampStart": 1698231540,
        "earningsTimestampEnd": 1698667200,
        "trailingAnnualDividendRate": 0.93,
        "trailingPE": 30.21562,
        "dividendRate": 0.96,
        "regularMarketPreviousClose": 178.19,
        "bid": 178.37,
        "ask": 178.47,
        "bidSize": 22,
        "askSize": 8,
        "fullExchangeName": "NasdaqGS",
        "financialCurrency": "USD",
        "regularMarketOpen": 179.48,
        "averageDailyVolume3Month": 57113016,
        "averageDailyVolume10Day": 62286030,
        "fiftyTwoWeekLowChange": 53.800003,
        "fiftyTwoWeekLowChangePercent": 0.43327698,
        "firstTradeDateMilliseconds": 345479400000,
        "regularMarketChange": -0.22000122,
        "regularMarketTime": 1691697602,
        "regularMarketDayHigh": 180.75,
        "regularMarketDayRange": "177.601 - 180.75",
        "trailingAnnualDividendYield": 0.005219148,
        "dividendYield": 0.53,
        "epsTrailingTwelveMonths": 5.89,
        "epsForward": 6.59,
        "epsCurrentYear": 6.07,
        "priceEpsCurrentYear": 29.319605,
        "sharesOutstanding": 15728700416,
        "bookValue": 3.852,
        "fiftyDayAverage": 187.4184,
        "fiftyDayAverageChange": -9.448395,
        "fiftyDayAverageChangePercent": -0.05041338,
        "twoHundredDayAverage": 160.5426,
        "twoHundredDayAverageChange": 17.427399,
        "twoHundredDayAverageChangePercent": 0.10855311,
        "marketCap": 2799236808704,
        "forwardPE": 27.00607,
        "priceToBook": 46.201973,
        "sourceInterval": 15,
        "exchangeDataDelayedBy": 0,
        "averageAnalystRating": "2.0 - Buy",
        "tradeable": false,
        "cryptoTradeable": false,
        "priceHint": 2,
        "displayName": "Apple",
        "symbol": "AAPL"
      },
      {...}
    ]
  }


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/stock/quotes**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker(s).

- **Equity**: A,APPL,GM,MU,TSLA
- **Futures**: ALI=F,CD=F,QM=F,^IXIC,NQ=F,MNQ=F,H2O=F,BTC-F
- **Forex**: EURUSD=X,AUDUSD=X,GBPUSD=X
- **Indexs**: ^DJT,^HSI,^VIX,^TNX,^NSEI,^TRFK-TC
- **Mutual Funds & ETFs**: SPY,AWSHX,VOO,XAIX.BE,CYBR.AS,BLOK
- **Cryptocurrencies**: BTC-USD,ETH-USD,LTC-USD,ADA-USD
- **Combination**: APPL,CD=F,^VIX,CLOA,ADA-USD
Example: `AAPL,TSLA`

## GET /v1/history

requires authentication

Endpoint weight: 1

Get historical stock data for any company.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/stock/history'
params = {
  'ticker': 'AAPL',
  'interval': '5m',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/stock/history';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'interval' => '5m',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/stock/history"
);

const params = {
    "ticker": "AAPL",
    "interval": "5m",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/stock/history?ticker=AAPL&interval=5m" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
      "processedTime": "2023-08-10T13:08:23.071878Z",
      "currency": "USD",
      "symbol": "AAPL",
      "exchangeName": "NMS",
      "instrumentType": "EQUITY",
      "firstTradeDate": 345479400,
      "regularMarketTime": 1691611201,
      "gmtoffset": -14400,
      "timezone": "EDT",
      "exchangeTimezoneName": "America/New_York",
      "regularMarketPrice": 178.19,
      "chartPreviousClose": 178.19,
      "previousClose": 179.8,
      "scale": 3,
      "priceHint": 2,
      "dataGranularity": "1m",
      "range": "",
      "version": "v1.0",
      "status": 200,
      "copywrite": "https://mboum.com"
    },
    "body": {
      "1691593260": {
        "date": "09-08-2023",
        "date_utc": 1691593260,
        "open": 177.85,
        "high": 177.89,
        "low": 177.82,
        "close": 177.89,
        "volume": 88211
      },
      "1691593320": {
        "date": "09-08-2023",
        "date_utc": 1691593320,
        "open": 177.88,
        "high": 178.07,
        "low": 177.86,
        "close": 178.06,
        "volume": 147707
      },
      {...}
    }
  }


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/stock/history**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Input a company ticker symbol. Example: `AAPL`

`**interval**`  string   


Time interval between two consecutive data points in the time series. The following values are supported:

- **1m**: 1 min candles. Range: 1 Day
- **5m**: 5 mins candles. Range: 1 Month
- **15m**: 15 mins candles. Range: 1 Month
- **30m**: 30 mins candles. Range: 1 Month
- **1d**: 1 day candles. Range: 5 Years
- **1wk**: 1 week candles. Range: 5 Years
- **1mo**: 1 month candles. Range: 10 Years
- **3mo**: 3 months' candles. Range: 10 Years. Example: `5m`

`**diffandsplits**`  string  *optional*  


Include diff and splits in response. Accepted values: true or false.

## GET /v1/modules

requires authentication

Endpoint weight: 2

Get company data such as profile, earnings, statistics, balance sheet and more.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/stock/modules'
params = {
  'ticker': 'AAPL',
  'module': 'profile',
  'timeframe': 'annually',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/stock/modules';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'module' => 'profile',
            'timeframe' => 'annually',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/stock/modules"
);

const params = {
    "ticker": "AAPL",
    "module": "profile",
    "timeframe": "annually",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/stock/modules?ticker=AAPL&module=profile&timeframe=annually" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com",
        "symbol": "AAPL",
        "processedTime": "2023-08-09T09:10:21.978992Z"
    },
    "body": {
        "address1": "One Apple Park Way",
        "city": "Cupertino",
        "state": "CA",
        "zip": "95014",
        "country": "United States",
        "phone": "408 996 1010",
        "website": "https://www.apple.com",
        "industry": "Consumer Electronics",
        "industryDisp": "Consumer Electronics",
        "sector": "Technology",
        "sectorDisp": "Technology",
        "longBusinessSummary": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. In addition, the company offers various services, such as Apple Arcade, a game subscription service; Apple Fitness+, a personalized fitness service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.",
        "fullTimeEmployees": 164000,
        "companyOfficers": [
            {
                "maxAge": 1,
                "name": "Mr. Timothy D. Cook",
                "age": 61,
                "title": "CEO & Director",
                "yearBorn": 1961,
                "fiscalYear": 2022,
                "totalPay": {
                    "raw": 16425933,
                    "fmt": "16.43M",
                    "longFmt": "16,425,933"
                },
                "exercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                },
                "unexercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                }
            },
            {
                "maxAge": 1,
                "name": "Mr. Luca  Maestri",
                "age": 59,
                "title": "CFO & Sr. VP",
                "yearBorn": 1963,
                "fiscalYear": 2022,
                "totalPay": {
                    "raw": 5019783,
                    "fmt": "5.02M",
                    "longFmt": "5,019,783"
                },
                "exercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                },
                "unexercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                }
            },
            {
                "maxAge": 1,
                "name": "Mr. Jeffrey E. Williams",
                "age": 58,
                "title": "Chief Operating Officer",
                "yearBorn": 1964,
                "fiscalYear": 2022,
                "totalPay": {
                    "raw": 5018337,
                    "fmt": "5.02M",
                    "longFmt": "5,018,337"
                },
                "exercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                },
                "unexercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                }
            },
            {
                "maxAge": 1,
                "name": "Ms. Katherine L. Adams",
                "age": 58,
                "title": "Sr. VP, Gen. Counsel & Sec.",
                "yearBorn": 1964,
                "fiscalYear": 2022,
                "totalPay": {
                    "raw": 5015208,
                    "fmt": "5.02M",
                    "longFmt": "5,015,208"
                },
                "exercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                },
                "unexercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                }
            },
            {
                "maxAge": 1,
                "name": "Ms. Deirdre  O'Brien",
                "age": 55,
                "title": "Sr. VP of Retail",
                "yearBorn": 1967,
                "fiscalYear": 2022,
                "totalPay": {
                    "raw": 5019783,
                    "fmt": "5.02M",
                    "longFmt": "5,019,783"
                },
                "exercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                },
                "unexercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                }
            },
            {
                "maxAge": 1,
                "name": "Mr. Chris  Kondo",
                "title": "Sr. Director of Corp. Accounting",
                "exercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                },
                "unexercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                }
            },
            {
                "maxAge": 1,
                "name": "Mr. James  Wilson",
                "title": "Chief Technology Officer",
                "exercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                },
                "unexercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                }
            },
            {
                "maxAge": 1,
                "name": "Ms. Mary  Demby",
                "title": "Chief Information Officer",
                "exercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                },
                "unexercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                }
            },
            {
                "maxAge": 1,
                "name": "Ms. Nancy  Paxton",
                "title": "Sr. Director of Investor Relations & Treasury",
                "exercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                },
                "unexercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                }
            },
            {
                "maxAge": 1,
                "name": "Mr. Greg  Joswiak",
                "title": "Sr. VP of Worldwide Marketing",
                "exercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                },
                "unexercisedValue": {
                    "raw": 0,
                    "fmt": null,
                    "longFmt": "0"
                }
            }
        ],
        "auditRisk": 4,
        "boardRisk": 1,
        "compensationRisk": 5,
        "shareHolderRightsRisk": 1,
        "overallRisk": 1,
        "governanceEpochDate": 1690848000,
        "compensationAsOfEpochDate": 1672444800,
        "maxAge": 86400
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/stock/modules**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker. Example: `AAPL`

`**module**`  string   


List of valid strings: (one per request)

- **profile**: Company profile information.
- **income-statement**: Income statement history.
- **income-statement-v2**: Income statement history upto 15 years.New!
- **balance-sheet**: Balance sheet history.
- **balance-sheet-v2**: Balance sheet history upto 15 years.New!
- **cashflow-statement**: Cashflow statement history.
- **cashflow-statement-v2**: Cashflow statement history upto 15 years.New!
- **financial-data**: Financial data information.
- **statistics**: Key statistics.
- **ratios**: Financial ratios.New!
- **calendar-events**: Calendar events.
- **sec-filings**: SEC filings.
- **recommendation-trend**: Recommendation trend.
- **upgrade-downgrade-history**: Upgrade and downgrade history.
- **insider-transactions**: Insider transactions.
- **insider-holders**: Insider holders.
- **net-share-purchase-activity**: Net share purchase activity.
- **earnings**: Earnings information.
- **index-trend**: Index trend.
- **industry-trend**: Industry trend.
- **sector-trend**: Sector trend. Example: `profile`

`**timeframe**`  string  *optional*  


Select a timeframe from the following: annually, quarterly, trailing. (only applies to v2 modules) Example: `annually`

## GET /v1/analyst-ratings

requires authentication

Endpoint weight: 2

Get Analyst Ratings to gauge the possible future performance of a stock. Analyst Ratings are available for US and Canadian equities.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/stock/analyst-ratings'
params = {
  'ticker': 'AAPL,NVDA',
  'page': '1',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/stock/analyst-ratings';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL,NVDA',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/stock/analyst-ratings"
);

const params = {
    "ticker": "AAPL,NVDA",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/stock/analyst-ratings?ticker=AAPL%2CNVDA&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com",
        "count": 3,
        "total": 3
    },
    "body": [
        {
            "symbol": "AAPL",
            "exchange": "NASDAQ",
            "symbolName": "Apple Inc",
            "symbolType": 1,
            "baseCode": "A",
            "symbolCode": "STK",
            "previousPrice": "181.16",
            "previousHighPrice": "182.76",
            "previousLowPrice": "180.65",
            "weeklyPreviousPrice": "182.52",
            "weeklyPreviousHighPrice": "185.04",
            "weeklyPreviousLowPrice": "180.00",
            "monthlyPreviousPrice": "184.40",
            "monthlyPreviousHighPrice": "196.38",
            "monthlyPreviousLowPrice": "180.17",
            "chartTime": "2024-02-26T07:00:00",
            "shortSymbol": "AAPL",
            "hasBats": "Yes",
            "hasJerq": "Yes",
            "lastPrice": "182.63",
            "percentChange": "+0.81%",
            "priceChange": "+1.47",
            "openPrice": "181.10",
            "lowPrice": "179.56",
            "highPrice": "183.92",
            "pointValue": "1.00000",
            "highPrice1y": "199.62",
            "lowPrice1y": "143.90",
            "weightedAlpha": "+14.60",
            "meanTargetEstimate": "207.56",
            "highTargetEstimate": "250.00",
            "lowTargetEstimate": "158.00"
        },
        {
            "symbol": "MU",
            "exchange": "NASDAQ",
            "symbolName": "Micron Technology",
            "symbolType": 1,
            "baseCode": "A",
            "symbolCode": "STK",
            "previousPrice": "89.46",
            "previousHighPrice": "92.35",
            "previousLowPrice": "88.90",
            "weeklyPreviousPrice": "86.00",
            "weeklyPreviousHighPrice": "86.82",
            "weeklyPreviousLowPrice": "79.15",
            "monthlyPreviousPrice": "85.75",
            "monthlyPreviousHighPrice": "90.04",
            "monthlyPreviousLowPrice": "80.58",
            "chartTime": "2024-02-26T07:00:00",
            "shortSymbol": "MU",
            "hasBats": "Yes",
            "hasJerq": "Yes",
            "lastPrice": "91.85",
            "percentChange": "+2.67%",
            "priceChange": "+2.39",
            "openPrice": "91.89",
            "lowPrice": "90.49",
            "highPrice": "92.75",
            "pointValue": "1.00000",
            "highPrice1y": "92.75",
            "lowPrice1y": "52.76",
            "weightedAlpha": "+65.40",
            "meanTargetEstimate": "97.10",
            "highTargetEstimate": "140.00",
            "lowTargetEstimate": "74.75"
        },
        {
            "symbol": "NVDA",
            "exchange": "NASDAQ",
            "symbolName": "Nvidia Corp",
            "symbolType": 1,
            "baseCode": "A",
            "symbolCode": "STK",
            "previousPrice": "790.92",
            "previousHighPrice": "806.46",
            "previousLowPrice": "785.05",
            "weeklyPreviousPrice": "788.17",
            "weeklyPreviousHighPrice": "823.94",
            "weeklyPreviousLowPrice": "662.48",
            "monthlyPreviousPrice": "615.27",
            "monthlyPreviousHighPrice": "634.93",
            "monthlyPreviousLowPrice": "473.20",
            "chartTime": "2024-02-26T07:00:00",
            "shortSymbol": "NVDA",
            "hasBats": "Yes",
            "hasJerq": "Yes",
            "lastPrice": "787.01",
            "percentChange": "-0.49%",
            "priceChange": "-3.91",
            "openPrice": "793.81",
            "lowPrice": "771.62",
            "highPrice": "794.80",
            "pointValue": "1.00000",
            "highPrice1y": "823.94",
            "lowPrice1y": "222.97",
            "weightedAlpha": "+228.40",
            "meanTargetEstimate": "825.38",
            "highTargetEstimate": "1,200.00",
            "lowTargetEstimate": "475.00"
        }
    ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/stock/analyst-ratings**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Input a company ticker symbols (10 per request limit). Example: `AAPL,NVDA`

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v2/ticker-summary

requires authentication

Endpoint weight: 1

Get ticker market summary such as price range, marketCap, P/E, earnings and more!

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/stock/ticker-summary'
params = {
  'ticker': 'AAPL',
  'type': 'STOCKS',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/stock/ticker-summary';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'type' => 'STOCKS',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/stock/ticker-summary"
);

const params = {
    "ticker": "AAPL",
    "type": "STOCKS",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/stock/ticker-summary?ticker=AAPL&type=STOCKS" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com"
    },
    "body": {
        "symbol": "AAPL",
        "summaryData": {
            "Exchange": {
                "label": "Exchange",
                "value": "NASDAQ-GS"
            },
            "Sector": {
                "label": "Sector",
                "value": "Technology"
            },
            "Industry": {
                "label": "Industry",
                "value": "Computer Manufacturing"
            },
            "OneYrTarget": {
                "label": "1 Year Target",
                "value": "$205.00"
            },
            "TodayHighLow": {
                "label": "Today's High/Low",
                "value": "$187.33/$179.25"
            },
            "ShareVolume": {
                "label": "Share Volume",
                "value": "102,551,680"
            },
            "AverageVolume": {
                "label": "Average Volume",
                "value": "52,248,247"
            },
            "PreviousClose": {
                "label": "Previous Close",
                "value": "$186.86"
            },
            "FiftTwoWeekHighLow": {
                "label": "52 Week High/Low",
                "value": "$199.62/$143.9"
            },
            "MarketCap": {
                "label": "Market Cap",
                "value": "2,873,593,371,600"
            },
            "PERatio": {
                "label": "P/E Ratio",
                "value": 28.95
            },
            "ForwardPE1Yr": {
                "label": "Forward P/E 1 Yr.",
                "value": "28.40"
            },
            "EarningsPerShare": {
                "label": "Earnings Per Share(EPS)",
                "value": "$6.42"
            },
            "AnnualizedDividend": {
                "label": "Annualized Dividend",
                "value": "$0.96"
            },
            "ExDividendDate": {
                "label": "Ex Dividend Date",
                "value": "Nov 10, 2023"
            },
            "DividendPaymentDate": {
                "label": "Dividend Pay Date",
                "value": "Nov 16, 2023"
            },
            "Yield": {
                "label": "Current Yield",
                "value": "0.51%"
            },
            "Beta": {
                "label": "Beta",
                "value": 0
            }
        },
        "assetClass": "STOCKS",
        "additionalData": null,
        "bidAsk": {
            "Bid * Size": {
                "label": "Bid * Size",
                "value": "N/A"
            },
            "Ask * Size": {
                "label": "Ask * Size",
                "value": "N/A"
            }
        }
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/stock/ticker-summary**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Enter a company ticker symbol. Example: `AAPL`

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETF or MUTUALFUNDS or FUTURES. Example: `STOCKS`

## GET /v2/price-targets

requires authentication

Endpoint weight: 1

Get a company price targets and projections analysis.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/stock/price-targets'
params = {
  'ticker': 'AAPL',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/stock/price-targets';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/stock/price-targets"
);

const params = {
    "ticker": "AAPL",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/stock/price-targets?ticker=AAPL" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com"
    },
    "body": {
        "symbol": "aapl",
        "consensusOverview": {
            "lowPriceTarget": 158,
            "highPriceTarget": 250,
            "priceTarget": 205.33,
            "buy": 19,
            "sell": 1,
            "hold": 8
        },
        "historicalConsensus": [
            {
                "z": {
                    "buy": 25,
                    "hold": 5,
                    "sell": 0,
                    "date": "02/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1675209600,
                "y": 145.43
            },
            {
                "z": {
                    "buy": 25,
                    "hold": 5,
                    "sell": 0,
                    "date": "03/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1677628800,
                "y": 145.31
            },
            {
                "z": {
                    "buy": 23,
                    "hold": 5,
                    "sell": 1,
                    "date": "04/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1680307200,
                "y": 164.9
            },
            {
                "z": {
                    "buy": 25,
                    "hold": 4,
                    "sell": 1,
                    "date": "05/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1682899200,
                "y": 169.59
            },
            {
                "z": {
                    "buy": 22,
                    "hold": 5,
                    "sell": 1,
                    "date": "06/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1685577600,
                "y": 180.09
            },
            {
                "z": {
                    "buy": 24,
                    "hold": 7,
                    "sell": 0,
                    "date": "07/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1688169600,
                "y": 193.97
            },
            {
                "z": {
                    "buy": 23,
                    "hold": 8,
                    "sell": 0,
                    "date": "08/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1690848000,
                "y": 195.605
            },
            {
                "z": {
                    "buy": 22,
                    "hold": 8,
                    "sell": 0,
                    "date": "09/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1693526400,
                "y": 189.46
            },
            {
                "z": {
                    "buy": 20,
                    "hold": 9,
                    "sell": 0,
                    "date": "10/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1696118400,
                "y": 171.21
            },
            {
                "z": {
                    "buy": 21,
                    "hold": 9,
                    "sell": 0,
                    "date": "11/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1698796800,
                "y": 173.97
            },
            {
                "z": {
                    "buy": 24,
                    "hold": 8,
                    "sell": 0,
                    "date": "12/01/2023",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1701388800,
                "y": 191.24
            },
            {
                "z": {
                    "buy": 22,
                    "hold": 8,
                    "sell": 1,
                    "date": "01/01/2024",
                    "consensus": "Buy",
                    "latest": null
                },
                "x": 1704067200,
                "y": 192.53
            },
            {
                "z": {
                    "buy": 20,
                    "hold": 9,
                    "sell": 1,
                    "date": "02/01/2024",
                    "consensus": "Buy",
                    "latest": {
                        "high": 186.95,
                        "avg": 185.38,
                        "low": 183.82
                    }
                },
                "x": 1706745600,
                "y": 205.33
            }
        ]
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/stock/price-targets**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Enter a company ticker symbol. Example: `AAPL`

## GET /v2/financials

requires authentication

Endpoint weight: 1

Get a company income statment, balance sheet, cashflow and financial ratios. Need more data? checkout our [/v1/modules](https://docs.mboum.com/#stocks-options-endpoints-GETapi-v1-markets-stock-modules) endpoint.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/stock/financials'
params = {
  'ticker': 'AAPL',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/stock/financials';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/stock/financials"
);

const params = {
    "ticker": "AAPL",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/stock/financials?ticker=AAPL" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com",
        "symbol": "AAPL"
    },
    "body": {
        "incomeStatementTable": {
            "headers": {
                "value1": "Period Ending:",
                "value2": "9/30/2023",
                "value3": "9/24/2022",
                "value4": "9/25/2021",
                "value5": "9/26/2020"
            },
            "rows": [
                {
                    "value1": "Total Revenue",
                    "value2": "$383,285,000",
                    "value3": "$394,328,000",
                    "value4": "$365,817,000",
                    "value5": "$274,515,000"
                },
                {
                    "value1": "Cost of Revenue",
                    "value2": "$214,137,000",
                    "value3": "$223,546,000",
                    "value4": "$212,981,000",
                    "value5": "$169,559,000"
                },
                {
                    "value1": "Gross Profit",
                    "value2": "$169,148,000",
                    "value3": "$170,782,000",
                    "value4": "$152,836,000",
                    "value5": "$104,956,000"
                },
                {
                    "value1": "Operating Expenses",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Research and Development",
                    "value2": "$29,915,000",
                    "value3": "$26,251,000",
                    "value4": "$21,914,000",
                    "value5": "$18,752,000"
                },
                {
                    "value1": "Sales, General and Admin.",
                    "value2": "$24,932,000",
                    "value3": "$25,094,000",
                    "value4": "$21,973,000",
                    "value5": "$19,916,000"
                },
                {
                    "value1": "Non-Recurring Items",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Other Operating Items",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Operating Income",
                    "value2": "$114,301,000",
                    "value3": "$119,437,000",
                    "value4": "$108,949,000",
                    "value5": "$66,288,000"
                },
                {
                    "value1": "Add'l income/expense items",
                    "value2": "-$565,000",
                    "value3": "-$334,000",
                    "value4": "$258,000",
                    "value5": "$803,000"
                },
                {
                    "value1": "Earnings Before Interest and Tax",
                    "value2": "$113,736,000",
                    "value3": "$119,103,000",
                    "value4": "$109,207,000",
                    "value5": "$67,091,000"
                },
                {
                    "value1": "Interest Expense",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Earnings Before Tax",
                    "value2": "$113,736,000",
                    "value3": "$119,103,000",
                    "value4": "$109,207,000",
                    "value5": "$67,091,000"
                },
                {
                    "value1": "Income Tax",
                    "value2": "$16,741,000",
                    "value3": "$19,300,000",
                    "value4": "$14,527,000",
                    "value5": "$9,680,000"
                },
                {
                    "value1": "Minority Interest",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Equity Earnings/Loss Unconsolidated Subsidiary",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Net Income-Cont. Operations",
                    "value2": "$96,995,000",
                    "value3": "$99,803,000",
                    "value4": "$94,680,000",
                    "value5": "$57,411,000"
                },
                {
                    "value1": "Net Income",
                    "value2": "$96,995,000",
                    "value3": "$99,803,000",
                    "value4": "$94,680,000",
                    "value5": "$57,411,000"
                },
                {
                    "value1": "Net Income Applicable to Common Shareholders",
                    "value2": "$96,995,000",
                    "value3": "$99,803,000",
                    "value4": "$94,680,000",
                    "value5": "$57,411,000"
                }
            ]
        },
        "balanceSheetTable": {
            "headers": {
                "value1": "Period Ending:",
                "value2": "9/30/2023",
                "value3": "9/24/2022",
                "value4": "9/25/2021",
                "value5": "9/26/2020"
            },
            "rows": [
                {
                    "value1": "Current Assets",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Cash and Cash Equivalents",
                    "value2": "$29,965,000",
                    "value3": "$23,646,000",
                    "value4": "$34,940,000",
                    "value5": "$38,016,000"
                },
                {
                    "value1": "Short-Term Investments",
                    "value2": "$31,590,000",
                    "value3": "$24,658,000",
                    "value4": "$27,699,000",
                    "value5": "$52,927,000"
                },
                {
                    "value1": "Net Receivables",
                    "value2": "$60,985,000",
                    "value3": "$60,932,000",
                    "value4": "$51,506,000",
                    "value5": "$37,445,000"
                },
                {
                    "value1": "Inventory",
                    "value2": "$6,331,000",
                    "value3": "$4,946,000",
                    "value4": "$6,580,000",
                    "value5": "$4,061,000"
                },
                {
                    "value1": "Other Current Assets",
                    "value2": "$14,695,000",
                    "value3": "$21,223,000",
                    "value4": "$14,111,000",
                    "value5": "$11,264,000"
                },
                {
                    "value1": "Total Current Assets",
                    "value2": "$143,566,000",
                    "value3": "$135,405,000",
                    "value4": "$134,836,000",
                    "value5": "$143,713,000"
                },
                {
                    "value1": "Long-Term Assets",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Long-Term Investments",
                    "value2": "$100,544,000",
                    "value3": "$120,805,000",
                    "value4": "$127,877,000",
                    "value5": "$100,887,000"
                },
                {
                    "value1": "Fixed Assets",
                    "value2": "$43,715,000",
                    "value3": "$42,117,000",
                    "value4": "$39,440,000",
                    "value5": "$36,766,000"
                },
                {
                    "value1": "Goodwill",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Intangible Assets",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Other Assets",
                    "value2": "$64,758,000",
                    "value3": "$54,428,000",
                    "value4": "$48,849,000",
                    "value5": "$42,522,000"
                },
                {
                    "value1": "Deferred Asset Charges",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Total Assets",
                    "value2": "$352,583,000",
                    "value3": "$352,755,000",
                    "value4": "$351,002,000",
                    "value5": "$323,888,000"
                },
                {
                    "value1": "Current Liabilities",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Accounts Payable",
                    "value2": "$62,611,000",
                    "value3": "$64,115,000",
                    "value4": "$54,763,000",
                    "value5": "$42,296,000"
                },
                {
                    "value1": "Short-Term Debt / Current Portion of Long-Term Debt",
                    "value2": "$15,807,000",
                    "value3": "$21,110,000",
                    "value4": "$15,613,000",
                    "value5": "$13,769,000"
                },
                {
                    "value1": "Other Current Liabilities",
                    "value2": "$66,890,000",
                    "value3": "$68,757,000",
                    "value4": "$55,105,000",
                    "value5": "$49,327,000"
                },
                {
                    "value1": "Total Current Liabilities",
                    "value2": "$145,308,000",
                    "value3": "$153,982,000",
                    "value4": "$125,481,000",
                    "value5": "$105,392,000"
                },
                {
                    "value1": "Long-Term Debt",
                    "value2": "$95,281,000",
                    "value3": "$98,959,000",
                    "value4": "$109,106,000",
                    "value5": "$98,667,000"
                },
                {
                    "value1": "Other Liabilities",
                    "value2": "$49,848,000",
                    "value3": "$49,142,000",
                    "value4": "$53,325,000",
                    "value5": "$54,490,000"
                },
                {
                    "value1": "Deferred Liability Charges",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Misc. Stocks",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Minority Interest",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Total Liabilities",
                    "value2": "$290,437,000",
                    "value3": "$302,083,000",
                    "value4": "$287,912,000",
                    "value5": "$258,549,000"
                },
                {
                    "value1": "Stock Holders Equity",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Common Stocks",
                    "value2": "$73,812,000",
                    "value3": "$64,849,000",
                    "value4": "$57,365,000",
                    "value5": "$50,779,000"
                },
                {
                    "value1": "Capital Surplus",
                    "value2": "-$214,000",
                    "value3": "-$3,068,000",
                    "value4": "$5,562,000",
                    "value5": "$14,966,000"
                },
                {
                    "value1": "Retained Earnings",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Treasury Stock",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Other Equity",
                    "value2": "-$11,452,000",
                    "value3": "-$11,109,000",
                    "value4": "$163,000",
                    "value5": "-$406,000"
                },
                {
                    "value1": "Total Equity",
                    "value2": "$62,146,000",
                    "value3": "$50,672,000",
                    "value4": "$63,090,000",
                    "value5": "$65,339,000"
                },
                {
                    "value1": "Total Liabilities & Equity",
                    "value2": "$352,583,000",
                    "value3": "$352,755,000",
                    "value4": "$351,002,000",
                    "value5": "$323,888,000"
                }
            ]
        },
        "cashFlowTable": {
            "headers": {
                "value1": "Period Ending:",
                "value2": "9/30/2023",
                "value3": "9/24/2022",
                "value4": "9/25/2021",
                "value5": "9/26/2020"
            },
            "rows": [
                {
                    "value1": "Net Income",
                    "value2": "$96,995,000",
                    "value3": "$99,803,000",
                    "value4": "$94,680,000",
                    "value5": "$57,411,000"
                },
                {
                    "value1": "Cash Flows-Operating Activities",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Depreciation",
                    "value2": "$11,519,000",
                    "value3": "$11,104,000",
                    "value4": "$11,284,000",
                    "value5": "$11,056,000"
                },
                {
                    "value1": "Net Income Adjustments",
                    "value2": "$8,606,000",
                    "value3": "$10,044,000",
                    "value4": "$2,985,000",
                    "value5": "$6,517,000"
                },
                {
                    "value1": "Changes in Operating Activities",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Accounts Receivable",
                    "value2": "-$417,000",
                    "value3": "-$9,343,000",
                    "value4": "-$14,028,000",
                    "value5": "$8,470,000"
                },
                {
                    "value1": "Changes in Inventories",
                    "value2": "-$1,618,000",
                    "value3": "$1,484,000",
                    "value4": "-$2,642,000",
                    "value5": "-$127,000"
                },
                {
                    "value1": "Other Operating Activities",
                    "value2": "-$5,684,000",
                    "value3": "-$6,499,000",
                    "value4": "-$8,042,000",
                    "value5": "-$9,588,000"
                },
                {
                    "value1": "Liabilities",
                    "value2": "$1,142,000",
                    "value3": "$15,558,000",
                    "value4": "$19,801,000",
                    "value5": "$6,935,000"
                },
                {
                    "value1": "Net Cash Flow-Operating",
                    "value2": "$110,543,000",
                    "value3": "$122,151,000",
                    "value4": "$104,038,000",
                    "value5": "$80,674,000"
                },
                {
                    "value1": "Cash Flows-Investing Activities",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Capital Expenditures",
                    "value2": "-$10,959,000",
                    "value3": "-$10,708,000",
                    "value4": "-$11,085,000",
                    "value5": "-$7,309,000"
                },
                {
                    "value1": "Investments",
                    "value2": "$16,001,000",
                    "value3": "-$9,560,000",
                    "value4": "-$3,075,000",
                    "value5": "$5,453,000"
                },
                {
                    "value1": "Other Investing Activities",
                    "value2": "-$1,337,000",
                    "value3": "-$2,086,000",
                    "value4": "-$385,000",
                    "value5": "-$2,433,000"
                },
                {
                    "value1": "Net Cash Flows-Investing",
                    "value2": "$3,705,000",
                    "value3": "-$22,354,000",
                    "value4": "-$14,545,000",
                    "value5": "-$4,289,000"
                },
                {
                    "value1": "Cash Flows-Financing Activities",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Sale and Purchase of Stock",
                    "value2": "-$77,550,000",
                    "value3": "-$89,402,000",
                    "value4": "-$85,971,000",
                    "value5": "-$72,358,000"
                },
                {
                    "value1": "Net Borrowings",
                    "value2": "-$9,901,000",
                    "value3": "-$123,000",
                    "value4": "$12,665,000",
                    "value5": "$2,499,000"
                },
                {
                    "value1": "Other Financing Activities",
                    "value2": "-$6,012,000",
                    "value3": "-$6,383,000",
                    "value4": "-$5,580,000",
                    "value5": "-$2,880,000"
                },
                {
                    "value1": "Net Cash Flows-Financing",
                    "value2": "-$108,488,000",
                    "value3": "-$110,749,000",
                    "value4": "-$93,353,000",
                    "value5": "-$86,820,000"
                },
                {
                    "value1": "Effect of Exchange Rate",
                    "value2": "--",
                    "value3": "--",
                    "value4": "--",
                    "value5": "--"
                },
                {
                    "value1": "Net Cash Flow",
                    "value2": "$5,760,000",
                    "value3": "-$10,952,000",
                    "value4": "-$3,860,000",
                    "value5": "-$10,435,000"
                }
            ]
        },
        "financialRatiosTable": {
            "headers": {
                "value1": "Period Ending:",
                "value2": "9/30/2023",
                "value3": "9/24/2022",
                "value4": "9/25/2021",
                "value5": "9/26/2020"
            },
            "rows": [
                {
                    "value1": "Liquidity Ratios",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Current Ratio",
                    "value2": "98.80117%",
                    "value3": "87.9356%",
                    "value4": "107.45531%",
                    "value5": "136.36044%"
                },
                {
                    "value1": "Quick Ratio",
                    "value2": "94.44422%",
                    "value3": "84.72354%",
                    "value4": "102.21149%",
                    "value5": "132.50721%"
                },
                {
                    "value1": "Cash Ratio",
                    "value2": "42.36174%",
                    "value3": "31.3699%",
                    "value4": "49.91911%",
                    "value5": "86.29023%"
                },
                {
                    "value1": "Profitability Ratios",
                    "value2": "",
                    "value3": "",
                    "value4": "",
                    "value5": ""
                },
                {
                    "value1": "Gross Margin",
                    "value2": "44.13113%",
                    "value3": "43.30963%",
                    "value4": "41.77936%",
                    "value5": "38.23325%"
                },
                {
                    "value1": "Operating Margin",
                    "value2": "29.82141%",
                    "value3": "30.28874%",
                    "value4": "29.78238%",
                    "value5": "24.14731%"
                },
                {
                    "value1": "Pre-Tax Margin",
                    "value2": "29.674%",
                    "value3": "30.20404%",
                    "value4": "29.8529%",
                    "value5": "24.43983%"
                },
                {
                    "value1": "Profit Margin",
                    "value2": "25.30623%",
                    "value3": "25.30964%",
                    "value4": "25.88179%",
                    "value5": "20.91361%"
                },
                {
                    "value1": "Pre-Tax ROE",
                    "value2": "183.01419%",
                    "value3": "235.04697%",
                    "value4": "173.09716%",
                    "value5": "102.6814%"
                },
                {
                    "value1": "After Tax ROE",
                    "value2": "156.07601%",
                    "value3": "196.95887%",
                    "value4": "150.07133%",
                    "value5": "87.86636%"
                }
            ]
        }
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/stock/financials**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Enter a company ticker symbol. Example: `AAPL`

## GET /v2/revenue

requires authentication

Endpoint weight: 1

Get a company revenue and earnings per share (EPS). Need more data? checkout our [/v1/modules](https://docs.mboum.com/#stocks-options-endpoints-GETapi-v1-markets-stock-modules) endpoint.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/stock/revenue'
params = {
  'ticker': 'AAPL',
  'page': '1',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/stock/revenue';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/stock/revenue"
);

const params = {
    "ticker": "AAPL",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/stock/revenue?ticker=AAPL&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com"
    },
    "body": {
        "title": "APPLE INC. REVENUE & EARNINGS PER SHARE (EPS)",
        "revenueTable": {
            "headers": {
                "value1": "Fiscal Quarter:",
                "value2": "2023 (Fiscal Year)",
                "value3": "2022 (Fiscal Year)",
                "value4": "2021 (Fiscal Year)"
            },
            "rows": [
                {
                    "value1": "December",
                    "value2": "",
                    "value3": "",
                    "value4": ""
                },
                {
                    "value1": "Revenue",
                    "value2": "$117,154(m)",
                    "value3": "$123,945(m)",
                    "value4": "$111,439(m)"
                },
                {
                    "value1": "EPS",
                    "value2": "$1.88 (12/31/2022)",
                    "value3": "$2.10 (12/25/2021)",
                    "value4": "$1.68 (12/26/2020)"
                },
                {
                    "value1": "Dividends",
                    "value2": "$0.23",
                    "value3": "$0.22",
                    "value4": "$0.20"
                },
                {
                    "value1": "March",
                    "value2": "",
                    "value3": "",
                    "value4": ""
                },
                {
                    "value1": "Revenue",
                    "value2": "$94,836(m)",
                    "value3": "$97,278(m)",
                    "value4": "$89,584(m)"
                },
                {
                    "value1": "EPS",
                    "value2": "$1.53 (04/01/2023)",
                    "value3": "$1.52 (03/26/2022)",
                    "value4": "$1.40 (03/27/2021)"
                },
                {
                    "value1": "Dividends",
                    "value2": "$0.24",
                    "value3": "$0.23",
                    "value4": "$0.22"
                },
                {
                    "value1": "June",
                    "value2": "",
                    "value3": "",
                    "value4": ""
                },
                {
                    "value1": "Revenue",
                    "value2": "$81,797(m)",
                    "value3": "$82,959(m)",
                    "value4": "$81,434(m)"
                },
                {
                    "value1": "EPS",
                    "value2": "$1.26 (07/01/2023)",
                    "value3": "$1.20 (06/25/2022)",
                    "value4": "$1.30 (06/26/2021)"
                },
                {
                    "value1": "Dividends",
                    "value2": "$0.24",
                    "value3": "$0.23",
                    "value4": "$0.22"
                },
                {
                    "value1": "September (FYE)",
                    "value2": "",
                    "value3": "",
                    "value4": ""
                },
                {
                    "value1": "Revenue",
                    "value2": "$89,498(m)",
                    "value3": "$90,146(m)",
                    "value4": "$83,360(m)"
                },
                {
                    "value1": "EPS",
                    "value2": "$1.46 (09/30/2023)",
                    "value3": "$1.29 (09/24/2022)",
                    "value4": "$1.23 (09/25/2021)"
                },
                {
                    "value1": "Dividends",
                    "value2": "$0.24",
                    "value3": "$0.23",
                    "value4": "$0.22"
                },
                {
                    "value1": "Totals",
                    "value2": "",
                    "value3": "",
                    "value4": ""
                },
                {
                    "value1": "Revenue",
                    "value2": "$383,285(m)",
                    "value3": "$394,328(m)",
                    "value4": "$365,817(m)"
                },
                {
                    "value1": "EPS",
                    "value2": "$6.13",
                    "value3": "$6.11",
                    "value4": "$5.61"
                },
                {
                    "value1": "Dividends",
                    "value2": "$0.95",
                    "value3": "$0.91",
                    "value4": "$0.86"
                }
            ]
        }
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/stock/revenue**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Enter a company ticker symbol. Example: `AAPL`

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v2/short-interest

requires authentication

Endpoint weight: 1

Get a company's short interest, settlement date, daily volumn, and days to cover.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/stock/short-interest'
params = {
  'ticker': 'AAPL',
  'type': 'STOCKS',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/stock/short-interest';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'type' => 'STOCKS',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/stock/short-interest"
);

const params = {
    "ticker": "AAPL",
    "type": "STOCKS",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/stock/short-interest?ticker=AAPL&type=STOCKS" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "symbol": "aapl"
  },
  "body": [
    {
      "settlementDate": "01/12/2024",
      "interest": "101,263,039",
      "avgDailyShareVolume": "56,712,342",
      "daysToCover": 1.785556
    },
    {
      "settlementDate": "12/29/2023",
      "interest": "108,220,157",
      "avgDailyShareVolume": "42,416,650",
      "daysToCover": 2.55136
    },
    {
      "settlementDate": "12/15/2023",
      "interest": "120,233,720",
      "avgDailyShareVolume": "60,940,693",
      "daysToCover": 1.972963
    },
    ...
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/stock/short-interest**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Enter a company ticker symbol. Example: `AAPL`

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETF or MUTUALFUNDS or FUTURES. Example: `STOCKS`

## GET /v2/institutional-holdings

requires authentication

Endpoint weight: 1

Get a company's institutional holdings.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/stock/institutional-holdings'
params = {
  'ticker': 'AAPL',
  'type': 'TOTAL',
  'limit': '15',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/stock/institutional-holdings';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'type' => 'TOTAL',
            'limit' => '15',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/stock/institutional-holdings"
);

const params = {
    "ticker": "AAPL",
    "type": "TOTAL",
    "limit": "15",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/stock/institutional-holdings?ticker=AAPL&type=TOTAL&limit=15" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com"
    },
    "body": {
        "ownershipSummary": {
            "SharesOutstandingPCT": {
                "label": "Institutional Ownership",
                "value": "58.67%"
            },
            "ShareoutstandingTotal": {
                "label": "Total Shares Outstanding (millions)",
                "value": "15,462"
            },
            "TotalHoldingsValue": {
                "label": "Total Value of Holdings (millions)",
                "value": "$1,685,929"
            }
        },
        "activePositions": {
            "headers": {
                "positions": "Active Positions",
                "holders": "Holders",
                "shares": "Shares"
            },
            "rows": [
                {
                    "positions": "Increased Positions",
                    "holders": "1,938",
                    "shares": "165,067,100"
                },
                {
                    "positions": "Decreased Positions",
                    "holders": "2,507",
                    "shares": "230,155,346"
                },
                {
                    "positions": "Held Positions",
                    "holders": "266",
                    "shares": "8,676,228,894"
                },
                {
                    "positions": "Total Institutional Shares",
                    "holders": "4,711",
                    "shares": "9,071,451,340"
                }
            ]
        },
        "newSoldOutPositions": {
            "headers": {
                "positions": "Active Positions",
                "holders": "Holders",
                "shares": "Shares"
            },
            "rows": [
                {
                    "positions": "New Positions",
                    "holders": "189",
                    "shares": "45,522,662"
                },
                {
                    "positions": "Sold Out Positions",
                    "holders": "78",
                    "shares": "6,228,057"
                }
            ]
        },
        "holdingsTransactions": {
            "totalRecords": "78",
            "institutionalHolders": null,
            "sharesHeld": null,
            "table": {
                "headers": {
                    "ownerName": "Owner Name",
                    "date": "Date",
                    "sharesHeld": "Shares Held",
                    "sharesChange": "Change (Shares)",
                    "sharesChangePCT": "Change (%)",
                    "marketValue": "Value (In 1,000s)"
                },
                "rows": [
                    {
                        "ownerName": "Acrisure Capital Management, Llc",
                        "date": "3/31/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-2,036",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Advisors Capital Management, Llc",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-795,635",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Algert Global Llc",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-48,139",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Alight Capital Management Lp",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-60,000",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Alpine Global Management, Llc",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-120,000",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Andra Ap-Fonden",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-78,700",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Appaloosa Lp",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-480,000",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Appleton Group, Llc",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-2,438",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Arete Wealth Advisors, Llc",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-184,215",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Asset Allocation & Management Company, Llc",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-5,250",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Blueshift Asset Management, Llc",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-5,508",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Briaud Financial Planning, Inc",
                        "date": "12/31/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-5,680",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Bridgewater Associates, Lp",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-2,076",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Brookfield Corp /On/",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-31,251",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    },
                    {
                        "ownerName": "Brown Shipley& Co Ltd",
                        "date": "9/30/2023",
                        "sharesHeld": "0",
                        "sharesChange": "-110,243",
                        "sharesChangePCT": "Sold Out",
                        "marketValue": ""
                    }
                ]
            }
        }
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/stock/institutional-holdings**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Enter a company ticker symbol. Example: `AAPL`

`**type**`  string   


Enter one of the following assetClass: TOTAL, INCREASED, NEW, DECREASED, SOLDOUT, ACTIVITY. Example: `TOTAL`

`**limit**`  integer  *optional*  


Enter a limit. Example: `15`

## GET /v2/sec-filings

requires authentication

Endpoint weight: 1

Get a company's latest filings in insider trades, annual and quarterly reports, 8-k, proxies, and registration statements.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/stock/sec-filings'
params = {
  'ticker': 'AAPL',
  'type': 'ALL',
  'limit': '15',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/stock/sec-filings';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'type' => 'ALL',
            'limit' => '15',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/stock/sec-filings"
);

const params = {
    "ticker": "AAPL",
    "type": "ALL",
    "limit": "15",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/stock/sec-filings?ticker=AAPL&type=ALL&limit=15" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com",
        "symbol": "AAPL",
        "totalRecords": 14,
        "headers": {
            "companyName": "Company Name",
            "formType": "Form Type",
            "filed": "Filed",
            "period": "Period",
            "view": "View"
        }
    },
    "body": {
        "latest": [
            {
                "label": "10-K",
                "value": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317840268&type=HTML&symbol=AAPL&cdn=438829151a8c993b52ce4aa1a1799f41&companyName=Apple+Inc.&formType=10-K&formDescription=Annual+report+pursuant+to+Section+13+or+15%28d%29&dateFiled=2023-11-03"
            },
            {
                "label": "10-Q",
                "value": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=318027498&type=HTML&symbol=AAPL&cdn=1df15f20ee9331418a331724247bceeb&companyName=Apple+Inc.&formType=10-Q&formDescription=General+form+for+quarterly+reports+under+Section+13+or+15%28d%29&dateFiled=2024-02-02"
            }
        ],
        "rows": [
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "12/01/2023",
                "period": "11/29/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317904974&type=HTML&symbol=AAPL&cdn=223480e7e41b2dfefe24d0b584ff09c0&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-12-01",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317904974&type=DOC&symbol=AAPL&cdn=223480e7e41b2dfefe24d0b584ff09c0&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-12-01",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317904974&type=PDF&symbol=AAPL&cdn=223480e7e41b2dfefe24d0b584ff09c0&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-12-01",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317904974&type=XLS&symbol=AAPL&cdn=223480e7e41b2dfefe24d0b584ff09c0&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-12-01",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "11/20/2023",
                "period": "11/16/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317880738&type=HTML&symbol=AAPL&cdn=4fd242b84a9a8919ded44f4497849cbe&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-11-20",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317880738&type=DOC&symbol=AAPL&cdn=4fd242b84a9a8919ded44f4497849cbe&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-11-20",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317880738&type=PDF&symbol=AAPL&cdn=4fd242b84a9a8919ded44f4497849cbe&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-11-20",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317880738&type=XLS&symbol=AAPL&cdn=4fd242b84a9a8919ded44f4497849cbe&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-11-20",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "11/14/2023",
                "period": "11/10/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317867434&type=HTML&symbol=AAPL&cdn=b8b8223aa4348f02d7bd75bad335e3f8&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-11-14",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317867434&type=DOC&symbol=AAPL&cdn=b8b8223aa4348f02d7bd75bad335e3f8&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-11-14",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317867434&type=PDF&symbol=AAPL&cdn=b8b8223aa4348f02d7bd75bad335e3f8&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-11-14",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317867434&type=XLS&symbol=AAPL&cdn=b8b8223aa4348f02d7bd75bad335e3f8&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-11-14",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "10/17/2023",
                "period": "10/15/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317807374&type=HTML&symbol=AAPL&cdn=7119df539b05934fc91fb40e88a48d3d&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-17",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317807374&type=DOC&symbol=AAPL&cdn=7119df539b05934fc91fb40e88a48d3d&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-17",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317807374&type=PDF&symbol=AAPL&cdn=7119df539b05934fc91fb40e88a48d3d&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-17",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317807374&type=XLS&symbol=AAPL&cdn=7119df539b05934fc91fb40e88a48d3d&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-17",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "10/10/2023",
                "period": "10/06/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317797598&type=HTML&symbol=AAPL&cdn=603564ad4bea722dd9f9aa1203ae71a1&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-10",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317797598&type=DOC&symbol=AAPL&cdn=603564ad4bea722dd9f9aa1203ae71a1&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-10",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317797598&type=PDF&symbol=AAPL&cdn=603564ad4bea722dd9f9aa1203ae71a1&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-10",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317797598&type=XLS&symbol=AAPL&cdn=603564ad4bea722dd9f9aa1203ae71a1&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-10",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "10/10/2023",
                "period": "10/06/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317797601&type=HTML&symbol=AAPL&cdn=19ec4da2f84b3f2cd887812113217c10&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-10",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317797601&type=DOC&symbol=AAPL&cdn=19ec4da2f84b3f2cd887812113217c10&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-10",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317797601&type=PDF&symbol=AAPL&cdn=19ec4da2f84b3f2cd887812113217c10&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-10",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317797601&type=XLS&symbol=AAPL&cdn=19ec4da2f84b3f2cd887812113217c10&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-10",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "10/03/2023",
                "period": "10/01/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787279&type=HTML&symbol=AAPL&cdn=254341d2f09d0123833fe5199819ddea&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787279&type=DOC&symbol=AAPL&cdn=254341d2f09d0123833fe5199819ddea&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787279&type=PDF&symbol=AAPL&cdn=254341d2f09d0123833fe5199819ddea&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787279&type=XLS&symbol=AAPL&cdn=254341d2f09d0123833fe5199819ddea&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "10/03/2023",
                "period": "10/01/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787276&type=HTML&symbol=AAPL&cdn=8815c61b91f269d9d5a47816376edc09&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787276&type=DOC&symbol=AAPL&cdn=8815c61b91f269d9d5a47816376edc09&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787276&type=PDF&symbol=AAPL&cdn=8815c61b91f269d9d5a47816376edc09&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787276&type=XLS&symbol=AAPL&cdn=8815c61b91f269d9d5a47816376edc09&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "10/03/2023",
                "period": "10/01/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787275&type=HTML&symbol=AAPL&cdn=451e2a6ada3b4c63c91f7850b0996a64&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787275&type=DOC&symbol=AAPL&cdn=451e2a6ada3b4c63c91f7850b0996a64&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787275&type=PDF&symbol=AAPL&cdn=451e2a6ada3b4c63c91f7850b0996a64&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787275&type=XLS&symbol=AAPL&cdn=451e2a6ada3b4c63c91f7850b0996a64&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "10/03/2023",
                "period": "10/01/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787278&type=HTML&symbol=AAPL&cdn=05c2388fbeb3711557b24a57770b9075&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787278&type=DOC&symbol=AAPL&cdn=05c2388fbeb3711557b24a57770b9075&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787278&type=PDF&symbol=AAPL&cdn=05c2388fbeb3711557b24a57770b9075&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787278&type=XLS&symbol=AAPL&cdn=05c2388fbeb3711557b24a57770b9075&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "10/03/2023",
                "period": "10/01/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787280&type=HTML&symbol=AAPL&cdn=2455af946ea497d2418a499ab5c129f4&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787280&type=DOC&symbol=AAPL&cdn=2455af946ea497d2418a499ab5c129f4&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787280&type=PDF&symbol=AAPL&cdn=2455af946ea497d2418a499ab5c129f4&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787280&type=XLS&symbol=AAPL&cdn=2455af946ea497d2418a499ab5c129f4&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "10/03/2023",
                "period": "10/01/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787259&type=HTML&symbol=AAPL&cdn=dcd06f6f2fe1f5706c7d139abf7c1d55&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787259&type=DOC&symbol=AAPL&cdn=dcd06f6f2fe1f5706c7d139abf7c1d55&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787259&type=PDF&symbol=AAPL&cdn=dcd06f6f2fe1f5706c7d139abf7c1d55&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317787259&type=XLS&symbol=AAPL&cdn=dcd06f6f2fe1f5706c7d139abf7c1d55&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-10-03",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "",
                "formType": "4",
                "filed": "09/19/2023",
                "period": "08/08/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317757913&type=HTML&symbol=AAPL&cdn=9c916151d6a841e84d373422d808da75&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-09-19",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317757913&type=DOC&symbol=AAPL&cdn=9c916151d6a841e84d373422d808da75&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-09-19",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317757913&type=PDF&symbol=AAPL&cdn=9c916151d6a841e84d373422d808da75&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-09-19",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317757913&type=XLS&symbol=AAPL&cdn=9c916151d6a841e84d373422d808da75&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-09-19",
                    "xBrlSubDoc": ""
                }
            },
            {
                "companyName": "Apple Inc.",
                "reportingOwner": "O'BRIEN DEIRDRE",
                "formType": "4",
                "filed": "08/08/2023",
                "period": "08/05/2023",
                "view": {
                    "htmlLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317672169&type=HTML&symbol=AAPL&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-08-08",
                    "docLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317672169&type=DOC&symbol=AAPL&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-08-08",
                    "pdfLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317672169&type=PDF&symbol=AAPL&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-08-08",
                    "xbrLink": "",
                    "ixbrlContent": "",
                    "xlsLink": "https://app.quotemedia.com/data/downloadFiling?webmasterId=90423&ref=317672169&type=XLS&symbol=AAPL&companyName=Apple+Inc.&formType=4&formDescription=Statement+of+changes+in+beneficial+ownership+of+securities&dateFiled=2023-08-08",
                    "xBrlSubDoc": ""
                }
            }
        ]
    }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/stock/sec-filings**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Enter a company ticker symbol. Example: `AAPL`

`**type**`  string   


Enter one of the following assetClass: FORM-4 or ALL. Example: `ALL`

`**limit**`  integer  *optional*  


Enter a limit. Example: `15`

## GET /v2/historical

requires authentication

Endpoint weight: 1

Get a company's historical data such as open, high, low and close for the past 10 years.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/stock/historical'
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/stock/historical';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'type' => 'STOCKS',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/stock/historical"
);

const params = {
    "ticker": "AAPL",
    "type": "STOCKS",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/stock/historical?ticker=AAPL&type=STOCKS&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "symbol": "SPY",
    "totalrecords": 21,
    "headers": {
      "date": "Date",
      "close": "Close/Last",
      "volume": "Volume",
      "open": "Open",
      "high": "High",
      "low": "Low"
    }
  },
  "body": [
    {
      "date": "02/02/2024",
      "close": "494.35",
      "volume": "99,228,190",
      "open": "489.65",
      "high": "496.05",
      "low": "489.30"
    },
    {
      "date": "02/01/2024",
      "close": "489.20",
      "volume": "91,891,640",
      "open": "484.63",
      "high": "489.23",
      "low": "483.80"
    },
    {
      "date": "01/31/2024",
      "close": "482.88",
      "volume": "126,011,100",
      "open": "488.62",
      "high": "489.0813",
      "low": "482.86"
    },
    ...
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/stock/historical**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Enter a company ticker symbol. Example: `AAPL`

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETF or MUTUALFUNDS or FUTURES. Example: `STOCKS`

`**from_date**`  string  *optional*  


Enter a from date, format: YYYY-MM-DD.

`**to_date**`  string  *optional*  


Enter a to date, format: YYYY-MM-DD.

`**limit**`  integer  *optional*  


Enter a limit. Example: `50`

## GET /v1/options

requires authentication

Endpoint weight: 1

Get the most recent Options tick for a given company.

> Example request:

```
import requests
import json

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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/options';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'expiration' => '1734652800',
            'display' => 'straddle',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/options"
);

const params = {
    "ticker": "AAPL",
    "expiration": "1734652800",
    "display": "straddle",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/options?ticker=AAPL&expiration=1734652800&display=straddle" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "symbol": "AAPL",
        "expiration": null,
        "processedTime": "2023-08-09T22:12:09.199084Z",
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com"
    },
    "body": [
        {
            "underlyingSymbol": "AAPL",
            "expirationDates": [
                1691712000, 1692316800, 1692921600, 1693526400, 1694131200,
                1694736000, 1695340800, 1697760000, 1700179200, 1702598400,
                1705622400, 1710460800, 1718928000, 1726790400, 1734652800,
                1737072000, 1750377600, 1766102400
            ],
            "strikes": [
                50, 70, 80, 85, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140,
                145, 150, 155, 160, 162.5, 165, 167.5, 170, 172.5, 175, 177.5,
                180, 182.5, 185, 187.5, 190, 192.5, 195, 197.5, 200, 202.5, 205,
                207.5, 210, 212.5, 215, 217.5, 220, 222.5, 225, 230, 235, 240,
                245, 250, 255, 260, 265
            ],
            "hasMiniOptions": false,
            "quote": {
                "language": "en-US",
                "region": "US",
                "quoteType": "EQUITY",
                "typeDisp": "Equity",
                "quoteSourceName": "Nasdaq Real Time Price",
                "triggerable": true,
                "customPriceAlertConfidence": "HIGH",
                "currency": "USD",
                "marketState": "POST",
                "regularMarketChangePercent": -0.89543974,
                "regularMarketPrice": 178.19,
                "exchange": "NMS",
                "shortName": "Apple Inc.",
                "longName": "Apple Inc.",
                "messageBoardId": "finmb_24937",
                "exchangeTimezoneName": "America/New_York",
                "exchangeTimezoneShortName": "EDT",
                "gmtOffSetMilliseconds": -14400000,
                "market": "us_market",
                "esgPopulated": false,
                "firstTradeDateMilliseconds": 345479400000,
                "sharesOutstanding": 15728700416,
                "bookValue": 3.852,
                "fiftyDayAverage": 187.3632,
                "fiftyDayAverageChange": -9.1732025,
                "fiftyDayAverageChangePercent": -0.048959468,
                "twoHundredDayAverage": 160.3686,
                "twoHundredDayAverageChange": 17.821396,
                "marketCap": 2802697109504,
                "forwardPE": 29.797659,
                "priceToBook": 46.259087,
                "sourceInterval": 15,
                "exchangeDataDelayedBy": 0,
                "averageAnalystRating": "2.0 - Buy",
                "tradeable": false,
                "cryptoTradeable": false,
                "priceHint": 2,
                "postMarketChangePercent": 0.089793846,
                "postMarketTime": 1691619122,
                "postMarketPrice": 178.35,
                "postMarketChange": 0.16000366,
                "regularMarketChange": -1.6100006,
                "regularMarketTime": 1691611201,
                "regularMarketDayHigh": 180.93,
                "regularMarketDayRange": "177.01 - 180.93",
                "regularMarketDayLow": 177.01,
                "regularMarketVolume": 56570198,
                "regularMarketPreviousClose": 179.8,
                "bid": 178.26,
                "ask": 178.25,
                "bidSize": 8,
                "askSize": 10,
                "fullExchangeName": "NasdaqGS",
                "financialCurrency": "USD",
                "regularMarketOpen": 180.87,
                "averageDailyVolume3Month": 57005840,
                "averageDailyVolume10Day": 60996280,
                "fiftyTwoWeekLowChange": 54.020004,
                "fiftyTwoWeekLowChangePercent": 0.43504876,
                "fiftyTwoWeekRange": "124.17 - 198.23",
                "fiftyTwoWeekHighChange": -20.039993,
                "fiftyTwoWeekHighChangePercent": -0.101094656,
                "fiftyTwoWeekLow": 124.17,
                "fiftyTwoWeekHigh": 198.23,
                "fiftyTwoWeekChangePercent": 6.2396646,
                "dividendDate": 1692230400,
                "earningsTimestamp": 1691096400,
                "earningsTimestampStart": 1698231540,
                "earningsTimestampEnd": 1698667200,
                "trailingAnnualDividendRate": 0.93,
                "trailingPE": 30.252972,
                "dividendRate": 0.96,
                "trailingAnnualDividendYield": 0.005172414,
                "dividendYield": 0.53,
                "epsTrailingTwelveMonths": 5.89,
                "epsForward": 5.98,
                "epsCurrentYear": 5.49,
                "priceEpsCurrentYear": 32.457195,
                "twoHundredDayAverageChangePercent": 0.11112771,
                "displayName": "Apple",
                "symbol": "AAPL"
            },
            "options": [
                {
                    "expirationDate": 1691712000,
                    "hasMiniOptions": false,
                    "calls": [
                        {
                            "contractSymbol": "AAPL230811C00050000",
                            "strike": 50,
                            "currency": "USD",
                            "lastPrice": 129.3,
                            "change": 0,
                            "percentChange": 0,
                            "volume": 2,
                            "openInterest": 4,
                            "bid": 127.5,
                            "ask": 128.8,
                            "contractSize": "REGULAR",
                            "expiration": 1691712000,
                            "lastTradeDate": 1691518707,
                            "impliedVolatility": 7.26562591796875,
                            "inTheMoney": true
                        },
                        { ... }
                    ],
                    "puts": [
                        {
                            "contractSymbol": "AAPL230811P00070000",
                            "strike": 70,
                            "currency": "USD",
                            "lastPrice": 0.01,
                            "change": 0,
                            "percentChange": 0,
                            "volume": 1,
                            "openInterest": 2,
                            "bid": 0,
                            "ask": 0.01,
                            "contractSize": "REGULAR",
                            "expiration": 1691712000,
                            "lastTradeDate": 1691435803,
                            "impliedVolatility": 3.1250021875,
                            "inTheMoney": false
                        },
                        {...}
                    ]
                }
            ]
        }
    ]
}



 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/options**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Input a company ticker symbol. Example: `AAPL`

`**expiration**`  integer  *optional*  


Select an expiration date in Unix timestamp. Example: `1734652800`

`**display**`  string  *optional*  


Select display options (list or straddle). Example: `straddle`

## GET /v1/unusual-options-activity

requires authentication

Endpoint weight: 2

Unusual Options Activity identifies options contracts that are trading at a higher volume relative to the contract's open interest. Unusual Options can provide insight on what "smart money" is doing with large volume orders, signaling new positions and potentially a big move in the underlying asset.

> Example request:

```
import requests
import json

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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/options/unusual-options-activity';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'type' => 'STOCKS',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/options/unusual-options-activity"
);

const params = {
    "type": "STOCKS",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/options/unusual-options-activity?type=STOCKS&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
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
      "baseLastPrice": "261.97",
      "baseSymbolType": "1",
      "symbolType": "Call",
      "strikePrice": "310.00",
      "expirationDate": "02/23/24",
      "daysToExpiration": "1",
      "bidPrice": "0.12",
      "midpoint": "0.13",
      "askPrice": "0.14",
      "lastPrice": "0.14",
      "volume": "2,445",
      "openInterest": "119",
      "volumeOpenInterestRatio": "20.55",
      "volatility": "151.81%",
      "delta": "0.01892",
      "tradeTime": "02/21/24",
      "symbolCode": "N/A"
    },
    {
      "symbol": "PANW|20240223|235.00P",
      "baseSymbol": "PANW",
      "baseLastPrice": "261.97",
      "baseSymbolType": "1",
      "symbolType": "Put",
      "strikePrice": "235.00",
      "expirationDate": "02/23/24",
      "daysToExpiration": "1",
      "bidPrice": "0.28",
      "midpoint": "0.29",
      "askPrice": "0.30",
      "lastPrice": "0.30",
      "volume": "3,754",
      "openInterest": "184",
      "volumeOpenInterestRatio": "20.40",
      "volatility": "123.03%",
      "delta": "-0.04259",
      "tradeTime": "02/21/24",
      "symbolCode": "N/A"
    },
    {...}
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/options/unusual-options-activity**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETFS or INDICES. Example: `STOCKS`

`**date**`  string  *optional*  


Enter a historical date: YYYY-MM-DD.

`**price_min**`  string  *optional*  


Filter results by min price of the stock per share value.

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v1/iv-rank-percentile

requires authentication

Endpoint weight: 2

Get Stocks, ETFs and Indices with the most option activity on the day, with the ATM average IV Rank and IV Percentile.

> Example request:

```
import requests
import json

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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/options/iv-rank-percentile';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'type' => 'STOCKS',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/options/iv-rank-percentile"
);

const params = {
    "type": "STOCKS",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/options/iv-rank-percentile?type=STOCKS&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "count": 20,
    "total": 500,
    "page": "3"
  },
  "body": [
    {
      "symbol": "RUN",
      "symbolName": "Sunrun Inc",
      "lastPrice": "12.78",
      "priceChange": "-2.80",
      "percentChange": "-17.97%",
      "optionsTotalVolume": "115,234",
      "optionsWeightedImpliedVolatility": "95.72%",
      "optionsImpliedVolatilityRank1y": "60.29%",
      "optionsImpliedVolatilityPercentile1y": "81%",
      "optionsWeightedImpliedVolatilityHigh1y": "118.06%",
      "tradeTime": "02/22/24",
      "optionsWeightedImpliedVolatilityChange": "-9.87%",
      "symbolCode": "STK",
      "symbolType": 1,
      "hasOptions": "Yes"
    },
    {
      "symbol": "BA",
      "symbolName": "Boeing Company",
      "lastPrice": "201.50",
      "priceChange": "-0.07",
      "percentChange": "-0.03%",
      "optionsTotalVolume": "113,919",
      "optionsWeightedImpliedVolatility": "30.31%",
      "optionsImpliedVolatilityRank1y": "43.58%",
      "optionsImpliedVolatilityPercentile1y": "54%",
      "optionsWeightedImpliedVolatilityHigh1y": "40.76%",
      "tradeTime": "02/22/24",
      "optionsWeightedImpliedVolatilityChange": "-0.18%",
      "symbolCode": "STK",
      "symbolType": 1,
      "hasOptions": "Yes"
    },
    {...}
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/options/iv-rank-percentile**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETFS or INDICES. Example: `STOCKS`

`**price_min**`  string  *optional*  


Filter results by min price of the stock per share value.

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v1/iv-change

requires authentication

Endpoint weight: 2

Get Stocks, ETFs and Indices with the most significant changes in implied volatility per options contract.

> Example request:

```
import requests
import json

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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/options/iv-change';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'type' => 'STOCKS',
            'direction' => 'UP',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/options/iv-change"
);

const params = {
    "type": "STOCKS",
    "direction": "UP",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/options/iv-change?type=STOCKS&direction=UP&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
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
          "baseSymbol": "IONQ",
          "baseLastPrice": "9.71",
          "baseSymbolType": 1,
          "symbolType": "Call",
          "strikePrice": "8.00",
          "expirationDate": "10/18/24",
          "daysToExpiration": "20",
          "bidPrice": "1.23",
          "askPrice": "2.12",
          "lastPrice": "1.72",
          "volume": "779",
          "openInterest": "302",
          "delta": "0.79229",
          "volatilityPercentChange": "+94.44%",
          "volatility": "125.74%",
          "tradeTime": "09/27/24"
      },
      {
          "symbol": "BTI|20241220|33.00C",
          "baseSymbol": "BTI",
          "baseLastPrice": "36.84",
          "baseSymbolType": 1,
          "symbolType": "Call",
          "strikePrice": "33.00",
          "expirationDate": "12/20/24",
          "daysToExpiration": "83",
          "bidPrice": "2.50",
          "askPrice": "6.20",
          "lastPrice": "4.65",
          "volume": "570",
          "openInterest": "3,387",
          "delta": "0.75360",
          "volatilityPercentChange": "+79.42%",
          "volatility": "36.71%",
          "tradeTime": "09/27/24"
      },
      { ... }
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/options/iv-change**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETFS or INDICES. Example: `STOCKS`

`**direction**`  string  *optional*  


Change direction: UP or DOWN. Example: `UP`

`**price_min**`  string  *optional*  


Filter results by min price of the stock per share value.

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v1/most-active

requires authentication

Endpoint weight: 2

Get Stocks, ETFs, and Indices with the most option activity on the day, with IV Rank and Put/Call ratio.

> Example request:

```
import requests
import json

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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/options/most-active';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'type' => 'STOCKS',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/options/most-active"
);

const params = {
    "type": "STOCKS",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/options/most-active?type=STOCKS&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
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
        "symbolType": 1,
        "symbolName": "Nvidia Corp",
        "hasOptions": "Yes",
        "lastPrice": "785.38",
        "priceChange": "+110.66",
        "percentChange": "+16.40%",
        "optionsImpliedVolatilityRank1y": "38.66%",
        "optionsTotalVolume": "2,493,798",
        "optionsPutVolumePercent": "38.9%",
        "optionsCallVolumePercent": "61.1%",
        "optionsPutCallVolumeRatio": "0.64",
        "tradeTime": "02/22/24",
        "symbolCode": "STK"
      },
      {
        "symbol": "TSLA",
        "symbolType": 1,
        "symbolName": "Tesla Inc",
        "hasOptions": "Yes",
        "lastPrice": "197.41",
        "priceChange": "+2.64",
        "percentChange": "+1.36%",
        "optionsImpliedVolatilityRank1y": "29.04%",
        "optionsTotalVolume": "1,960,746",
        "optionsPutVolumePercent": "36.3%",
        "optionsCallVolumePercent": "63.7%",
        "optionsPutCallVolumeRatio": "0.57",
        "tradeTime": "02/22/24",
        "symbolCode": "STK"
      },
      {...}
    ]
  }


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/options/most-active**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETFS or INDICES. Example: `STOCKS`

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v1/highest-iv

requires authentication

Endpoint weight: 2

Get implied volatility options' strikes which may be covered call, cash secured put, or spread candidates to take advantage of inflated option premiums.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/options/highest-iv'
params = {
  'sort': 'HIGHEST',
  'page': '1',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/options/highest-iv';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'sort' => 'HIGHEST',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/options/highest-iv"
);

const params = {
    "sort": "HIGHEST",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/options/highest-iv?sort=HIGHEST&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "count": 20,
    "total": 1018,
    "page": "1"
  },
  "body": [
    {
      "symbol": "WULF|20250117|1.50C",
      "baseSymbol": "WULF",
      "baseLastPrice": "2.14",
      "baseSymbolType": 1,
      "symbolType": "Call",
      "strikePrice": "1.50",
      "expirationDate": "01/17/25",
      "daysToExpiration": "329",
      "bidPrice": "1.35",
      "askPrice": "2.05",
      "lastPrice": "1.50",
      "volume": "772",
      "openInterest": "2,594",
      "volumeOpenInterestRatio": "0.30",
      "delta": "0.77343",
      "volatility": "420.81%",
      "tradeTime": "02/22/24"
    },
    {
      "symbol": "IOVA|20240315|5.00C",
      "baseSymbol": "IOVA",
      "baseLastPrice": "15.94",
      "baseSymbolType": 1,
      "symbolType": "Call",
      "strikePrice": "5.00",
      "expirationDate": "03/15/24",
      "daysToExpiration": "21",
      "bidPrice": "10.70",
      "askPrice": "11.20",
      "lastPrice": "10.94",
      "volume": "588",
      "openInterest": "7,372",
      "volumeOpenInterestRatio": "0.08",
      "delta": "0.96607",
      "volatility": "342.47%",
      "tradeTime": "02/22/24"
    },
    {...}
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/options/highest-iv**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**sort**`  string   


Sort result using HIGHEST or LOWEST. Example: `HIGHEST`

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v1/options-flow

requires authentication

Endpoint weight: 2

Get significant option transactions across various US option exchanges. Analyzing the option strikes that large institutional traders are buying or selling can offer valuable insights into both directional sentiment and volatility for the corresponding underlying security.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/options/options-flow'
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/options/options-flow';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'type' => 'STOCKS',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/options/options-flow"
);

const params = {
    "type": "STOCKS",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/options/options-flow?type=STOCKS&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "count": 20,
    "total": 11984,
    "page": "1"
  },
  "body": [
    {
      "symbol": "AMD|20240621|150.00C",
      "baseSymbol": "AMD",
      "lastPrice": "183.22",
      "symbolType": "Call",
      "strikePrice": "150.00",
      "expiration": "06/21/24",
      "dte": "120",
      "bidXSize": "41.25 x 237",
      "askXSize": "41.50 x 143",
      "tradePrice": "41.50",
      "tradeSize": "10,000",
      "side": "ask",
      "premium": "$41,500,000",
      "volume": "10,048",
      "openInterest": "9,011",
      "volatility": "48.50%",
      "delta": "0.82194",
      "tradeCondition": "SLCN",
      "label": "BuyToOpen",
      "tradeTime": "02/22/24 12:23:58",
      "expirationType": "M",
      "askPrice": "41.50",
      "bidPrice": "41.25",
      "baseSymbolType": 1
    },
    {
      "symbol": "PANW|20240223|335.00P",
      "baseSymbol": "PANW",
      "lastPrice": "269.24",
      "symbolType": "Put",
      "strikePrice": "335.00",
      "expiration": "02/23/24",
      "dte": "1",
      "bidXSize": "63.95 x 47",
      "askXSize": "66.80 x 31",
      "tradePrice": "65.50",
      "tradeSize": "3,010",
      "side": "mid",
      "premium": "$19,715,500",
      "volume": "4,233",
      "openInterest": "756",
      "volatility": "253.36%",
      "delta": "-0.94328",
      "tradeCondition": "SLFT",
      "label": "ToOpen",
      "tradeTime": "02/22/24 14:51:42",
      "expirationType": "W",
      "askPrice": "66.80",
      "bidPrice": "63.95",
      "baseSymbolType": 1
    },
    {...}
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/options/options-flow**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETFS or INDICES. Example: `STOCKS`

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v2/options

requires authentication

Endpoint weight: 1

Get a company's option-chain data.

> Example request:

```
import requests
import json

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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/options';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'type' => 'STOCKS',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/options"
);

const params = {
    "ticker": "AAPL",
    "type": "STOCKS",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/options?ticker=AAPL&type=STOCKS&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
      "version": "v1.0",
      "status": 200,
      "copywrite": "https://mboum.com",
      "totalrecords": 48,
      "lastTrade": "LAST TRADE: $185.85 (AS OF FEB 2, 2024)",
      "headers": {
        "expiryDate": "Exp. Date",
        "c_Last": "Last",
        "c_Change": "Change",
        "c_Bid": "Bid",
        "c_Ask": "Ask",
        "c_Volume": "Volume",
        "c_Openinterest": "Open Int.",
        "strike": "Strike",
        "p_Last": "Last",
        "p_Change": "Change",
        "p_Bid": "Bid",
        "p_Ask": "Ask",
        "p_Volume": "Volume",
        "p_Openinterest": "Open Int."
      },
      "from_date": [
        {
          "label": "February 2024",
          "value": "2024-02-09|2024-02-23"
        },
        {
          "label": "March 2024",
          "value": "2024-03-01|2024-03-22"
        },
        {
          "label": "April 2024",
          "value": "2024-04-19|2024-04-19"
        },
        {
          "label": "May 2024",
          "value": "2024-05-17|2024-05-17"
        },
        {
          "label": "June 2024",
          "value": "2024-06-21|2024-06-21"
        },
        {
          "label": "July 2024",
          "value": "2024-07-19|2024-07-19"
        },
        {
          "label": "August 2024",
          "value": "2024-08-16|2024-08-16"
        },
        {
          "label": "September 2024",
          "value": "2024-09-20|2024-09-20"
        },
        {
          "label": "December 2024",
          "value": "2024-12-20|2024-12-20"
        },
        {
          "label": "January 2025",
          "value": "2025-01-17|2025-01-17"
        },
        {
          "label": "March 2025",
          "value": "2025-03-21|2025-03-21"
        },
        {
          "label": "June 2025",
          "value": "2025-06-20|2025-06-20"
        },
        {
          "label": "September 2025",
          "value": "2025-09-19|2025-09-19"
        },
        {
          "label": "December 2025",
          "value": "2025-12-19|2025-12-19"
        },
        {
          "label": "January 2026",
          "value": "2026-01-16|2026-01-16"
        },
        {
          "label": "June 2026",
          "value": "2026-06-18|2026-06-18"
        },
        {
          "label": "All",
          "value": "all"
        }
      ]
    },
    "body": [
      {
        "expirygroup": "February 9, 2024",
        "expiryDate": null,
        "c_Last": null,
        "c_Change": null,
        "c_Bid": null,
        "c_Ask": null,
        "c_Volume": null,
        "c_Openinterest": null,
        "c_colour": false,
        "strike": null,
        "p_Last": null,
        "p_Change": null,
        "p_Bid": null,
        "p_Ask": null,
        "p_Volume": null,
        "p_Openinterest": null,
        "p_colour": false
      },
      {
        "expirygroup": "",
        "expiryDate": "Feb 9",
        "c_Last": "18.80",
        "c_Change": "-0.40",
        "c_Bid": "18.20",
        "c_Ask": "18.95",
        "c_Volume": "5",
        "c_Openinterest": "25",
        "c_colour": true,
        "strike": "167.50",
        "p_Last": "0.05",
        "p_Change": "-0.20",
        "p_Bid": "0.04",
        "p_Ask": "0.06",
        "p_Volume": "10870",
        "p_Openinterest": "11770",
        "p_colour": false
      },
      {
        "expirygroup": "",
        "expiryDate": "Feb 9",
        "c_Last": "16.30",
        "c_Change": "-2.55",
        "c_Bid": "15.65",
        "c_Ask": "16.40",
        "c_Volume": "600",
        "c_Openinterest": "315",
        "c_colour": true,
        "strike": "170.00",
        "p_Last": "0.05",
        "p_Change": "-0.28",
        "p_Bid": "0.05",
        "p_Ask": "0.07",
        "p_Volume": "9310",
        "p_Openinterest": "10219",
        "p_colour": false
      },
      ...
    ]
  }


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/options**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Enter a company ticker symbol. Example: `AAPL`

`**type**`  string   


Enter one of the following assetClass: STOCKS or ETF or MUTUALFUNDS or FUTURES. Example: `STOCKS`

`**from_date**`  string  *optional*  


Enter a from date, format: YYYY-MM-DD.

`**to_date**`  string  *optional*  


Enter a to date, format: YYYY-MM-DD.

`**limit**`  integer  *optional*  


Enter a limit. Example: `50`

## GET /v1/earnings

requires authentication

Endpoint weight: 1

Get past, present, and upcoming company earnings data. We have newer version of this endpoint here: [/v2/earnings](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-calendar-earnings).

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/calendar/earnings'
params = {
  'date': '2023-11-30',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/calendar/earnings';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'date' => '2023-11-30',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/calendar/earnings"
);

const params = {
    "date": "2023-11-30",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/calendar/earnings?date=2023-11-30" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
      "version": "v1.0",
      "status": 200,
      "copywrite": "https://mboum.com",
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
        "marketCap": "$120,555,640,740",
        "fiscalQuarterEnding": "Oct/2023",
        "epsForecast": "$1.90",
        "numberOfEstimates": "3"
      },
      {
        "lastYearReportDate": "12/01/2022",
        "lastYearEPS": "$1.64",
        "time": "time-pre-market",
        "symbol": "TD",
        "name": "Toronto Dominion Bank (The)",
        "marketCap": "$111,276,475,000",
        "fiscalQuarterEnding": "Oct/2023",
        "epsForecast": "$1.37",
        "numberOfEstimates": "4"
      },
      {
        "lastYearReportDate": "11/21/2022",
        "lastYearEPS": "$2.01",
        "time": "time-after-hours",
        "symbol": "DELL",
        "name": "Dell Technologies Inc.",
        "marketCap": "$53,555,274,381",
        "fiscalQuarterEnding": "Oct/2023",
        "epsForecast": "$1.23",
        "numberOfEstimates": "5"
      },
      {
        "lastYearReportDate": "12/01/2022",
        "lastYearEPS": "$0.41",
        "time": "time-after-hours",
        "symbol": "MRVL",
        "name": "Marvell Technology, Inc.",
        "marketCap": "$47,954,424,000",
        "fiscalQuarterEnding": "Oct/2023",
        "epsForecast": "$0.24",
        "numberOfEstimates": "13"
      },
      {
        "lastYearReportDate": "12/01/2022",
        "lastYearEPS": "$1.08",
        "time": "time-pre-market",
        "symbol": "CM",
        "name": "Canadian Imperial Bank of Commerce",
        "marketCap": "$35,676,950,230",
        "fiscalQuarterEnding": "Oct/2023",
        "epsForecast": "$1.13",
        "numberOfEstimates": "4"
      },
      { ... }
    ]
  }


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/calendar/earnings**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**date**`  string  *optional*  


Enter a calendar date. Example: `2023-11-30`

## GET /v1/dividends

requires authentication

Endpoint weight: 1

Get past, present, and upcoming dividends data. We have newer version of this endpoint here: [/v2/dividends](https://docs.mboum.com/#stocks-options-small-stylecolor-f8f2f2background-fa256fpadding-1px-4pxborder-radius-3pxhotsmall-GETapi-v2-markets-calendar-dividends)

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/calendar/dividends'
params = {
  'date': '2023-11-30',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/calendar/dividends';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'date' => '2023-11-30',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/calendar/dividends"
);

const params = {
    "date": "2023-11-30",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/calendar/dividends?date=2023-11-30" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
      "version": "v1.0",
      "status": 200,
      "copywrite": "https://mboum.com",
      "date": "2023-11-30",
      "processedTime": "2023-12-01T00:53:49.609846Z"
    },
    "body": [
      {
        "companyName": "ACNB Corporation Common Stock",
        "symbol": "ACNB",
        "dividend_Ex_Date": "11/30/2023",
        "payment_Date": "12/15/2023",
        "record_Date": "12/01/2023",
        "dividend_Rate": 0.3,
        "indicated_Annual_Dividend": 1.12,
        "announcement_Date": "10/17/2023"
      },
      { ... }
    ]
  }


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/calendar/dividends**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**date**`  string  *optional*  


Enter a calendar date. Example: `2023-11-30`

## GET /v1/economic_events

requires authentication

Endpoint weight: 1

Get global economic events data.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/calendar/economic_events'
params = {
  'date': '2023-11-30',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/calendar/economic_events';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'date' => '2023-11-30',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/calendar/economic_events"
);

const params = {
    "date": "2023-11-30",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/calendar/economic_events?date=2023-11-30" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "date": "2023-11-30",
    "processedTime": "2023-12-01T01:03:25.016842Z"
  },
  "body": [
    {
      "gmt": "24H",
      "country": "Japan",
      "eventName": "Construction Orders",
      "actual": "4.2%",
      "consensus": "-",
      "previous": "-3.0%",
      "description": "Construction Orders number checks with 50 representative construction companies in Japan as subjects, the survey uses mail questionnaires to collect the information. The survey data are used to tabulate: amount of orders received (separately for investors and construction type); completed work amount in a month; amount of unfinished construction at the end of the month; and remaining orders received in terms of the number of months. A higher than expected number should be taken as positive to the JPY, while a lower than expected number as negative."
    },
    {
      "gmt": "24H",
      "country": "Japan",
      "eventName": "Household Confidence",
      "actual": "36.1",
      "consensus": "35.6",
      "previous": "35.7",
      "description": "The Japanese Household Confidence indicator is a measure of the mood of consumers. &lt;br/&gt;The index is based on data collected from a survey of around 5000 households.&lt;br/&gt;\r\nThe consumer confidence indicator is closely linked to consumer spending and correlated with personal income, purchasing power, employment and business conditions.&lt;BR/&gt;&lt;BR/&gt;A higher than expected reading should be taken as positive/bullish for the JPY, while a lower than expected reading should be taken as negative/bearish for the JPY."
    },
    {
      "gmt": "24H",
      "country": "Japan",
      "eventName": "Housing Starts",
      "actual": "-6.3%",
      "consensus": "-6.8%",
      "previous": "-6.8%",
      "description": "Housing starts measures the change in the annualized number of new residential buildings that began construction during the reported month. It is a leading indicator of strength in the housing sector.\r\n&lt;BR/&gt;&lt;BR/&gt;A higher than expected reading should be taken as positive/bullish for the JPY, while a lower than expected reading should be taken as negative/bearish for the JPY."
    },
    { ... }
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/calendar/economic_events**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**date**`  string  *optional*  


Enter a calendar date. Example: `2023-11-30`

## GET /v1/ipo

requires authentication

Endpoint weight: 1

Get the latest and upcoming IPO data. These companies are going public.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/calendar/ipo'
params = {
  'date': '2023-11',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/calendar/ipo';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'date' => '2023-11',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/calendar/ipo"
);

const params = {
    "date": "2023-11",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/calendar/ipo?date=2023-11" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "date": "2023-11",
    "processedTime": "2023-12-01T01:12:14.365196Z"
  },
  "body": [
    {
      "dealID": "1273030-107900",
      "proposedTickerSymbol": "CLBRU",
      "companyName": "COLOMBIER ACQUISITION CORP. II",
      "proposedExchange": "NYSE",
      "proposedSharePrice": "10.00",
      "sharesOffered": "15,000,000",
      "pricedDate": "11/21/2023",
      "dollarValueOfSharesOffered": "$150,000,000",
      "dealStatus": "Priced"
    },
    {
      "dealID": "1179767-107817",
      "proposedTickerSymbol": "ELAB",
      "companyName": "Elevai Labs Inc.",
      "proposedExchange": "NASDAQ Capital",
      "proposedSharePrice": "4.00",
      "sharesOffered": "1,500,000",
      "pricedDate": "11/21/2023",
      "dollarValueOfSharesOffered": "$6,000,000",
      "dealStatus": "Priced"
    },
    {
      "dealID": "1266574-107274",
      "proposedTickerSymbol": "RR",
      "companyName": "RICHTECH ROBOTICS INC.",
      "proposedExchange": "NASDAQ Capital",
      "proposedSharePrice": "5.00",
      "sharesOffered": "2,100,000",
      "pricedDate": "11/17/2023",
      "dollarValueOfSharesOffered": "$10,500,000",
      "dealStatus": "Priced"
    },
    { ... }
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/calendar/ipo**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**date**`  string  *optional*  


Enter a calendar date. Example: `2023-11`

## GET /v1/public_offerings

requires authentication

Endpoint weight: 1

Get the past, current and upcoming secondary public offerings (SPO) data.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/calendar/public_offerings'
params = {
  'date': '2023-11',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/calendar/public_offerings';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'date' => '2023-11',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/calendar/public_offerings"
);

const params = {
    "date": "2023-11",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/calendar/public_offerings?date=2023-11" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
    "version": "v1.0",
    "status": 200,
    "copywrite": "https://mboum.com",
    "date": "2023-11",
    "processedTime": "2023-12-01T01:28:23.124844Z"
  },
  "body": {
    "priced": [
      {
        "dealID": "1003944-107155",
        "proposedTickerSymbol": "SNES",
        "companyName": "SenesTech, Inc.",
        "proposedExchange": "NASDAQ Capital",
        "proposedSharePrice": "1.30",
        "sharesOffered": "450,306",
        "pricedDate": "11/29/2023",
        "dollarValueOfSharesOffered": "$585,398",
        "dealStatus": "Priced"
      },
      {
        "dealID": "1178963-108161",
        "proposedTickerSymbol": "THAR",
        "companyName": "Tharimmune, Inc.",
        "proposedExchange": "NASDAQ Capital",
        "proposedSharePrice": "1.00",
        "sharesOffered": "1,825,000",
        "pricedDate": "11/29/2023",
        "dollarValueOfSharesOffered": "$1,825,000",
        "dealStatus": "Priced"
      },
      { ... },
    ],
    "upcoming": [],
    "filed": [
      {
        "dealID": "1153880-108422",
        "proposedTickerSymbol": "BWMN",
        "companyName": "Bowman Consulting Group Ltd.",
        "filedDate": "11/29/2023",
        "dollarValueOfSharesOffered": "$100,000,000"
      },
      {
        "dealID": "935042-108420",
        "proposedTickerSymbol": "ISTR",
        "companyName": "Investar Holding Corp",
        "filedDate": "11/29/2023",
        "dollarValueOfSharesOffered": "$150,000,000"
      },
      { ... },
    ],
    "withdrawn": [
      {
        "dealID": "1242194-107928",
        "proposedTickerSymbol": "SGD",
        "companyName": "Safe & Green Development Corp",
        "proposedExchange": null,
        "sharesOffered": "6,299,212",
        "filedDate": "10/12/2023",
        "dollarValueOfSharesOffered": "$8,000,000",
        "withdrawDate": "11/16/2023"
      },
      { ... }
    ]
  }
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/calendar/public_offerings**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**date**`  string  *optional*  


Enter a calendar date. Example: `2023-11`

## GET /v2/earnings

requires authentication

Endpoint weight: 1

Get past, present, and upcoming company earnings data.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/calendar/earnings'
params = {
  'days': '7',
  'page': '1',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/calendar/earnings';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'days' => '7',
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/calendar/earnings"
);

const params = {
    "days": "7",
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/calendar/earnings?days=7&page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
    "meta": {
        "version": "v1.0",
        "status": 200,
        "copywrite": "https://mboum.com",
        "count": 8,
        "total": 8,
        "page": "1"
    },
    "body": [
        {
            "symbol": "AZO",
            "symbolName": "Autozone",
            "nextEarningsDate": "09/24/24",
            "lastPrice": "3,042.74",
            "priceChange": "+22.08",
            "percentChange": "+0.73%",
            "highPrice": "3,046.28",
            "lowPrice": "3,013.05",
            "volume": "100,430",
            "tradeTime": "15:43 ET",
            "timeCode": "Before Open",
            "estimatedEarnings": "$53.59",
            "lastReportedEarnings": "N/A",
            "lastEarningsSurpriseAmount": "N/A",
            "lastEarningsSurprisePercent": "N/A",
            "symbolCode": "STK",
            "symbolType": 1,
            "hasOptions": "Yes"
        },
        {
            "symbol": "THO",
            "symbolName": "Thor Industries",
            "nextEarningsDate": "09/24/24",
            "lastPrice": "103.19",
            "priceChange": "-0.32",
            "percentChange": "-0.31%",
            "highPrice": "104.85",
            "lowPrice": "102.05",
            "volume": "459,102",
            "tradeTime": "15:42 ET",
            "timeCode": "Before Open",
            "estimatedEarnings": "$1.35",
            "lastReportedEarnings": "N/A",
            "lastEarningsSurpriseAmount": "N/A",
            "lastEarningsSurprisePercent": "N/A",
            "symbolCode": "STK",
            "symbolType": 1,
            "hasOptions": "Yes"
        },
        { ... }
    ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/calendar/earnings**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**days**`  integer  *optional*  


Filter upcoming earning within days (1 to 30 days) OR use the start_date and end_date parameters below. Example: `7`

`**start_date**`  string  *optional*  


Get companies reporting earnings on the specified start date: YYYY-MM-DD.

`**end_date**`  string  *optional*  


Get companies reporting earnings on the specified end date: YYYY-MM-DD.

`**price_min**`  string  *optional*  


Filter results by min price of the stock per share value.

`**optionable**`  string  *optional*  


Return only stocks with optionable contracts available: true or false.

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v2/dividends

requires authentication

Endpoint weight: 1

Get past, present, and upcoming dividends data.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v2/markets/calendar/dividends'
params = {
  'page': '1',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v2/markets/calendar/dividends';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'page' => '1',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v2/markets/calendar/dividends"
);

const params = {
    "page": "1",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v2/markets/calendar/dividends?page=1" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```
{
  "meta": {
      "version": "v1.0",
      "status": 200,
      "copywrite": "https://mboum.com",
      "count": 56,
      "total": 56,
      "page": "1"
  },
  "body": [
      {
          "symbol": "ALCO",
          "symbolName": "Alico Inc",
          "lastPrice": "27.99",
          "priceChange": "-0.01",
          "amount": "$0.050",
          "yield": "0.78%",
          "exDivDate": "09/27/24",
          "payableDate": "10/11/24",
          "symbolType": 1
      },
      {
          "symbol": "CIB",
          "symbolName": "Bancolombia S.A. ADR",
          "lastPrice": "31.97",
          "priceChange": "-1.05",
          "amount": "$0.846",
          "yield": "9.90%",
          "exDivDate": "09/27/24",
          "payableDate": "10/11/24",
          "symbolType": 1
      },
      { ... }
  ]
}


 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v2/markets/calendar/dividends**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**date**`  string  *optional*  


Enter a calendar date.

`**page**`  integer  *optional*  


Enter a page number. Example: `1`

## GET /v1/indicators/sma

requires authentication

This technical indicator returns the simple moving average (SMA).

Endpoint weight: 2

> Example request:

```
import requests
import json

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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/indicators/sma';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'interval' => '5m',
            'series_type' => 'close',
            'time_period' => '50',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/indicators/sma"
);

const params = {
    "ticker": "AAPL",
    "interval": "5m",
    "series_type": "close",
    "time_period": "50",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/indicators/sma?ticker=AAPL&interval=5m&series_type=close&time_period=50&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```

 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/indicators/sma**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker (one per request). Example: AAPL

- **Equity**: TSLA
- **Cryptocurrencies**: BTC-USD or ETH-USD
Example: `AAPL`

`**interval**`  string   


Time interval between two consecutive data points in the time series. The following values are supported:

- **1m**: 1 min candles. Range: 1 Day
- **5m**: 5 mins candles. Range: 1 Month
- **15m**: 15 mins candles. Range: 1 Month
- **30m**: 30 mins candles. Range: 1 Month
- **1d**: 1 day candles. Range: 5 Years
- **1wk**: 1 week candles. Range: 5 Years
- **1mo**: 1 month candles. Range: 10 Years
- **3mo**: 3 months' candles. Range: 10 Years. Example: `5m`

`**series_type**`  string   


Enter the series type. The following values are supported:

- **open**: candle's open
- **close**: candle's close
- **high**: candle's high
- **low**: candle's low Example: `close`

`**time_period**`  string   


Enter the series type. Number of data points used to calculate each moving average value. Positive integers are accepted. Example: `50`

`**limit**`  string  *optional*  


Limit the number of results returned, default is 50. Example: `50`

## GET /v1/indicators/rsi

requires authentication

Endpoint weight: 2

This technical indicator returns the relative strength index (RSI).

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/indicators/rsi'
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/indicators/rsi';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'interval' => '5m',
            'series_type' => 'close',
            'time_period' => '50',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/indicators/rsi"
);

const params = {
    "ticker": "AAPL",
    "interval": "5m",
    "series_type": "close",
    "time_period": "50",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/indicators/rsi?ticker=AAPL&interval=5m&series_type=close&time_period=50&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```

 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/indicators/rsi**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker (one per request). Example: AAPL

- **Equity**: AAPL
- **Cryptocurrencies**: BTC-USD or ETH-USD
Example: `AAPL`

`**interval**`  string   


Time interval between two consecutive data points in the time series. The following values are supported:

- **1m**: 1 min candles. Range: 1 Day
- **5m**: 5 mins candles. Range: 1 Month
- **15m**: 15 mins candles. Range: 1 Month
- **30m**: 30 mins candles. Range: 1 Month
- **1d**: 1 day candles. Range: 5 Years
- **1wk**: 1 week candles. Range: 5 Years
- **1mo**: 1 month candles. Range: 10 Years
- **3mo**: 3 months' candles. Range: 10 Years. Example: `5m`

`**series_type**`  string   


Enter the series type. The following values are supported:

- **open**: candle's open
- **close**: candle's close
- **high**: candle's high
- **low**: candle's low Example: `close`

`**time_period**`  string   


Enter the series type. Number of data points used to calculate each moving average value. Positive integers are accepted. Example: `50`

`**limit**`  string  *optional*  


Limit the number of results returned, default is 50. Example: `50`

## GET /v1/indicators/macd

requires authentication

Endpoint weight: 2

This technical indicator returns the moving average convergence/divergence (MACD).

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/indicators/macd'
params = {
  'ticker': 'AAPL',
  'interval': '5m',
  'series_type': 'close',
  'fast_period': '12',
  'slow_period': '26',
  'signal_period': '9',
  'limit': '50',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/indicators/macd';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'interval' => '5m',
            'series_type' => 'close',
            'fast_period' => '12',
            'slow_period' => '26',
            'signal_period' => '9',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/indicators/macd"
);

const params = {
    "ticker": "AAPL",
    "interval": "5m",
    "series_type": "close",
    "fast_period": "12",
    "slow_period": "26",
    "signal_period": "9",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/indicators/macd?ticker=AAPL&interval=5m&series_type=close&fast_period=12&slow_period=26&signal_period=9&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```

 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/indicators/macd**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker (one per request). Example: AAPL

- **Equity**: AAPL
- **Cryptocurrencies**: BTC-USD or ETH-USD
Example: `AAPL`

`**interval**`  string   


Time interval between two consecutive data points in the time series. The following values are supported:

- **1m**: 1 min candles. Range: 1 Day
- **5m**: 5 mins candles. Range: 1 Month
- **15m**: 15 mins candles. Range: 1 Month
- **30m**: 30 mins candles. Range: 1 Month
- **1d**: 1 day candles. Range: 5 Years
- **1wk**: 1 week candles. Range: 5 Years
- **1mo**: 1 month candles. Range: 10 Years
- **3mo**: 3 months' candles. Range: 10 Years. Example: `5m`

`**series_type**`  string   


Enter the series type. The following values are supported:

- **open**: candle's open
- **close**: candle's close
- **high**: candle's high
- **low**: candle's low Example: `close`

`**fast_period**`  string  *optional*  


Enter the fast period. Positive integers are accepted. Default: 12 Example: `12`

`**slow_period**`  string  *optional*  


Enter the slow period. Positive integers are accepted. Default: 26 Example: `26`

`**signal_period**`  string  *optional*  


Enter the signal period. Positive integers are accepted. Default: 9 Example: `9`

`**limit**`  string  *optional*  


Limit the number of results returned, default is 50. Example: `50`

## GET /v1/indicators/cci

requires authentication

Endpoint weight: 2

This technical indicator returns the commodity channel index (CCI).

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/indicators/cci'
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/indicators/cci';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'interval' => '5m',
            'series_type' => 'close',
            'time_period' => '50',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/indicators/cci"
);

const params = {
    "ticker": "AAPL",
    "interval": "5m",
    "series_type": "close",
    "time_period": "50",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/indicators/cci?ticker=AAPL&interval=5m&series_type=close&time_period=50&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```

 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/indicators/cci**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker (one per request). Example: AAPL

- **Equity**: AAPL
- **Cryptocurrencies**: BTC-USD or ETH-USD
Example: `AAPL`

`**interval**`  string   


Time interval between two consecutive data points in the time series. The following values are supported:

- **1m**: 1 min candles. Range: 1 Day
- **5m**: 5 mins candles. Range: 1 Month
- **15m**: 15 mins candles. Range: 1 Month
- **30m**: 30 mins candles. Range: 1 Month
- **1d**: 1 day candles. Range: 5 Years
- **1wk**: 1 week candles. Range: 5 Years
- **1mo**: 1 month candles. Range: 10 Years
- **3mo**: 3 months' candles. Range: 10 Years. Example: `5m`

`**series_type**`  string   


Enter the series type. The following values are supported:

- **open**: candle's open
- **close**: candle's close
- **high**: candle's high
- **low**: candle's low Example: `close`

`**time_period**`  string  *optional*  


Enter the series type. Number of data points used to calculate each moving average value. Positive integers are accepted. Example: `50`

`**limit**`  string  *optional*  


Limit the number of results returned, default is 50. Example: `50`

## GET /v1/indicators/adx

requires authentication

Endpoint weight: 2

This technical indicator returns the average directional movement index (ADX).

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/indicators/adx'
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/indicators/adx';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'interval' => '5m',
            'series_type' => 'close',
            'time_period' => '50',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/indicators/adx"
);

const params = {
    "ticker": "AAPL",
    "interval": "5m",
    "series_type": "close",
    "time_period": "50",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/indicators/adx?ticker=AAPL&interval=5m&series_type=close&time_period=50&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```

 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/indicators/adx**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker (one per request). Example: AAPL

- **Equity**: AAPL
- **Cryptocurrencies**: BTC-USD or ETH-USD
Example: `AAPL`

`**interval**`  string   


Time interval between two consecutive data points in the time series. The following values are supported:

- **1m**: 1 min candles. Range: 1 Day
- **5m**: 5 mins candles. Range: 1 Month
- **15m**: 15 mins candles. Range: 1 Month
- **30m**: 30 mins candles. Range: 1 Month
- **1d**: 1 day candles. Range: 5 Years
- **1wk**: 1 week candles. Range: 5 Years
- **1mo**: 1 month candles. Range: 10 Years
- **3mo**: 3 months' candles. Range: 10 Years. Example: `5m`

`**series_type**`  string   


Enter the series type. The following values are supported:

- **open**: candle's open
- **close**: candle's close
- **high**: candle's high
- **low**: candle's low Example: `close`

`**time_period**`  string   


Enter the series type. Number of data points used to calculate each moving average value. Positive integers are accepted. Example: `50`

`**limit**`  string  *optional*  


Limit the number of results returned, default is 50. Example: `50`

## GET /v1/indicators/ema

requires authentication

Endpoint weight: 2

This technical indicator returns the average directional movement index (ADX).

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/indicators/ema'
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

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/indicators/ema';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'interval' => '5m',
            'series_type' => 'close',
            'time_period' => '50',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/indicators/ema"
);

const params = {
    "ticker": "AAPL",
    "interval": "5m",
    "series_type": "close",
    "time_period": "50",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/indicators/ema?ticker=AAPL&interval=5m&series_type=close&time_period=50&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```

 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/indicators/ema**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker (one per request). Example: AAPL

- **Equity**: AAPL
- **Cryptocurrencies**: BTC-USD or ETH-USD
Example: `AAPL`

`**interval**`  string   


Time interval between two consecutive data points in the time series. The following values are supported:

- **1m**: 1 min candles. Range: 1 Day
- **5m**: 5 mins candles. Range: 1 Month
- **15m**: 15 mins candles. Range: 1 Month
- **30m**: 30 mins candles. Range: 1 Month
- **1d**: 1 day candles. Range: 5 Years
- **1wk**: 1 week candles. Range: 5 Years
- **1mo**: 1 month candles. Range: 10 Years
- **3mo**: 3 months' candles. Range: 10 Years. Example: `5m`

`**series_type**`  string   


Enter the series type. The following values are supported:

- **open**: candle's open
- **close**: candle's close
- **high**: candle's high
- **low**: candle's low Example: `close`

`**time_period**`  string   


Enter the series type. Number of data points used to calculate each moving average value. Positive integers are accepted. Example: `50`

`**limit**`  string  *optional*  


Limit the number of results returned, default is 50. Example: `50`

## GET /v1/indicators/stoch

requires authentication

Endpoint weight: 2

This technical indicator returns stochastic (STOCH) data.

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/indicators/stoch'
params = {
  'ticker': 'AAPL',
  'interval': '5m',
  'fastK_Period': '5',
  'slowK_Period': '3',
  'slowD_Period': '3',
  'slowK_MAType': '0',
  'slowD_MAType': '0',
  'limit': '50',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/indicators/stoch';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'interval' => '5m',
            'fastK_Period' => '5',
            'slowK_Period' => '3',
            'slowD_Period' => '3',
            'slowK_MAType' => '0',
            'slowD_MAType' => '0',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/indicators/stoch"
);

const params = {
    "ticker": "AAPL",
    "interval": "5m",
    "fastK_Period": "5",
    "slowK_Period": "3",
    "slowD_Period": "3",
    "slowK_MAType": "0",
    "slowD_MAType": "0",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/indicators/stoch?ticker=AAPL&interval=5m&fastK_Period=5&slowK_Period=3&slowD_Period=3&slowK_MAType=0&slowD_MAType=0&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```

 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/indicators/stoch**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker (one per request). Example: AAPL

- **Equity**: AAPL
- **Cryptocurrencies**: BTC-USD or ETH-USD
Example: `AAPL`

`**interval**`  string   


Time interval between two consecutive data points in the time series. The following values are supported (1m,5m,15m,30m,1h,1d,1wk,1mo,3mo). Example: `5m`

`**fastK_Period**`  string  *optional*  


The time period of the fastk moving average. Positive integers are accepted. Default: 5 Example: `5`

`**slowK_Period**`  string  *optional*  


The time period of the slowk moving average. Positive integers are accepted. Default: 3 Example: `3`

`**slowD_Period**`  string  *optional*  


The time period of the slowd moving average. Positive integers are accepted. Default: 3 Example: `3`

`**slowK_MAType**`  string  *optional*  


Moving average type for the slowk moving average. Default: 0 Available options:

- **0**: Simple Moving Average (SMA)
- **1**: Exponential Moving Average (EMA)
- **2**: Weighted Moving Average (WMA)
- **3**: Double Exponential Moving Average (DEMA)
- **4**: Triple Exponential Moving Average (TEMA)
- **5**: Triangular Moving Average (TRIMA)
- **6**: T3 Moving Average
- **7**: Kaufman Adaptive Moving Average (KAMA)
- **8**: MESA Adaptive Moving Average (MAMA) Example: `0`

`**slowD_MAType**`  string  *optional*  


Moving average type for the slowd moving average. Default: 0 Available options:

- **0**: Simple Moving Average (SMA)
- **1**: Exponential Moving Average (EMA)
- **2**: Weighted Moving Average (WMA)
- **3**: Double Exponential Moving Average (DEMA)
- **4**: Triple Exponential Moving Average (TEMA)
- **5**: Triangular Moving Average (TRIMA)
- **6**: T3 Moving Average
- **7**: Kaufman Adaptive Moving Average (KAMA)
- **8**: MESA Adaptive Moving Average (MAMA) Example: `0`

`**limit**`  string  *optional*  


Limit the number of results returned, default is 50. Example: `50`

## GET /v1/indicators/adosc

requires authentication

Endpoint weight: 2

This technical indicator returns the moving average convergence/divergence (MACD).

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/indicators/adosc'
params = {
  'ticker': 'AAPL',
  'interval': '5m',
  'series_type': 'close',
  'fast_period': '3',
  'slow_period': '3',
  'limit': '50',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/indicators/adosc';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'interval' => '5m',
            'series_type' => 'close',
            'fast_period' => '3',
            'slow_period' => '3',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/indicators/adosc"
);

const params = {
    "ticker": "AAPL",
    "interval": "5m",
    "series_type": "close",
    "fast_period": "3",
    "slow_period": "3",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/indicators/adosc?ticker=AAPL&interval=5m&series_type=close&fast_period=3&slow_period=3&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```

 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/indicators/adosc**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker (one per request). Example: AAPL

- **Equity**: AAPL
- **Cryptocurrencies**: BTC-USD or ETH-USD
Example: `AAPL`

`**interval**`  string   


Time interval between two consecutive data points in the time series. The following values are supported:

- **1m**: 1 min candles. Range: 1 Day
- **5m**: 5 mins candles. Range: 1 Month
- **15m**: 15 mins candles. Range: 1 Month
- **30m**: 30 mins candles. Range: 1 Month
- **1d**: 1 day candles. Range: 5 Years
- **1wk**: 1 week candles. Range: 5 Years
- **1mo**: 1 month candles. Range: 10 Years
- **3mo**: 3 months' candles. Range: 10 Years. Example: `5m`

`**series_type**`  string   


Enter the series type. The following values are supported:

- **open**: candle's open
- **close**: candle's close
- **high**: candle's high
- **low**: candle's low Example: `close`

`**fast_period**`  string  *optional*  


Enter the fast ADOSC. Positive integers are accepted. Default: 3 Example: `3`

`**slow_period**`  string  *optional*  


Enter the slow ADOSC. Positive integers are accepted. Default: 3 Example: `3`

`**limit**`  string  *optional*  


Limit the number of results returned, default is 50. Example: `50`

## GET /v1/indicators/ad

requires authentication

Endpoint weight: 2

This technical indicator returns the moving average convergence/divergence (MACD).

> Example request:

```
import requests
import json

url = 'https://api.mboum.com/v1/markets/indicators/ad'
params = {
  'ticker': 'AAPL',
  'interval': '5m',
  'limit': '50',
}
headers = {
  'Authorization': 'Bearer {YOUR_AUTH_KEY}'
}

response = requests.request('GET', url, headers=headers, params=params)
response.json()
```

```
$client = new \GuzzleHttp\Client();
$url = 'https://api.mboum.com/v1/markets/indicators/ad';
$response = $client->get(
    $url,
    [
        'headers' => [
            'Authorization' => 'Bearer {YOUR_AUTH_KEY}',
        ],
        'query' => [
            'ticker' => 'AAPL',
            'interval' => '5m',
            'limit' => '50',
        ],
    ]
);
$body = $response->getBody();
print_r(json_decode((string) $body));
```

```
const url = new URL(
    "https://api.mboum.com/v1/markets/indicators/ad"
);

const params = {
    "ticker": "AAPL",
    "interval": "5m",
    "limit": "50",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```

```
curl --request GET \
    --get "https://api.mboum.com/v1/markets/indicators/ad?ticker=AAPL&interval=5m&limit=50" \
    --header "Authorization: Bearer {YOUR_AUTH_KEY}"
```

> Example response (200, Success):

```

 
```

> Example response (401, Unauthenticated):

```
{
    "message": "Unauthenticated."
}


 
```

> Example response (403, Unauthorized):

```
{
    "message": "This action is unauthorized."
}


 
```

> Example response (404, Not Found):

```
{
    "success": false,
    "message": "Resource Not Found"
}


 
```

> Example response (422, Error Validations):

```
{
    "message": "The ticker field is required.",
    "errors": {
        "ticker": [
            "The ticker field is required."
        ]
    }
}


 
```

> Received response:

```
```

> Request failed with error:

```


Tip: Check that you're properly connected to the network.
If you're a maintainer of ths API, verify that your API is running and you've enabled CORS.
You can check the Dev Tools console for debugging information.
```

### Request   Try it out ⚡Cancel 🛑   Send Request 💥

GET`**v1/markets/indicators/ad**`

#### **Headers**

`**Authorization**`      


Example: `Bearer {YOUR_AUTH_KEY}`

#### **Query Parameters**

`**ticker**`  string   


Provide the company ticker (one per request). Example: AAPL

- **Equity**: AAPL
- **Cryptocurrencies**: BTC-USD or ETH-USD
Example: `AAPL`

`**interval**`  string   


Time interval between two consecutive data points in the time series. The following values are supported (1m,5m,15m,30m,1h,1d,1wk,1mo,3mo). Example: `5m`

`**limit**`  string  *optional*  


Limit the number of results returned, default is 50. Example: `50`

pythonphpjavascriptbash
