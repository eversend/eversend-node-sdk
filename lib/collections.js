const { makeRequest } = require("./utils/api");

module.exports = {
  getCollectionFees: async ({ method, currency, amount }) => {
    return makeRequest({
      path: "/collections/fees",
      method: "POST",
      data: {
        method,
        currency,
        amount
      }
    });
  },

  getCollectionOTP: async ({ phone }) => {
    return makeRequest({
      path: "/collections/otp",
      method: "POST",
      data: {
        phone
      }
    });
  },

  initiateMomoCollection: async ({
    amount,
    currency,
    country,
    phone,
    customer,
    transactionRef,
    otpPinId,
    otpPin
  }) => {
    const data = {
      amount,
      currency,
      country,
      phone
    };

    if (transactionRef) data.transactionRef = transactionRef;
    if (customer) data.customer = customer;
    if (otpPin && otpPinId) data.otp = { pin: otpPin, pinId: otpPinId };

    return makeRequest({
      path: "/collections/momo",
      method: "POST",
      data
    });
  },

  getDeliveryCountries: async () =>
    makeRequest({
      path: "/payouts/countries",
      method: "GET"
    }),

  getDeliveryBanks: async ({ country }) =>
    makeRequest({
      path: `/payouts/banks/${country}`,
      method: "GET"
    })
};
