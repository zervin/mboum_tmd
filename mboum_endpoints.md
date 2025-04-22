Okay, here is the augmented code block, now including both required and optional query parameters with their details (type, example, format, allowed values) where available from the document `Mboum_api.md`.

```markdown
* **GET /v1/search https://api.mboum.com/v1/markets/search**
    * Required Parameters:
        * `search`:
            * Type: string
            * Example: `AA`
    * Optional Parameters: None
* **GET /v1/movers https://api.mboum.com/v1/markets/movers**
    * Required Parameters:
        * `type`:
            * Type: string
            * Example: `ETF`
            * Allowed Values: `STOCKS`, `ETF`, `MUTUALFUNDS`, `FUTURES`
    * Optional Parameters: None
* **GET /v1/screener https://api.mboum.com/v1/markets/screener**
    * Required Parameters:
        * `list`:
            * Type: string
            * Example: `day_gainers`
            * Allowed Values: `trending`, `undervalued_growth_stocks`, `growth_technology_stocks`, `day_gainers`, `day_losers`, `most_actives`, `undervalued_large_caps`, `aggressive_small_caps`, `small_cap_gainers`
    * Optional Parameters:
        * `offset`:
            * Type: integer
            * Example: `19`
* **GET /v1/insider-trades https://api.mboum.com/v1/markets/insider-trades**
    * Required Parameters: None
    * Optional Parameters:
        * `ticker`:
            * Type: string
        * `type`:
            * Type: string
            * Allowed Values: `Buy`, `Sell`, `Transfer`
        * `minValue`:
            * Type: string
            * Example: `10000`
        * `politiciansOnly`:
            * Type: string
            * Allowed Values: `true`, `false`
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v1/news https://api.mboum.com/v1/markets/news**
    * Required Parameters: None
    * Optional Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL,TSLA`
* **GET /v2/search https://api.mboum.com/v2/markets/search**
    * Required Parameters:
        * `search`:
            * Type: string
            * Example: `AA`
    * Optional Parameters: None
* **GET /v2/movers https://api.mboum.com/v2/markets/movers**
    * Required Parameters:
        * `change_type`:
            * Type: string
            * Example: `PERCENT`
            * Allowed Values: `PERCENT`, `PRICE`, `GAP`
    * Optional Parameters:
        * `direction`:
            * Type: string
            * Example: `UP`
            * Allowed Values: `UP`, `DOWN`
        * `price_min`:
            * Type: string
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v2/tickers https://api.mboum.com/v2/markets/tickers**
    * Required Parameters:
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETF`, `MUTUALFUNDS`, `FUTURES`, `INDEX`
    * Optional Parameters:
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v2/market-info https://api.mboum.com/v2/markets/market-info**
    * Required Parameters: None
    * Optional Parameters: None
* **GET /v2/screener https://api.mboum.com/v2/markets/screener**
    * Required Parameters:
        * `metricType`:
            * Type: string
            * Example: `overview`
            * Allowed Values: `overview`, `technical`, `performance`, `fundamental`
        * `filter`:
            * Type: string
            * Example: `high_volume`
            * Allowed Values: `high_volume`, `hot_stocks`, `top_under_10`, `dividend`, `top_fundamentals`, `top_tech`, `j_pattern`, `golden_cross`, `death_cross`, `consolidation`, `rsi_overbought`, `rsi_oversold`, `52wk_toppicks`, `penny_gap`, `defensive_stock`, `income_growth`, `buy_longterm`, `sell_growth`
    * Optional Parameters:
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v2/news https://api.mboum.com/v2/markets/news**
    * Required Parameters: None
    * Optional Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `type`:
            * Type: string
            * Example: `ALL`
            * Allowed Values: `ALL`, `MARKET`, `VIDEO`, `PRESS-RELEASE`
* **GET /v1/quote https://api.mboum.com/v1/markets/quote**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETF`, `MUTUALFUNDS`, `FUTURES`
    * Optional Parameters: None
