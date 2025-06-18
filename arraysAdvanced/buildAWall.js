function buildAWall(array) {
    let sectionHight = array.map(Number);
    let concreteCubicYardsFor1Foot = 195;
    let priceForOneCubicYard = 1900;

    let newDayHight = sectionHight.slice();
    let dailyUsage = [];
    let dailyConcreteUsage = 0;

    let allSectionsDone = false;

    do {
        for (let i = 0; i < newDayHight.length; i++) {
            let currentSectionHight = newDayHight[i];
            let newSectionHight = currentSectionHight + 1;
            if (newSectionHight <= 30) {
                dailyConcreteUsage += concreteCubicYardsFor1Foot;
            } else {
                dailyConcreteUsage = dailyConcreteUsage;
            }
            newDayHight.splice(i, 1, newSectionHight);
        }
        dailyUsage.push(dailyConcreteUsage);
        dailyConcreteUsage = 0;

        allSectionsDone = true;
        for (let h of newDayHight) {
            if (h < 30) {
                allSectionsDone = false;
                break;
            }
        }
    } while (!allSectionsDone);

    let sumTotalCOncrete = 0;
    for (let num of dailyUsage) {
        sumTotalCOncrete += num;
    }

    let totalPrice = priceForOneCubicYard * sumTotalCOncrete;

    console.log(dailyUsage.join(', '));
    console.log(`${totalPrice} pesos`);
    
}


buildAWall([17])