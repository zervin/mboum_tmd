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
        quotes: "/v1/markets/stock/quotes",             // Existing - Stock
        history: "/v1/markets/stock/history",            // Existing - Stock
        news_v1: "/v1/news",                             // Renamed existing 'news' - General
        modules: "/v1/markets/stock/modules",            // Existing - Stock
        stock_earnings_v1: "/v1/markets/stock/earnings", // Renamed existing 'earnings' - Stock
        stock_dividends_v1: "/v1/markets/stock/dividends", // Renamed existing 'dividends' - Stock
        options: "/v1/markets/options",                  // Existing - Options V1 Root
        search: "/v1/search",                           // Existing - General V1
        movers: "/v1/movers",                           // Existing - General V1
        screener_v1: "/v1/screener",                     // New - General V1
        insider_trades_v1: "/v1/insider-trades",         // New - General V1
        search_v2: "/v2/search",                         // New - General V2
        movers_v2: "/v2/movers",                         // New - General V2
        tickers_v2: "/v2/tickers",                       // New - General V2
        market_info_v2: "/v2/market-info",               // New - General V2
        screener_v2: "/v2/screener",                     // New - General V2
        news_v2: "/v2/news",                             // New - General V2
        quote_realtime: "/v1/quote",                     // New - Stock V1 (Real-time)
        analyst_ratings_v1: "/v1/analyst-ratings",       // New - Stock V1
        ticker_summary_v2: "/v2/ticker-summary",         // New - Stock V2
        price_targets_v2: "/v2/price-targets",           // New - Stock V2
        financials_v2: "/v2/financials",                 // New - Stock V2
        revenue_v2: "/v2/revenue",                       // New - Stock V2
        short_interest_v2: "/v2/short-interest",         // New - Stock V2
        institutional_holdings_v2: "/v2/institutional-holdings", // New - Stock V2
        sec_filings_v2: "/v2/sec-filings",               // New - Stock V2
        historical_v2: "/v2/historical",                 // New - Stock V2
        unusual_options_activity_v1: "/v1/unusual-options-activity", // New - Options V1
        iv_rank_percentile_v1: "/v1/iv-rank-percentile", // New - Options V1
        iv_change_v1: "/v1/iv-change",                   // New - Options V1
        options_most_active_v1: "/v1/most-active",       // New - Options V1
        options_highest_iv_v1: "/v1/highest-iv",         // New - Options V1
        options_flow_v1: "/v1/options-flow",             // New - Options V1
        options_v2: "/v2/options",                       // New - Options V2 Root
        calendar_earnings_v1: "/v1/earnings",            // New - Calendar Events V1
        calendar_dividends_v1: "/v1/dividends",          // New - Calendar Events V1
        calendar_economic_events_v1: "/v1/economic_events", // New - Calendar Events V1
        calendar_ipo_v1: "/v1/ipo",                      // New - Calendar Events V1
        calendar_public_offerings_v1: "/v1/public_offerings", // New - Calendar Events V1
        calendar_earnings_v2: "/v2/earnings",            // New - Calendar Events V2
        calendar_dividends_v2: "/v2/dividends",          // New - Calendar Events V2
        indicator_sma_v1: "/v1/indicators/sma",          // New - Technical Indicator V1
        indicator_rsi_v1: "/v1/indicators/rsi",          // New - Technical Indicator V1
        indicator_macd_v1: "/v1/indicators/macd",        // New - Technical Indicator V1
        indicator_cci_v1: "/v1/indicators/cci",          // New - Technical Indicator V1
        indicator_adx_v1: "/v1/indicators/adx",          // New - Technical Indicator V1
        indicator_ema_v1: "/v1/indicators/ema",          // New - Technical Indicator V1
        indicator_stoch_v1: "/v1/indicators/stoch",      // New - Technical Indicator V1
        indicator_adosc_v1: "/v1/indicators/adosc",      // New - Technical Indicator V1
        indicator_ad_v1: "/v1/indicators/ad",            // New - Technical Indicator V1
        crypto_profile_v1: "/v1/crypto/profile",         // New - Crypto V1
        crypto_holders_v1: "/v1/crypto/holders",         // New - Crypto V1
        crypto_quotes_v1: "/v1/crypto/quotes",           // New - Crypto V1
        crypto_coins_v1: "/v1/crypto/coins",             // New - Crypto V1
        crypto_modules_v1: "/v1/crypto/modules",         // New - Crypto V1
    };

    const apiEndpoint = endpointMap[endpoint];
    if (!apiEndpoint) {
      // Return error object directly for validation errors
      return { error: true, message: `Invalid endpoint: ${endpoint}` };
    }

    const url = new URL(`https://api.mboum.com${apiEndpoint}`);
    if (endpointParams) {
      Object.entries(endpointParams).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    url.searchParams.append('apikey', apiKey);

    // Make the request
    const response = await fetch(url.toString());

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

    // Try to parse the JSON response
    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      // Return standard error object if JSON parsing fails
      return { error: true, message: `Failed to parse JSON response from MBOUM API: ${parseError.message}` };
    }

    // TypeMind expects the plain data object on success
    return data;

  } catch (error) {
    // Catch any other unexpected errors (e.g., network issues)
    // Return standard error object
    return {
      error: true,
      message: error.message || 'An unexpected error occurred.'
    };
  }
}

// Explicitly expose function to global scope
window.mboum_financial_data = mboum_financial_data;
