/* eslint-disable new-cap */
"use strict";

const NodeCache = require("node-cache");
const { generateAuthToken } = require("./auth");
const { TOKEN } = require("./utils/constants");
const wallets = require("./wallets");
const transactions = require("./transactions");
const exchanges = require("./exchanges");
const beneficiaries = require("./beneficiaries");

module.exports = ({ clientId, clientSecret }) => {
  if (!clientId || !clientSecret)
    throw Error("clientId and clientSecret are required params");

  const cache = new NodeCache();

  const token =
    cache.get(TOKEN) || generateAuthToken({ clientId, clientSecret, cache });

  this.wallets = new wallets({ token });
  this.transactions = new transactions({ token });
  this.exchanges = new exchanges({ token });
  this.beneficiaries = new beneficiaries({ token });
};
