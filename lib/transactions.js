const { makeRequest } = require("./utils/api");

module.exports = {
  fetchTransactions: ({ token, page = 1, limit = 10 }) =>
    makeRequest({
      path: "/transactions",
      token,
      params: {
        page,
        limit
      },
      method: "GET"
    }),
  fetchTransaction: ({ token, id }) =>
    makeRequest({
      path: `/transactions/${id}`,
      token,
      method: "GET"
    })
};
