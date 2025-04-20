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

// Main plugin function matching plugin.json id
export async function mboum_financial_data({ endpoint, params }) {
  switch(endpoint) {
    case 'quotes':
      return await makeApiRequest('/v1/quotes', params);
    case 'historical':
      return await makeApiRequest('/v1/historical', params);
    case 'news':
      return await makeApiRequest('/v1/news', params);
    case 'crypto':
      return await makeApiRequest('/v1/crypto', params);
    case 'calendar':
      return await makeApiRequest('/v1/calendar', params);
    case 'options':
      return await makeApiRequest('/v1/options', params);
    case 'sectors':
      return await makeApiRequest('/v1/sectors', params);
    case 'earnings':
      return await makeApiRequest('/v1/earnings', params);
    case 'dividends':
      return await makeApiRequest('/v1/dividends', params);
    case 'indices':
      return await makeApiRequest('/v1/indices', params);
    case 'holders':
      return await makeApiRequest('/v1/holders', params);
    default:
      throw new Error(`Unknown endpoint: ${endpoint}`);
  }
}
