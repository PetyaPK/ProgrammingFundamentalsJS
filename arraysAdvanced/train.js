function completeWagons(array) {
    let arrayToUse = array.slice();
    
    let currentPassangersNumInWagon = arrayToUse
        .shift()
        .split(' ')
        .map(Number);
        

    let maxCapacityOfWagon = Number(arrayToUse.shift());    

    for (let command of arrayToUse) {
        let commandParts = command.split(' ');
        let commandName = commandParts.shift();
        let commandValue = commandParts.map(Number);
        
        if (commandName === "Add") {
            let value = commandValue.pop();
            currentPassangersNumInWagon.push(value)
        } else if (commandName !== "Add") {
            let additionalPassangers = Number(commandName);
            for (let i = 0; i < currentPassangersNumInWagon.length; i++) {
                let currentPassengersNum = Number(currentPassangersNumInWagon[i]);
                if (additionalPassangers + currentPassengersNum <= maxCapacityOfWagon) {
                    currentPassengersNum = additionalPassangers + currentPassengersNum;
                    currentPassangersNumInWagon.splice(i, 1, currentPassengersNum)
                    break; 
                }
            }
        }
    }

    console.log(currentPassangersNumInWagon.join(' '));
    
}

completeWagons(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']


)