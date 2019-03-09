
const swapCall = require('./swapCall.js');

let recipientAddress = '0xfd14676d15E5ce66b29C18016cAa2Dd146f9c00e';
let amount = 0.01;
let ticker = 'SPANK';

//call hotswap
swapCall.swap(recipientAddress, amount, ticker);





