
const uniswapLogic = require('./swapLogic/uniswapLogic.js');
const ethDirectSend = require('./swapLogic/ethDirectSend.js');
const priceFeed= require('./data/priceInfo.js');

module.exports = {
    swap: swap
}

function swap(recipientAddress, amount, ticker){

    //let newAmount = parseInt(priceFeed.getPrice()) * amount;
  

    if(ticker === "DAI"){
            let tokenAddress = "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359";
            uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else if(ticker === "WOMG"){
            let tokenAddress = "0x69657e421c993a65e31f571b4ce742fafb318bd4";
            uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else if(ticker === "MKR"){
        let tokenAddress = "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2";
        uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else if(ticker === "ZRX"){
        let tokenAddress = "0xe41d2489571d322189246dafa5ebde1f4699f498";
        uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else if(ticker === "BAT"){
        let tokenAddress = "0x0d8775f648430679a709e98d2b0cb6250d2887ef";
        uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else if(ticker === "LINK"){
        let tokenAddress = "0x514910771af9ca656af840dff83e8264ecf986ca";
        uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else if(ticker === "ANT"){
        let tokenAddress = "0x960b236A07cf122663c4303350609A66A7B288C0";
        uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else if(ticker === "KNC"){
        let tokenAddress = "0xdd974d5c2e2928dea5f71b9825b8b646686bd200";
        uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else if(ticker === "GUSD"){
        let tokenAddress = "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd";
        uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else if(ticker === "REP"){
        let tokenAddress = "0x1985365e9f78359a9B6AD760e32412f4a445E862";
        uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else if(ticker === "SPANK"){
        let tokenAddress = "0x42d6622dece394b54999fbd73d108123806f6a18";
        uniswapLogic.uniswapHotSwap(recipientAddress, amount, tokenAddress);
    }
    else{
            ethDirectSend.sendEth(recipientAddress, amount);
    }
}