// import mock httpGet method to perform HTTP requests
const { httpGet } = require("./mock-http-interface");

/**
 * @param {string[]} urls -- The urls to be requested
 * @return [{ ["Arnie Quote" || "FAILURE"]: message }] results -- Array of objects
 * ust getArnieQuotes method to get data from mock urls.
 */
const getArnieQuotes = async (urls) => {
  // TODO: Implement this function -- done
  /**
   * use Promise.all to handle permise one by one,
   * then return results
   */
  const results = await Promise.all(
    /**
     * use map method to generate results array
     * the async fat arrow function will handle each http call
     */
    urls.map(async (url) => {
      /**
       * try catch block for await http call
       */
      try {
        /**
         * get http data, and then assign to a const variable,
         * and then expose keys, so it would be a bit easier for
         * further usage
         */
        const { status, body } = await httpGet(url);
        /**
         * use JSON.parse to convert stringified object,
         * and then get message value, and then assign to const message
         */
        const message = JSON.parse(body).message;
        /**
         * if status === 200
         * @return [{ ["Arnie Quote"]: message }]
         * else
         * @return [{ ["FAILURE"]: message }]
         */
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
