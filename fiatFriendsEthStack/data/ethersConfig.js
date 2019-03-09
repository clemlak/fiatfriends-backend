const ethers = require('ethers');

const apiAccessToken = '';
const defaultProvider = ethers.getDefaultProvider("homestead");

const privateKey = '';
const wallet = new ethers.Wallet(privateKey, defaultProvider);
module.exports = {
    wallet: wallet
}