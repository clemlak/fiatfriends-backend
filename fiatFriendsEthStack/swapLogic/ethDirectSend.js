const ethers = require('ethers');

module.exports = {
    sendEth: sendEth
}


async function sendEth(recipientAddress, amount){
    let transaction = {
        gasLimit: 100000,
        to: recipientAddress,
        // ... or supports ENS names
        // to: "ricmoo.firefly.eth",
    
        value: ethers.utils.parseEther(JSON.stringify(amount)),
    
        // This ensures the transaction cannot be replayed on different networks
        chainId: ethers.utils.getNetwork('homestead').chainId
    }
}