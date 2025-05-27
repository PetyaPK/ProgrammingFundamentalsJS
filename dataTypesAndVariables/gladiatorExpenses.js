function gladiatorExpenses (lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmetsCount = Math.floor(lostFightsCount / 2);
    let brokenSwardCount = Math.floor(lostFightsCount / 3);
    let brokenShieldsCount = Math.floor(lostFightsCount / 6);
    let brokenArmor = Math.floor(brokenShieldsCount / 2);
    let helmetsAmount = brokenHelmetsCount * helmetPrice;
    let swardAmount = brokenSwardCount * swordPrice;
    let shieldAmount = brokenShieldsCount * shieldPrice;
    let armorAmount = brokenArmor * armorPrice;
    let totalAmount = helmetsAmount + swardAmount + shieldAmount + armorAmount;
    
    console.log(`Gladiator expenses: ${totalAmount.toFixed(2)} aureus`);
}

gladiatorExpenses(7,
2,
3,
4,
5
)