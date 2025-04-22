async function fetch_market_news_sentiment(params, userSettings) {
  const { searchMode, searchTerms, time_from, time_to } = params;
  const { alphaVantageAPIKey } = userSettings;

  if (!alphaVantageAPIKey) {
    return displayErrorMessage(
      'Please provide an Alpha Vantage API key in plugin settings'
    );
  }

  const queryParams = buildQueryParams(
    searchMode,
    searchTerms,
    time_from,
    time_to,
    alphaVantageAPIKey
  );
  const apiUrl = `https://www.alphavantage.co/query?${queryParams}`;

  try {
    const response = await fetch(apiUrl);
    handleResponseError(response);

    const data = await response.json();
    handleDataError(data);

    const newsFeed = data.feed;
    handleNewsFeedError(newsFeed, searchTerms);

    return generateHTML(newsFeed);
  } catch (error) {
    throw new Error(error.message);
  }
}

function buildQueryParams(
  searchMode,
  searchTerms,
  time_from,
  time_to,
  alphaVantageAPIKey
) {
  const queryParams = new URLSearchParams({
    function: 'NEWS_SENTIMENT',
    apikey: alphaVantageAPIKey,
    limit: 5,
    sort: 'RELEVANCE',
  });

  if (searchMode === 'tickers') {
    queryParams.set('tickers', searchTerms);
  } else if (searchMode === 'topics') {
    queryParams.set('topics', searchTerms);
  }

  if (time_from) queryParams.set('time_from', time_from);
  if (time_to) queryParams.set('time_to', time_to);

  return queryParams;
}

function handleResponseError(response) {
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
}

function handleDataError(data) {
  if (data.Information) {
    if (data.Information.includes('Invalid inputs')) {
      throw new Error('No news found for the search terms.');
    }
    throw new Error(data.Information);
  }
}

function handleNewsFeedError(newsFeed, searchTerms) {
  if (newsFeed.length === 0) {
    throw new Error(
      `No news found for the search terms: ${searchTerms}. Let try with specific symbols, example: GOOG, AAPL, TSLA, etc, or include "topics" in the search terms`
    );
  }
}

function generateHTML(newsFeed) {
  return `
    <div id="news-container">
    <style>
    body {
      font-family: system-ui, -apple-system, Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #333;
      line-height: 1.6;
      margin: 20px;
    }

    h1 {
      font-size: 1.3em;
    }

    a, a:visited {
      color: #2200cc;
    }

    /* News Container */
    #news-container {

      margin: 0 auto;
    }

    .news-item {
      display: flex;
      border-bottom: 1px solid #eee;
      padding: 15px 10px;
    }

    .news-item:not(:last-of-type) {
      margin-bottom: 10px;
    }

    .news-item .image-container,
    .news-item .content-container {
      display: inline-block;
      vertical-align: top;
    }

    .news-item .image-container {
      width: 60px;
      margin-right: 15px;
    }

    .news-item .image-container img {
      max-width: 100%;
    }

    .content-container h2 {
      font-size: 1.1em;
      margin-top: 0;
    }

    .content-container p {
      font-size: 0.9em;
      margin: 5px 0;
    }
    .image-container {
      flex: 0 0 150px;
      margin-right: 10px;
    }

    .image-container img {
      width: 100%;
    }

    .content-container {
      flex: 1;
    }

@media (max-width: 600px) {
    .news-item {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .news-item .image-container,
    .news-item .content-container {
      width: 100%;
    }

    .news-item .image-container {
      margin-bottom: 10px;
    }
  }
  </style>
      ${newsFeed
        .slice(0, 5)
        .map((article) => {
          let formattedTime = formatTime(article.time_published);
          return `
          <div class="news-item">
            <div class="image-container">
              <img src="${
                article.banner_image || 'https://via.placeholder.com/150'
              }" alt="${article.title}">
            </div>
            <div class="content-container">
              <h2><a href="${article.url}" target="_blank">${
            article.title
          }</a></h2>
              <p><strong>Source:</strong> ${
                article.source
              } - <strong>Published:</strong> ${formattedTime}</p>
              <p>${article.summary || 'Summary not available'}</p>
            </div>
          </div>
        `;
        })
        .join('')}
    </div>
  `;
}

function formatTime(timePublished) {
  let year = timePublished.slice(0, 4);
  let month = timePublished.slice(4, 6);
  let day = timePublished.slice(6, 8);
  let hour = timePublished.slice(9, 11);
  let minute = timePublished.slice(11, 13);
  let second = timePublished.slice(13, 15);

  let date = new Date(year, month - 1, day, hour, minute, second);
  return date.toLocaleString();
}
