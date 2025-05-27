function bitcoinMining(input) {
    let priceFor1gGold = 67.51;
    let priceFor1Bitcoin = 11949.16;
    let daysCount = 0;
    let goldAmount = 0;
    let totalMoney = 0;
    let dayOfTheFirstBitcoin = 0;
    let totalBitcoins = 0;
    let leftMoney = 0;
    let isBought = false;

    for (i = 0; i < input.length; i++) {
        daysCount++;
        let goldForTheDay = input[i];
        if (daysCount % 3 === 0) {
            goldForTheDay *= 0.70;
        }
        goldAmount += goldForTheDay;
        totalMoney = goldAmount * priceFor1gGold;
       
        totalBitcoins = Math.floor(totalMoney /priceFor1Bitcoin);
        leftMoney = totalMoney - (totalBitcoins * priceFor1Bitcoin)

        if (totalMoney >= priceFor1Bitcoin && !isBought) {
            isBought = true;
            dayOfTheFirstBitcoin = daysCount;
        }
    }

    console.log(`Bought bitcoins: ${Math.floor(totalBitcoins)}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstBitcoin}`);
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);



}

bitcoinMining([100, 200, 300])