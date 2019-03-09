const ethers = require('ethers');
const contractData = require("../data/contractData.js");
const ethersConfig = require("../data/ethersConfig.js");

module.exports = {
    uniswapHotSwap: uniswapHotSwap
}

async function uniswapHotSwap(recipientAddress, amount, swapCurrency) {
    let factoryContract = new ethers.Contract(contractData.uniswapFactoryAddress, contractData.uniswapFactoryAbi, ethersConfig.wallet);
    let exchangeAddress = await factoryContract.functions.getExchange(swapCurrency);
    let exchangeContract = new ethers.Contract(exchangeAddress, contractData.uniswapExchangeAbi,ethersConfig.wallet);
    console.log(recipientAddress);
    console.log(amount);
    console.log(JSON.stringify(amount));
    console.log(swapCurrency);
    //let deadline = parseInt((Date.now()/1000 + 10000000000));
    await exchangeContract.functions.ethToTokenTransferInput(ethers.utils.hexlify(1), ethers.utils.hexlify(2552132999), recipientAddress, {value: ethers.utils.parseEther(amount.toString()), gasLimit: 100000}); 
}