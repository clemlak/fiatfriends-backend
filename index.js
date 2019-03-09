const cron = require('node-cron');
const revolut = require('./revolut');
const firebase = require('./firebase');

firebase.initFirebase();

cron.schedule('*/30 * * * * *', () => {
  console.log('Fetching new transactions...');

  revolut.getTransactions(30)
    .then((res) => {
      console.log(res);

      for (let i = 0; i < res.length; i += 1) {
        if (res[i].state === 'completed') {
          console.log(`Tx ${res[i].id} is completed`);

          // const tx = firebase.pushTx(42, 'Noah', 'Anurag', 10, 'usd', 'mana');
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
