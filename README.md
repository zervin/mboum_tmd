# MBOUM Financial Data Plugin for TypingMind

This plugin provides access to MBOUM's comprehensive financial market data API.

## Features
- Real-time stock quotes
- Historical market data
- Cryptocurrency data
- Market news
- Economic calendar
- Options chain data
- Sector performance
- Earnings calendar
- Dividend calendar
- Market indices
- Institutional holders

## Installation
1. Add this plugin to your TypingMind plugins directory
2. Configure your MBOUM API key in plugin settings

## Usage Examples
```
@mboum get stock quotes for AAPL,MSFT
@mboum show historical data for TSLA with interval 1wk
@mboum get latest market news
@mboum show crypto data for BTC-USD
@mboum get options chain for AAPL with expiration 2025-06-21
@mboum show sector performance
@mboum get earnings for 2025-04-20
```

## API Key
You need an MBOUM API key from https://mboum.com

## Supported Endpoints
- /v1/quotes - Get stock quotes
- /v1/historical - Get historical data
- /v1/news - Get market news
- /v1/crypto - Get cryptocurrency data
- /v1/calendar - Get economic calendar
- /v1/options - Get options chain data
- /v1/sectors - Get sector performance
- /v1/earnings - Get earnings calendar
- /v1/dividends - Get dividend calendar
- /v1/indices - Get market indices
- /v1/holders - Get institutional holders
