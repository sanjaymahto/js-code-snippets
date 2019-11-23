/**
 * Function to generate the body for post request
 *
 * @param  {String} params - body params
 */
function post_bodyGenerator(params = null) {
  const headers = (params && params.headers) || {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  return Object.assign(
    Object.assign(
      {
        headers,
        body: JSON.stringify(params.body) || JSON.stringify({})
      },
      params
    ),
    {
      method: "POST"
    }
  );
}

/**
 * Function to generate the body for put request
 *
 * @param  {String} params - body params
 */
function put_bodyGenerator(params = null) {
  const headers = (params && params.headers) || {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  return Object.assign(
    Object.assign(
      {
        headers,
        body: JSON.stringify(params.body) || JSON.stringify({})
      },
      params
    ),
    {
      method: "PUT"
    }
  );
}

/**
 * Function to generate the body for patch request
 *
 * @param  {String} params - body params
 */
function put_bodyGenerator(params = null) {
  const headers = (params && params.headers) || {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  return Object.assign(
    Object.assign(
      {
        headers,
        body: JSON.stringify(params.body) || JSON.stringify({})
      },
      params
    ),
    {
      method: "PATCH"
    }
  );
}

/**
 * Function to generate the body for get request
 *
 */
function get_bodyGenerator(params = null) {
  const headers = (params && params.headers) || {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  return Object.assign(
    Object.assign(
      {
        headers
      },
      params
    ),
    {
      method: "GET"
    }
  );
}

/**
 * Function to generate the body for delete request
 *
 */
function delete_bodyGenerator(params = null) {
  const headers = (params && params.headers) || {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  return Object.assign(
    Object.assign(
      {
        headers
      },
      params
    ),
    {
      method: "DELETE"
    }
  );
}

const API = (function api() {
  /**
   * Function for making get request
   * @param  {string} url - url string
   * @param  {object} params - params to be sent with request
   * @returns {Promise}
   */
  const getRequest = async (url, params) => {
    const response = await fetch(url, get_bodyGenerator(params));
    return await response.json();
  };

  /**
   * Function for making post request
   * @param  {string} url - url string
   * @param  {object} params - params to be sent with request
   * @returns {Promise}
   */
  const postRequest = async (url, params) => {
    const response = await fetch(url, post_bodyGenerator(params));
    return await response.json();
  };

  /**
   * Function for making put request
   * @param  {string} url - url string
   * @param  {object} params - params to be sent with request
   * @returns {Promise}
   */
  const putRequest = async (url, params) => {
    const response = await fetch(url, put_bodyGenerator(params));
    return await response.json();
  };

  /**
   * Function for making patch request
   * @param  {string} url - url string
   * @param  {object} params - params to be sent with request
   * @returns {Promise}
   */
  const patchRequest = async (url, params) => {
    const response = await fetch(url, put_bodyGenerator(params));
    return await response.json();
  };

  /**
   * Function for making delete request
   * @param  {string} url - url string
   * @param  {object} params - params to be sent with request
   * @returns {Promise}
   */
  const deleteRequest = async (url, params) => {
    fetch(url, delete_bodyGenerator(params));
    return await response.json();
  };
  return {
    getRequest,
    postRequest,
    putRequest,
    patchRequest,
    deleteRequest
  };
})();
