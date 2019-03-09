const ethers = require('ethers');

//const apiAccessToken = '';
const defaultProvider = ethers.getDefaultProvider("homestead");

const privateKey = '4BEF4E919D0AEF735882F465734FD47BDC1376F11E2D2B626BEE1308198B7D4E';
const wallet = new ethers.Wallet(privateKey, defaultProvider);
module.exports = {
    wallet: wallet
}