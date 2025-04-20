// Main function definition directly in global scope
async function mboum_financial_data(params) {
  try {
    // Extract parameters
    const { endpoint, params: endpointParams } = params;
    const apiKey = "demo"; // Replace with your actual MBOUM API key

    if (!endpoint) {
      // Return error object directly for validation errors
      return { error: true, message: "Endpoint parameter is required." };
    }

    const endpointMap = {
        // General
        search: "/v1/markets/search",                    // Corrected - General V1
        movers: "/v1/markets/movers",                    // Corrected - General V1
        screener_v1: "/v1/markets/screener",              // Corrected - General V1
        insider_trades_v1: "/v1/markets/insider-trades",  // Corrected - General V1
        news_v1: "/v1/markets/news",                      // Corrected - General V1
        search_v2: "/v2/markets/search",                  // Corrected - General V2
        movers_v2: "/v2/markets/movers",                  // Corrected - General V2
        tickers_v2: "/v2/markets/tickers",                // Corrected - General V2
        market_info_v2: "/v2/markets/market-info",        // Corrected - General V2
        screener_v2: "/v2/markets/screener",              // Corrected - General V2
        news_v2: "/v2/markets/news",                      // Corrected - General V2
        
        // Stocks
        quote_realtime: "/v1/markets/quote",              // Corrected - Stock V1 (Real-time)
        quotes: "/v1/markets/stock/quotes",              // Corrected - Stock V1
        history: "/v1/markets/stock/history",             // Corrected - Stock V1
        modules: "/v1/markets/stock/modules",             // Corrected - Stock V1
        stock_earnings_v1: "/v1/markets/stock/earnings",  // Renamed Existing (Path was already correct) - Stock V1
        stock_dividends_v1: "/v1/markets/stock/dividends", // Renamed Existing (Path was already correct) - Stock V1
        analyst_ratings_v1: "/v1/markets/stock/analyst-ratings", // Corrected - Stock V1
        ticker_summary_v2: "/v2/markets/stock/ticker-summary", // Corrected - Stock V2
        price_targets_v2: "/v2/markets/stock/price-targets", // Corrected - Stock V2
        financials_v2: "/v2/markets/stock/financials",      // Corrected - Stock V2
        revenue_v2: "/v2/markets/stock/revenue",          // Corrected - Stock V2
        short_interest_v2: "/v2/markets/stock/short-interest", // Corrected - Stock V2
        institutional_holdings_v2: "/v2/markets/stock/institutional-holdings", // Corrected - Stock V2
        sec_filings_v2: "/v2/markets/stock/sec-filings",   // Corrected - Stock V2
        historical_v2: "/v2/markets/stock/historical",      // Corrected - Stock V2
        
        // Options
        options: "/v1/markets/options",                   // Corrected - Options V1 Root
        unusual_options_activity_v1: "/v1/markets/options/unusual-options-activity", // Corrected - Options V1
        iv_rank_percentile_v1: "/v1/markets/options/iv-rank-percentile", // Corrected - Options V1
        iv_change_v1: "/v1/markets/options/iv-change",    // Corrected - Options V1
        options_most_active_v1: "/v1/markets/options/most-active", // Corrected - Options V1
        options_highest_iv_v1: "/v1/markets/options/highest-iv", // Corrected - Options V1
        options_flow_v1: "/v1/markets/options/options-flow", // Corrected - Options V1
        options_v2: "/v2/markets/options",                // Corrected - Options V2 Root
        
        // Calendar Events
        calendar_earnings_v1: "/v1/markets/calendar/earnings", // Corrected - Calendar V1
        calendar_dividends_v1: "/v1/markets/calendar/dividends", // Corrected - Calendar V1
        calendar_economic_events_v1: "/v1/markets/calendar/economic_events", // Corrected - Calendar V1
        calendar_ipo_v1: "/v1/markets/calendar/ipo",       // Corrected - Calendar V1
        calendar_public_offerings_v1: "/v1/markets/calendar/public_offerings", // Corrected - Calendar V1
        calendar_earnings_v2: "/v2/markets/calendar/earnings", // Corrected - Calendar V2
        calendar_dividends_v2: "/v2/markets/calendar/dividends", // Corrected - Calendar V2
        
        // Technical Indicator
        indicator_sma_v1: "/v1/markets/indicators/sma",   // Corrected - Indicator V1
        indicator_rsi_v1: "/v1/markets/indicators/rsi",   // Corrected - Indicator V1
        indicator_macd_v1: "/v1/markets/indicators/macd",  // Corrected - Indicator V1
        indicator_cci_v1: "/v1/markets/indicators/cci",   // Corrected - Indicator V1
        indicator_adx_v1: "/v1/markets/indicators/adx",   // Corrected - Indicator V1
        indicator_ema_v1: "/v1/markets/indicators/ema",   // Corrected - Indicator V1
        indicator_stoch_v1: "/v1/markets/indicators/stoch", // Corrected - Indicator V1
        indicator_adosc_v1: "/v1/markets/indicators/adosc",// Corrected - Indicator V1
        indicator_ad_v1: "/v1/markets/indicators/ad",     // Corrected - Indicator V1
        
        // Crypto
        crypto_profile_v1: "/v1/crypto/profile",          // Corrected - Crypto V1
        crypto_holders_v1: "/v1/crypto/holders",          // Corrected - Crypto V1
        crypto_quotes_v1: "/v1/crypto/quotes",            // Corrected - Crypto V1
        crypto_coins_v1: "/v1/crypto/coins",              // Corrected - Crypto V1
        crypto_modules_v1: "/v1/crypto/modules",          // Corrected - Crypto V1
    };

    const apiEndpoint = endpointMap[endpoint];
    if (!apiEndpoint) {
      // Return error object directly for validation errors
      return { error: true, message: `Invalid endpoint selected: ${endpoint}` };
    }

    // --- Parameter Validation --- 
    const requiredParamsMap = {
        search: ['search'],
        movers: ['market_type_v1'], 
        screener_v1: ['list'],
        // insider_trades_v1: [], // No required params
        // news_v1: [],
        search_v2: ['search'],
        movers_v2: ['change_type'],
        tickers_v2: ['ticker_asset_type_v2'], 
        // market_info_v2: [],
        screener_v2: ['metricType', 'filter'],
        // news_v2: [],
        quote_realtime: ['ticker', 'market_type_v1'], 
        quotes: ['ticker'],
        history: ['ticker', 'interval'],
        modules: ['ticker', 'module'],
        stock_earnings_v1: ['ticker'], 
        stock_dividends_v1: ['ticker'],
        analyst_ratings_v1: ['ticker'],
        ticker_summary_v2: ['ticker', 'market_type_v2'], 
        price_targets_v2: ['ticker'],
        financials_v2: ['ticker'],
        revenue_v2: ['ticker'],
        short_interest_v2: ['ticker', 'market_type_v2'], 
        institutional_holdings_v2: ['ticker', 'holdings_activity_type_v2'], 
        sec_filings_v2: ['ticker', 'filings_type_v2'], 
        historical_v2: ['ticker', 'market_type_v2'], 
        options: ['ticker'],
        unusual_options_activity_v1: ['options_asset_type_v1'], 
        iv_rank_percentile_v1: ['options_asset_type_v1'], 
        iv_change_v1: ['options_asset_type_v1'], 
        options_most_active_v1: ['options_asset_type_v1'], 
        options_highest_iv_v1: ['sort'],
        options_flow_v1: ['options_asset_type_v1'], 
        options_v2: ['ticker', 'market_type_v2'], 
        // calendar_earnings_v1: [],
        // calendar_dividends_v1: [],
        // calendar_economic_events_v1: [],
        // calendar_ipo_v1: [],
        // calendar_public_offerings_v1: [],
        // calendar_earnings_v2: requires 'days' OR ('start_date' AND 'end_date') - Special Case handled below
        // calendar_dividends_v2: [],
        indicator_sma_v1: ['ticker', 'interval', 'series_type', 'time_period'],
        indicator_rsi_v1: ['ticker', 'interval', 'series_type', 'time_period'],
        indicator_macd_v1: ['ticker', 'interval', 'series_type'],
        indicator_cci_v1: ['ticker', 'interval', 'series_type'],
        indicator_adx_v1: ['ticker', 'interval', 'series_type', 'time_period'],
        indicator_ema_v1: ['ticker', 'interval', 'series_type', 'time_period'],
        indicator_stoch_v1: ['ticker', 'interval'],
        indicator_adosc_v1: ['ticker', 'interval', 'series_type'],
        indicator_ad_v1: ['ticker', 'interval'],
        crypto_profile_v1: ['key'],
        crypto_holders_v1: ['key'],
        crypto_quotes_v1: ['key'],
        // crypto_coins_v1: [],
        crypto_modules_v1: ['module'],
    };

    const requiredParams = requiredParamsMap[endpoint] || [];
    const missingParams = [];

    if (endpoint === 'calendar_earnings_v2') {
        // Special case: requires 'days' OR ('start_date' AND 'end_date')
        const hasDays = endpointParams && endpointParams.hasOwnProperty('days') && endpointParams.days;
        const hasDateRange = endpointParams && endpointParams.hasOwnProperty('start_date') && endpointParams.start_date && 
                             endpointParams.hasOwnProperty('end_date') && endpointParams.end_date;
        if (!hasDays && !hasDateRange) {
             missingParams.push("'days' or ('start_date' and 'end_date')");
        }
    } else {
        // Standard case
        requiredParams.forEach(param => {
          if (!endpointParams || !endpointParams.hasOwnProperty(param) || !endpointParams[param]) {
            missingParams.push(param);
          }
        });
    }

    if (missingParams.length > 0) {
      return { 
          error: true, 
          message: `Missing required parameter(s) for endpoint '${endpoint}': ${missingParams.join(', ')}` 
      };
    }
    // --- End Parameter Validation ---

    const url = new URL(`https://api.mboum.com${apiEndpoint}`);
    if (endpointParams) {
      Object.entries(endpointParams).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    url.searchParams.append('apikey', apiKey);

    let response;
    try {
      // Make the request
      response = await fetch(url.toString());
    } catch (networkError) {
      // Handle fetch errors (network, DNS, etc.)
      return { error: true, message: `Network error calling MBOUM API: ${networkError.message}` };
    }

    // Handle non-OK responses specifically
    if (!response.ok) {
      let errorBody = '';
      try {
        // Try to get more details from the API error response
        errorBody = await response.text();
      } catch (e) {
        // Ignore if reading the body fails
      }
      // Return standard error object for API errors
      return {
        error: true,
        message: `MBOUM API request failed: ${response.status} - ${response.statusText}. ${errorBody}`.trim()
      };
    }

    // Try to parse the successful response as JSON
    try {
      const jsonData = await response.json();
      // Return raw JSON data directly on success
      return jsonData;
    } catch (jsonError) {
      // Handle cases where the response is OK but not valid JSON
      return { error: true, message: `Failed to parse MBOUM API response as JSON: ${jsonError.message}` };
    }

  } catch (generalError) {
    // Catch any other unexpected errors during execution
    console.error("Unexpected error in mboum_financial_data:", generalError); // Log for debugging
    return { error: true, message: `An unexpected error occurred: ${generalError.message}` };
  }
}

// Explicitly expose the function to the global scope (window)
if (typeof window !== 'undefined') {
  window.mboum_financial_data = mboum_financial_data;
}
