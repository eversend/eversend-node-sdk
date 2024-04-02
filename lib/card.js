const { makeRequest } = require("./utils/api");

module.exports = {
  createCardUser: async ({ firstName, lastName, email, phoneNumber }) => {
    const data = { firstName, lastName, email, phoneNumber };
    if (phoneNumber) data.phoneNumber = phoneNumber;
    makeRequest({
        path: "/cards/user",
        method: "POST",
        data
      });
  },
  getCardUsers: async ({ page = 1, limit = 10 }) =>
    makeRequest({
      path: "/cards/getUsers",
      params: {
        page,
        limit
      },
      method: "GET"
    }),

  createCard: async ({ title, color, amount, userId, currency, brand }) => {
    const data = { title, color, amount, userId, currency, brand};
    makeRequest({
        path: "/cards",
        method: "POST",
        data
    });
  },
  
  getAllCards: async ({ status, query, from, to, page, limit }) =>
    makeRequest({
      path: "/cards",
      params: {
        page, limit, status, query, from, to
      },
      method: "GET"
    }),

  getSingleCardDetails: async ({ cardId }) =>
    makeRequest({
      path: `/cards/${cardId}`,
      method: "GET"
    }),

  fetchSingleCardTransaction: async ({ cardId, status, query, from, to, type }) =>
    makeRequest({
      path: `/cards/transactions/${cardId}`,
      params: {
        status, query, from, to, type, status
      },
      method: "GET"
    }),

  fetchAllCardsTransaction: async ({ status, query, from, to, type }) =>
    makeRequest({
        path: `/cards/transactions`,
        params: {
          status, query, from, to, type, status
        },
        method: "GET"
    }),
    fundCard: async ({ amount, cardId, currency }) => {
        const data = { amount, cardId, currency};
        makeRequest({
            path: "/cards/fund",
            method: "POST",
            data
        });
      },

      cardWithdrawal: async ({ amount, cardId, currency }) => {
        const data = { amount, cardId, currency};
        makeRequest({
            path: "/cards/withdraw",
            method: "POST",
            data
        });
      },

      freezeCard: async ({ cardId }) => {
        const data = { cardId};
        makeRequest({
            path: "/cards/freeze",
            method: "POST",
            data
        });
      },
      unfreezeCard: async ({ cardId }) => {
        const data = { cardId};
        makeRequest({
            path: "/cards/unfreeze",
            method: "POST",
            data
        });
      },
      deleteCard: async ({ cardId }) => {
        const data = { cardId};
        makeRequest({
            path: "/cards/terminate",
            method: "POST",
            data
        });
      },
      getCardsAnalytics: async ({ from, to }) =>
        makeRequest({
            path: `/cards/analytics`,
            params: {
                from, to
            },
            method: "GET"
        }),
};
