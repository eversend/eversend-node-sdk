const { makeRequest } = require("./utils/api");

module.exports = ({ token }) => {
  this.fetchWallets = () =>
    makeRequest({
      path: "/wallets",
      token,
      method: "GET"
    });

  this.fetchWallet = ({ id }) =>
    makeRequest({
      path: `/wallets/${id}`,
      token,
      method: "GET"
    });
};
