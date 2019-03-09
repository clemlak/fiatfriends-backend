
const uniswapLogic = require('./swapLogic/uniswapLogic.js');
const ethDirectSend = require('./swapLogic/ethDirectSend.js');

module.exports = {
    swap: swap
}

function swap(recipientAddress, amount, ticker){
    if (ticker === "DAI") {
        console.log('a')
        let tokenAddress = "0x1D329f63dbd2DfCa686a87c90D4Fe4b802F3E34D";
        uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else {
        console.log('b')
        ethDirectSend.sendEth(recipientAddress, amount);
    }
}