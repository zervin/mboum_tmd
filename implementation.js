async function mboum_financial_data(params, userSettings) {
  const apiKey = userSettings?.mboumApiKey;
  if (!apiKey) {
    throw new Error("MBOUM API key is required. Please set it in the user settings.");
  }

  const results = {};

  async function makeApiRequest(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`MBOUM API request failed: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  }

  for (const request of params.requests) {
    const { function_name, parameters } = request;

    try {
      switch (function_name) {
        case "get_quotes":
          if (!parameters.symbol) throw new Error("Missing required parameter 'symbol' for get_quotes");
          const quotesUrl = `https://mboum.com/api/v1/qu/quote/?symbol=${parameters.symbol}&apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(quotesUrl);
          break;

        case "get_historical":
          if (!parameters.symbol) throw new Error("Missing required parameter 'symbol' for get_historical");
          const historicalUrl = `https://mboum.com/api/v1/hi/history/?symbol=${parameters.symbol}&apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(historicalUrl);
          break;

        case "get_news":
          const newsUrl = `https://mboum.com/api/v1/ne/news/?apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(newsUrl);
          break;

        case "get_crypto":
          const cryptoUrl = `https://mboum.com/api/v1/cr/trending/?apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(cryptoUrl);
          break;

        case "get_calendar":
          const calendarUrl = `https://mboum.com/api/v1/ca/calendar/?apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(calendarUrl);
          break;

        case "get_options":
          if (!parameters.symbol) throw new Error("Missing required parameter 'symbol' for get_options");
          const optionsUrl = `https://mboum.com/api/v1/op/options/?symbol=${parameters.symbol}&apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(optionsUrl);
          break;

        case "get_sectors":
          const sectorsUrl = `https://mboum.com/api/v1/se/sectors/?apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(sectorsUrl);
          break;

        case "get_earnings":
          const earningsUrl = `https://mboum.com/api/v1/ea/earnings/?apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(earningsUrl);
          break;

        case "get_dividends":
          if (!parameters.symbol) throw new Error("Missing required parameter 'symbol' for get_dividends");
          const dividendsUrl = `https://mboum.com/api/v1/di/dividends/?symbol=${parameters.symbol}&apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(dividendsUrl);
          break;

        case "get_indices":
          const indicesUrl = `https://mboum.com/api/v1/in/indices/?apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(indicesUrl);
          break;

        case "get_holders":
          if (!parameters.symbol) throw new Error("Missing required parameter 'symbol' for get_holders");
          const holdersUrl = `https://mboum.com/api/v1/ho/holders/?symbol=${parameters.symbol}&apikey=${apiKey}`;
          results[function_name] = await makeApiRequest(holdersUrl);
          break;

        default:
          throw new Error(`Unknown function name: ${function_name}`);
      }
    } catch (error) {
      results[function_name] = { error: error.message }; // Store the error message
    }
  }

  return results;
}

// Explicitly expose function to global scope
window.mboum_financial_data = mboum_financial_data;
