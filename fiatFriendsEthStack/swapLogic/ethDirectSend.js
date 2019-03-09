const ethers = require('ethers');
const ethersConfig = require("../data/ethersConfig.js");

module.exports = {
    sendEth: sendEth
}


async function sendEth(recipientAddress, amount){
    console.log(recipientAddress)
    let transaction = {
        gasLimit: 100000,
        to: recipientAddress,
        // ... or supports ENS names
        // to: "ricmoo.firefly.eth",
    
        value: ethers.utils.parseEther(amount.toString()),
    
        // This ensures the transaction cannot be replayed on different networks
        chainId: ethers.utils.getNetwork('homestead').chainId
    }
    return ethersConfig.wallet.sendTransaction(transaction);
}