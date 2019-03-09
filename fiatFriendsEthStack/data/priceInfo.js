
const axios = require('axios');
const priceFeed = 'https://api.cryptonator.com/api/ticker/eth-usd';

module.exports = {
    getPrice: getPrice
}

function getPrice() {axios.get(priceFeed)
  .then(function (response) {
    return response.price;
  })
}