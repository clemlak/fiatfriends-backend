const ethers = require('ethers');

const apiAccessToken = 'c00073b64f4d41bf9c7dbc342472d90c';
const defaultProvider = ethers.getDefaultProvider("rinkeby");

const privateKey = '4BEF4E919D0AEF735882F465734FD47BDC1376F11E2D2B626BEE1308198B7D4E';
const wallet = new ethers.Wallet(privateKey, defaultProvider);
console.log(wallet)
module.exports = {
    wallet: wallet
}