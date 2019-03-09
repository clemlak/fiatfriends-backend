const firebase = require('./firebase');

firebase.initFirebase();

const tx = firebase.pushTx(42, 'Noah', 'Anurag', 10, 'usd', 'mana');

console.log(tx);
