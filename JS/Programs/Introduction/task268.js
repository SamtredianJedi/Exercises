// JavaScript: Tips of the Day 7

/**
 * 
 * 
 * 
 * Returns a query string generated from the key-value pairs of the given object

Example:

const objectToQueryString = queryParameters => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
        const symbol = queryString.length === 0 ? '?' : '&';
        queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';
        return queryString;
      }, '')
    : '';
};

console.log(objectToQueryString({ page: '1', size: '2kg', key: undefined }));


 */