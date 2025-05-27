function spiceMustFlow(startingYield) {
    let expectedYield = startingYield;
    let workingDaysCount = 0;
    let total = 0;
    
    while (expectedYield >= 100) {
        workingDaysCount += 1;
        
        let spicesAfterWorkersConsumption = expectedYield - 26;
        total += spicesAfterWorkersConsumption;
        expectedYield -= 10;
    }
    if (total >= 26) {
        total -= 26;
    }

    console.log(workingDaysCount);
    console.log(total);
    
    
}

spiceMustFlow(111)