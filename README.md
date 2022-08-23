# Eversend Nodejs SDK

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] ![Dependencies](https://img.shields.io/librariesio/release/npm/@eversend/node-sdk)

Nodejs SDK for Eversend payments API

## Installation

```sh
$ npm install --save @eversend/node-sdk
```

## Usage

```js
const eversendClient = require('@eversend/node-sdk')
    ({clientId: 'clientId', clientSecret: 'clientSecret'});

const wallets = await eversendClient.wallets.getWallets();
```

For additional documentation, check our [developer docs](https://developer.eversend.co/docs)
## License

MIT © [Eversend]()

[npm-image]: https://badge.fury.io/js/@eversend%2Fnode-sdk.svg
[npm-url]: https://badge.fury.io/js/@eversend%2Fnode-sdk
[travis-image]: https://app.travis-ci.com/eversend/eversend-node.svg?token=WxxstsCyyxGyzLpHFkUi&branch=master
[travis-url]: https://app.travis-ci.com/eversend/eversend-node
[daviddm-image]: https://david-dm.org/eversend/eversend-node-sdk.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/eversend/eversend-node-sdk
