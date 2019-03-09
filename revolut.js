require('dotenv').config();
const axios = require('axios');

const endpoint = 'https://b2b.revolut.com/api/1.0';
const sandboxEndpoint = 'https://sandbox-b2b.revolut.com/api/1.0';

function getTransactions(interval) {
  const now = Date.now();
  const from = new Date(now - (interval * 1000));

  return axios({
    method: 'get',
    url: `${sandboxEndpoint}/transactions?type=transfer&from=${from.toISOString()}`,
    headers: {
      Authorization: `Bearer ${process.env.REVOLUT_API_KEY}`,
    },
  })
    .then((res) => {
      this.token = res.data.token;

      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err.response.data.response);
    });
}

module.exports = {
  getTransactions,
};
