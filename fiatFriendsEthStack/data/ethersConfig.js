const ethers = require('ethers');

const apiAccessToken = '';
const defaultProvider = new ethers.providers.InfuraProvider([network="homestead"][apiAccessToken]);

const privateKey = '';
const wallet = new ethers.Wallet(privateKey, defaultProvider);

module.exports = {
    wallet: wallet
}