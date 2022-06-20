const { default: axios } = require("axios");
const { BASE_URL } = require("./constants");

module.exports = {
  makeRequest: async ({
    path,
    method = "POST",
    token = null,
    headers = {},
    data = null,
    params = null
  }) => {
    const config = {};
    if (token) headers.token = token;
    if (data) config.data = data;
    if (params) config.params = params;
    const response = await axios.request({
      url: `${BASE_URL}/${path}`,
      method,
      ...config
    });
    return response.data;
  }
};
