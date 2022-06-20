const { makeRequest } = require("./utils/api");

module.exports = {
  getBeneficiaries: ({ token, page = 1, limit = 10 }) =>
    makeRequest({
      path: "/beneficiaries",
      token,
      params: {
        page,
        limit
      },
      method: "GET"
    }),
  getBeneficiary: ({ token, id }) =>
    makeRequest({
      path: `/beneficiaries/${id}`,
      token,
      method: "GET"
    }),
  addBeneficiaries: ({
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
  editBeneficiary: ({ token, id }) =>
    makeRequest({
      path: `/beneficiaries/${id}`,
      token,
      method: "PATCH"
    })
};
