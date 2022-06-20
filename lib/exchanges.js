const { makeRequest } = require("./utils/api");

module.exports = ({ token }) => {
  this.getQuotation = ({ from, to, amount }) =>
    makeRequest({
      path: "/exchanges/quotation",
      token,
      method: "POST",
      data: {
        from,
        to,
        amount
      }
    });

  this.createExchange = ({ quotationToken, transactionRef }) =>
    makeRequest({
      path: "/exchanges",
      token,
      method: "POST",
      data: {
        token: quotationToken,
        transactionRef
      }
    });
};
