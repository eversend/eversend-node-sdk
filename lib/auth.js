const { default: axios } = require("axios");
const { BASE_URL, TOKEN } = require("./utils/constants");

const generateAuthToken = async ({ clientId, clientSecret, cache }) => {
  const response = await axios.request({
    url: `${BASE_URL}/auth/token`,
    method: "GET",
    headers: {
      clientId,
      clientSecret
    }
  });
  cache.set(TOKEN, response.data.token, 3600);
  return response.data.token;
};

module.exports = {
  generateAuthToken
};
