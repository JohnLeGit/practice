// assuming we use request, axios or etc

// filler library to show timeSeries options
const timeSeriesObj = {
  'TIME_SERIES_INTRADAY': true,
  'TIME_SERIES_INTRADAY_EXTENDED': true,
  'TIME_SERIES_DAILY': true,
  'TIME_SERIES_DAILY_ADJUSTED': true,
  'TIME_SERIES_WEEKLY': true,
  'TIME_SERIES_WEEKLY_ADJUSTED': true,
  'TIME_SERIES_MONTHLY': true,
  'TIME_SERIES_MONTHLY_ADJUSTED': true
}

// helper function to create url
const urlCreator = (timeSeries, symbol) => {
  // return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo`;
  return `https://www.alphavantage.co/query?function=${timeSeries}&symbol=${symbol}&apikey=${alphaVantageAPI}`;
}

const stocksController = {};



module.exports = stocksController;