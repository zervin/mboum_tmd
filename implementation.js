const BASE_URL = 'https://mboum.com/api';
const API_KEY = 'demo'; // Using MBOUM's demo key for testing

async function mboum_financial_data(params) {
  const { endpoint, params: endpointParams } = params;
  
  const url = new URL(`${BASE_URL}/v1/${endpoint}`);
  Object.entries(endpointParams || {}).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'X-API-KEY': API_KEY
    }
  });
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  
  return await response.json();
}

// Changed to CommonJS export
module.exports = mboum_financial_data;