* **GET /v1/quotes https://api.mboum.com/v1/markets/stock/quotes**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL,TSLA`
    * Optional Parameters: None
* **GET /v1/history https://api.mboum.com/v1/markets/stock/history**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `interval`:
            * Type: string
            * Example: `5m`
            * Allowed Values: `1m`, `5m`, `15m`, `30m`, `1d`, `1wk`, `1mo`, `3mo`
    * Optional Parameters:
        * `diffandsplits`:
            * Type: string
            * Allowed Values: `true`, `false`
* **GET /v1/modules https://api.mboum.com/v1/markets/stock/modules**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `module`:
            * Type: string
            * Example: `profile`
            * Allowed Values: `profile`, `income-statement`, `income-statement-v2`, `balance-sheet`, `balance-sheet-v2`, `cashflow-statement`, `cashflow-statement-v2`, `financial-data`, `statistics`, `ratios`, `calendar-events`, `sec-filings`, `recommendation-trend`, `upgrade-downgrade-history`, `insider-transactions`, `insider-holders`, `net-share-purchase-activity`, `earnings`, `index-trend`, `industry-trend`, `sector-trend`
    * Optional Parameters:
        * `timeframe`:
            * Type: string
            * Example: `annually`
            * Allowed Values: `annually`, `quarterly`, `trailing` (only applies to v2 modules)
* **GET /v1/analyst-ratings https://api.mboum.com/v1/markets/stock/analyst-ratings**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL,NVDA` (Limit 10)
    * Optional Parameters:
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v2/ticker-summary https://api.mboum.com/v2/markets/stock/ticker-summary**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETF`, `MUTUALFUNDS`, `FUTURES`
    * Optional Parameters: None
* **GET /v2/price-targets https://api.mboum.com/v2/markets/stock/price-targets**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
    * Optional Parameters: None
* **GET /v2/financials https://api.mboum.com/v2/markets/stock/financials**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
    * Optional Parameters: None
* **GET /v2/revenue https://api.mboum.com/v2/markets/stock/revenue**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
    * Optional Parameters:
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v2/short-interest https://api.mboum.com/v2/markets/stock/short-interest**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETF`, `MUTUALFUNDS`, `FUTURES`
    * Optional Parameters: None
* **GET /v2/institutional-holdings https://api.mboum.com/v2/markets/stock/institutional-holdings**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `type`:
            * Type: string
            * Example: `TOTAL`
            * Allowed Values: `TOTAL`, `INCREASED`, `NEW`, `DECREASED`, `SOLDOUT`, `ACTIVITY`
    * Optional Parameters:
        * `limit`:
            * Type: integer
            * Example: `15`
* **GET /v2/sec-filings https://api.mboum.com/v2/markets/stock/sec-filings**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `type`:
            * Type: string
            * Example: `ALL`
            * Allowed Values: `FORM-4`, `ALL`
    * Optional Parameters:
        * `limit`:
            * Type: integer
            * Example: `15`
* **GET /v2/historical https://api.mboum.com/v2/markets/stock/historical**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETF`, `MUTUALFUNDS`, `FUTURES`
    * Optional Parameters:
        * `from_date`:
            * Type: string
            * Format: `YYYY-MM-DD`
        * `to_date`:
            * Type: string
            * Format: `YYYY-MM-DD`
        * `limit`:
            * Type: integer
            * Example: `50`
* **GET /v1/options https://api.mboum.com/v1/markets/options**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
    * Optional Parameters:
        * `expiration`:
            * Type: integer (Unix timestamp)
            * Example: `1734652800`
        * `display`:
            * Type: string
            * Example: `straddle`
            * Allowed Values: `list`, `straddle`
