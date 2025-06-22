function calculatesBattlesToUnlockNextTank(array) {
    let experienceAmountNeeded = Number(array.shift());
    let battleCount = Number(array.shift());
    let battleCounter = 0;
    let resultExperience = 0;
    
    for (let i = 0; i < battleCount; i++) {
        battleCounter++;
        let gainedExperience = Number(array[i]);
        resultExperience += gainedExperience;

        if (battleCounter % 3 === 0) {
            gainedExperience *= 0.15;
            resultExperience += gainedExperience;
        } else if (battleCounter % 5 === 0) {
            gainedExperience *= 0.10;
            resultExperience -= gainedExperience;
        } else if (battleCounter % 15 === 0) {
            gainedExperience *= 0.05;
            resultExperience += gainedExperience;
        }

        if (resultExperience >= experienceAmountNeeded) {
            console.log(`Player successfully collected his needed experience for ${battleCounter} battles.`);
            return;
        }
    }

    let neededExperience = experienceAmountNeeded - resultExperience;

    if (resultExperience < experienceAmountNeeded) {
        console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`);
    }

}

calculatesBattlesToUnlockNextTank(([400,
5,
50,
100,
200,
100,
20])


)