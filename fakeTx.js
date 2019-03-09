const admin = require('firebase-admin');
const serviceAccount = require('./fiatfriends-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fiatfriends.firebaseio.com',
});

const fakeTx = {
  id: '123',
  from: 'Noah',
  to: '0x8e966e75dAB5FA5A22ea3FF1F6032851cB22C30D',
  amount: '0.1',
  currencyFrom: 'USD',
  currencyTo: 'ETH',
  status: 'pending',
};

const db = admin.database().ref('tx');
const newTx = db.push();

newTx.set(fakeTx);

const path = newTx.toString();

console.log(path);