* **GET /v1/unusual-options-activity https://api.mboum.com/v1/markets/options/unusual-options-activity**
    * Required Parameters:
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETFS`, `INDICES`
    * Optional Parameters:
        * `date`:
            * Type: string
            * Format: `YYYY-MM-DD`
        * `price_min`:
            * Type: string
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v1/iv-rank-percentile https://api.mboum.com/v1/markets/options/iv-rank-percentile**
    * Required Parameters:
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETFS`, `INDICES`
    * Optional Parameters:
        * `price_min`:
            * Type: string
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v1/iv-change https://api.mboum.com/v1/markets/options/iv-change**
    * Required Parameters:
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETFS`, `INDICES`
    * Optional Parameters:
        * `direction`:
            * Type: string
            * Example: `UP`
            * Allowed Values: `UP`, `DOWN`
        * `price_min`:
            * Type: string
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v1/most-active https://api.mboum.com/v1/markets/options/most-active**
    * Required Parameters:
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETFS`, `INDICES`
    * Optional Parameters:
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v1/highest-iv https://api.mboum.com/v1/markets/options/highest-iv**
    * Required Parameters:
        * `sort`:
            * Type: string
            * Example: `HIGHEST`
            * Allowed Values: `HIGHEST`, `LOWEST`
    * Optional Parameters:
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v1/options-flow https://api.mboum.com/v1/markets/options/options-flow**
    * Required Parameters:
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETFS`, `INDICES`
    * Optional Parameters:
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v2/options https://api.mboum.com/v2/markets/options**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `type`:
            * Type: string
            * Example: `STOCKS`
            * Allowed Values: `STOCKS`, `ETF`, `MUTUALFUNDS`, `FUTURES`
    * Optional Parameters:
        * `from_date`:
            * Type: string
            * Format: `YYYY-MM-DD`
        * `to_date`:
            * Type: string
            * Format: `YYYY-MM-DD`
        * `limit`:
            * Type: integer
            * Example: `50`
* **GET /v1/earnings https://api.mboum.com/v1/markets/calendar/earnings**
    * Required Parameters: None
    * Optional Parameters:
        * `date`:
            * Type: string
            * Example: `2023-11-30`
            * Format: `YYYY-MM-DD`
* **GET /v1/dividends https://api.mboum.com/v1/markets/calendar/dividends**
    * Required Parameters: None
    * Optional Parameters:
        * `date`:
            * Type: string
            * Example: `2023-11-30`
            * Format: `YYYY-MM-DD`
* **GET /v1/economic_events https://api.mboum.com/v1/markets/calendar/economic_events**
    * Required Parameters: None
    * Optional Parameters:
        * `date`:
            * Type: string
            * Example: `2023-11-30`
            * Format: `YYYY-MM-DD`
* **GET /v1/ipo https://api.mboum.com/v1/markets/calendar/ipo**
    * Required Parameters: None
    * Optional Parameters:
        * `date`:
            * Type: string
            * Example: `2023-11`
            * Format: `YYYY-MM`
* **GET /v1/public_offerings https://api.mboum.com/v1/markets/calendar/public_offerings**
    * Required Parameters: None
    * Optional Parameters:
        * `date`:
            * Type: string
            * Example: `2023-11`
            * Format: `YYYY-MM`
* **GET /v2/earnings https://api.mboum.com/v2/markets/calendar/earnings**
    * Required Parameters: None (but requires either `days` OR `start_date`/`end_date`)
    * Optional Parameters:
        * `days`:
            * Type: integer
            * Example: `7`
            * Range: 1 to 30
        * `start_date`:
            * Type: string
            * Format: `YYYY-MM-DD`
        * `end_date`:
            * Type: string
            * Format: `YYYY-MM-DD`
        * `price_min`:
            * Type: string
        * `optionable`:
            * Type: string
            * Allowed Values: `true`, `false`
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v2/dividends https://api.mboum.com/v2/markets/calendar/dividends**
    * Required Parameters: None
    * Optional Parameters:
        * `date`:
            * Type: string
            * Format: `YYYY-MM-DD`
        * `page`:
            * Type: integer
            * Example: `1`
* **GET /v1/indicators/sma https://api.mboum.com/v1/markets/indicators/sma**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `interval`:
            * Type: string
            * Example: `5m`
            * Allowed Values: `1m`, `5m`, `15m`, `30m`, `1d`, `1wk`, `1mo`, `3mo`
        * `series_type`:
            * Type: string
            * Example: `close`
            * Allowed Values: `open`, `close`, `high`, `low`
        * `time_period`:
            * Type: string (representing positive integer)
            * Example: `50`
    * Optional Parameters:
        * `limit`:
            * Type: string
            * Example: `50`
            * Default: `50`
* **GET /v1/indicators/rsi https://api.mboum.com/v1/markets/indicators/rsi**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `interval`:
            * Type: string
            * Example: `5m`
            * Allowed Values: `1m`, `5m`, `15m`, `30m`, `1d`, `1wk`, `1mo`, `3mo`
        * `series_type`:
            * Type: string
            * Example: `close`
            * Allowed Values: `open`, `close`, `high`, `low`
        * `time_period`:
            * Type: string (representing positive integer)
            * Example: `50`
    * Optional Parameters:
        * `limit`:
            * Type: string
            * Example: `50`
            * Default: `50`
* **GET /v1/indicators/macd https://api.mboum.com/v1/markets/indicators/macd**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `interval`:
            * Type: string
            * Example: `5m`
            * Allowed Values: `1m`, `5m`, `15m`, `30m`, `1d`, `1wk`, `1mo`, `3mo`
        * `series_type`:
            * Type: string
            * Example: `close`
            * Allowed Values: `open`, `close`, `high`, `low`
    * Optional Parameters:
        * `fast_period`:
            * Type: string (representing positive integer)
            * Example: `12`
            * Default: `12`
        * `slow_period`:
            * Type: string (representing positive integer)
            * Example: `26`
            * Default: `26`
        * `signal_period`:
            * Type: string (representing positive integer)
            * Example: `9`
            * Default: `9`
        * `limit`:
            * Type: string
            * Example: `50`
            * Default: `50`
* **GET /v1/indicators/cci https://api.mboum.com/v1/markets/indicators/cci**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `interval`:
            * Type: string
            * Example: `5m`
            * Allowed Values: `1m`, `5m`, `15m`, `30m`, `1d`, `1wk`, `1mo`, `3mo`
        * `series_type`:
            * Type: string
            * Example: `close`
            * Allowed Values: `open`, `close`, `high`, `low`
    * Optional Parameters:
        * `time_period`:
            * Type: string (representing positive integer)
            * Example: `50`
        * `limit`:
            * Type: string
            * Example: `50`
            * Default: `50`
* **GET /v1/indicators/adx https://api.mboum.com/v1/markets/indicators/adx**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `interval`:
            * Type: string
            * Example: `5m`
            * Allowed Values: `1m`, `5m`, `15m`, `30m`, `1d`, `1wk`, `1mo`, `3mo`
        * `series_type`:
            * Type: string
            * Example: `close`
            * Allowed Values: `open`, `close`, `high`, `low`
        * `time_period`:
            * Type: string (representing positive integer)
            * Example: `50`
    * Optional Parameters:
        * `limit`:
            * Type: string
            * Example: `50`
            * Default: `50`
* **GET /v1/indicators/ema https://api.mboum.com/v1/markets/indicators/ema**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `interval`:
            * Type: string
            * Example: `5m`
            * Allowed Values: `1m`, `5m`, `15m`, `30m`, `1d`, `1wk`, `1mo`, `3mo`
        * `series_type`:
            * Type: string
            * Example: `close`
            * Allowed Values: `open`, `close`, `high`, `low`
        * `time_period`:
            * Type: string (representing positive integer)
            * Example: `50`
    * Optional Parameters:
        * `limit`:
            * Type: string
            * Example: `50`
            * Default: `50`
* **GET /v1/indicators/stoch https://api.mboum.com/v1/markets/indicators/stoch**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `interval`:
            * Type: string
            * Example: `5m`
            * Allowed Values: `1m`, `5m`, `15m`, `30m`, `1h`, `1d`, `1wk`, `1mo`, `3mo`
    * Optional Parameters:
        * `fastK_Period`:
            * Type: string (representing positive integer)
            * Example: `5`
            * Default: `5`
        * `slowK_Period`:
            * Type: string (representing positive integer)
            * Example: `3`
            * Default: `3`
        * `slowD_Period`:
            * Type: string (representing positive integer)
            * Example: `3`
            * Default: `3`
        * `slowK_MAType`:
            * Type: string
            * Example: `0`
            * Default: `0`
            * Allowed Values: `0` (SMA), `1` (EMA), `2` (WMA), `3` (DEMA), `4` (TEMA), `5` (TRIMA), `6` (T3), `7` (KAMA), `8` (MAMA)
        * `slowD_MAType`:
            * Type: string
            * Example: `0`
            * Default: `0`
            * Allowed Values: `0` (SMA), `1` (EMA), `2` (WMA), `3` (DEMA), `4` (TEMA), `5` (TRIMA), `6` (T3), `7` (KAMA), `8` (MAMA)
        * `limit`:
            * Type: string
            * Example: `50`
            * Default: `50`
* **GET /v1/indicators/adosc https://api.mboum.com/v1/markets/indicators/adosc**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `interval`:
            * Type: string
            * Example: `5m`
            * Allowed Values: `1m`, `5m`, `15m`, `30m`, `1d`, `1wk`, `1mo`, `3mo`
        * `series_type`:
            * Type: string
            * Example: `close`
            * Allowed Values: `open`, `close`, `high`, `low`
    * Optional Parameters:
        * `fast_period`:
            * Type: string (representing positive integer)
            * Example: `3`
            * Default: `3`
        * `slow_period`:
            * Type: string (representing positive integer)
            * Example: `3` (Note: doc shows example 3, default 3, but label says slow_period - likely default is 10 based on typical ADOSC)
            * Default: `3` (Likely 10)
        * `limit`:
            * Type: string
            * Example: `50`
            * Default: `50`
* **GET /v1/indicators/ad https://api.mboum.com/v1/markets/indicators/ad**
    * Required Parameters:
        * `ticker`:
            * Type: string
            * Example: `AAPL`
        * `interval`:
            * Type: string
            * Example: `5m`
            * Allowed Values: `1m`, `5m`, `15m`, `30m`, `1h`, `1d`, `1wk`, `1mo`, `3mo`
    * Optional Parameters:
        * `limit`:
            * Type: string
            * Example: `50`
            * Default: `50`
* **GET /v1/crypto/profile https://api.mboum.com/v1/crypto/profile**
    * Required Parameters:
        * `key`:
            * Type: string
            * Example: `bitcoin`
    * Optional Parameters: None
* **GET /v1/crypto/holders https://api.mboum.com/v1/crypto/holders**
    * Required Parameters:
        * `key`:
            * Type: string
            * Example: `bitcoin`
    * Optional Parameters: None
* **GET /v1/crypto/quotes https://api.mboum.com/v1/crypto/quotes**
    * Required Parameters:
        * `key`:
            * Type: string
            * Example: `bitcoin`
    * Optional Parameters: None
* **GET /v1/crypto/coins https://api.mboum.com/v1/crypto/coins**
    * Required Parameters: None
    * Optional Parameters:
        * `page`:
            * Type: string
            * Example: `1`
* **GET /v1/crypto/modules https://api.mboum.com/v1/crypto/modules**
    * Required Parameters:
        * `module`:
            * Type: string
            * Example: `trending`
            * Allowed Values: `global_matric`, `trending`, `most_visited`, `new_coins`, `gainer`, `loser`
    * Optional Parameters: None
```