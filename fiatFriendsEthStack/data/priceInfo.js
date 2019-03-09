
const axios = require('axios');

module.exports = {
    getPrice: getPrice
}

function getPrice(currencyFrom) {
    return axios.get(`https://api.cryptonator.com/api/ticker/${currencyFrom}-eth`)
    .then( response => {
        return response.data.ticker.price;
    })
    .catch( err =>{
        return err;
    })
}

