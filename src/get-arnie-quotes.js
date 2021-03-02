// import mock httpGet method to perform HTTP requests
const { httpGet } = require("./mock-http-interface");

/**
 * @param {urls} urls -- string array
 * ust getArnieQuotes method to get data from mock urls.
 */
const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  const results = await Promise.all(
    urls.map(async (url) => {
      try {
        const { status, body } = await httpGet(url);
        const message = JSON.parse(body).message;
        if (status === 200) {
          return { ["Arnie Quote"]: message };
        } else {
          return { ["FAILURE"]: message };
        }
      } catch (error) {
        /**
         * If has an error, then printout the error for now.
         */
        console.log("24 -- error: ", error.message);
      }
    })
  );
  // return results;
  return results;
};

/**
 * export method: getArnieQuotes
 */
module.exports = {
  getArnieQuotes,
};
