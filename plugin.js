const BASE_URL = 'https://mboum.com/api';

// Helper function for API requests
async function makeApiRequest(endpoint, params = {}) {
  const apiKey = await ai.getConfig('mboumApiKey');
  if (!apiKey) {
    throw new Error('MBOUM API key not configured. Please set it in plugin settings.');
  }
  
  const url = new URL(`${BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'X-API-KEY': apiKey
    }
  });
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  
  return await response.json();
}

// Define plugin functions
export default {
  // Get stock quotes
  async getQuotes({ symbol }) {
    return await makeApiRequest('/v1/quotes', { symbol });
  },
  
  // Get historical data
  async getHistoricalData({ symbol, interval = '1d' }) {
    return await makeApiRequest('/v1/historical', { symbol, interval });
  },
  
  // Get market news
  async getMarketNews({ limit = 10 }) {
    return await makeApiRequest('/v1/news', { limit });
  },
  
  // Get crypto data
  async getCryptoData({ symbol }) {
    return await makeApiRequest('/v1/crypto', { symbol });
  },
  
  // Get economic calendar
  async getEconomicCalendar({ country }) {
    return await makeApiRequest('/v1/calendar', { country });
  },
  
  // New endpoints
  async getOptionsChain({ symbol, expiration }) {
    return await makeApiRequest('/v1/options', { symbol, expiration });
  },
  
  async getSectorPerformance() {
    return await makeApiRequest('/v1/sectors');
  },
  
  async getEarningsCalendar({ date }) {
    return await makeApiRequest('/v1/earnings', { date });
  },
  
  async getDividendCalendar({ date }) {
    return await makeApiRequest('/v1/dividends', { date });
  },
  
  async getMarketIndices() {
    return await makeApiRequest('/v1/indices');
  },
  
  async getInstitutionalHolders({ symbol }) {
    return await makeApiRequest('/v1/holders', { symbol });
  }
};
