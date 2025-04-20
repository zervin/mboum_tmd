const BASE_URL = 'https://mboum.com/api';

async function mboum_financial_data(params, userSettings) {
  const { endpoint, params: endpointParams } = params;
  const { mboumApiKey } = userSettings;

  if (!mboumApiKey) {
    throw new Error('Please provide an MBOUM API key in plugin settings');
  }

  const url = new URL(`${BASE_URL}/v1/${endpoint}`);
  Object.entries(endpointParams || {}).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'X-API-KEY': mboumApiKey
    }
  });
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  
  return await response.json();
}

export default mboum_financial_data;
