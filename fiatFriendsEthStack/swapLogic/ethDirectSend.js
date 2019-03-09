const ethers = require('ethers');
const ethersConfig = require("../data/ethersConfig.js");

module.exports = {
    sendEth: sendEth
}


async function sendEth(recipientAddress, amount){
    let transaction = {

        to: recipientAddress,
        // ... or supports ENS names
        // to: "ricmoo.firefly.eth",
    
        value: ethers.utils.parseEther(amount),
    
        // This ensures the transaction cannot be replayed on different networks

    }
    return ethersConfig.wallet.sendTransaction(transaction);
}