const { makeRequest } = require("./utils/api");

module.exports = {
  getBeneficiaries: async ({ page = 1, limit = 10 }) =>
    makeRequest({
      path: "/beneficiaries",
      params: {
        page,
        limit
      },
      method: "GET"
    }),
  getBeneficiary: async ({ id }) =>
    makeRequest({
      path: `/beneficiaries/${id}`,
      method: "GET"
    }),
  addBeneficiaries: async ({
    token,
    firstName,
    lastName,
    country,
    phoneNumber,
    bankName,
    bankCode,
    bankAccountName,
    bankAccountNumber
  }) =>
    makeRequest({
      path: "/beneficiaries",
      token,
      method: "POST",
      data: [
        {
          firstName,
          lastName,
          country,
          phoneNumber,
          bankName,
          bankCode,
          bankAccountName,
          bankAccountNumber
        }
      ]
    }),
  editBeneficiary: async ({ id }) =>
    makeRequest({
      path: `/beneficiaries/${id}`,
      method: "PATCH"
    })
};
