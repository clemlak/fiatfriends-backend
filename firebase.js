const admin = require('firebase-admin');
const serviceAccount = require('./fiatfriends-firebase-adminsdk.json');

function initFirebase() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://fiatfriends.firebaseio.com',
  });
}

function pushTx(id, from, to, currencyFrom, amountFrom, currencyTo) {
  const tx = {
    id,
    from,
    to,
    amountFrom,
    currencyFrom,
    currencyTo,
  };

  const db = admin.database().ref('tx');
  const newTx = db.push();

  newTx.set(tx);

  const path = newTx.toString();

  return path;
}

module.exports = {
  initFirebase,
  pushTx,
};
