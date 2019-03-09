const ethers = require('ethers');

module.exports = {
    ethDirectSend: sendEth
}


async function sendEth(recipientAddress, amount){
    let transaction = {
        nonce: 0,
        gasLimit: 100000,
        gasPrice: utils.bigNumberify("20000000000"),
    
        to: recipientAddress,
        // ... or supports ENS names
        // to: "ricmoo.firefly.eth",
    
        value: utils.parseEther(JSON.stringify(amount)),
        data: "0x",
    
        // This ensures the transaction cannot be replayed on different networks
        chainId: ethers.utils.getNetwork('homestead').chainId
    }
}