function arrayManipulator(array1, array2) {
    let manipulativeArray = array1.slice().map(Number);
    let commandArray = array2.slice();

    for (let command of commandArray) {
        let commandParts = command.split(' ');
        let commandName = commandParts.shift();

        switch (commandName) {
            case 'add':
                let indexAdd = Number(commandParts[0]);
                let numToPrint = Number(commandParts[1]);
                manipulativeArray.splice(indexAdd, 0, numToPrint);
                break;
            case 'addMany':
                let indexAddMany = Number(commandParts.shift());
                let numsToPrint = commandParts.map(Number);

                manipulativeArray.splice(indexAddMany, 0, ...numsToPrint);
                break;
            case 'contains':
                let searchedElement = Number(commandParts[0]);
                let index = manipulativeArray.indexOf(searchedElement);
                console.log(index);
                break;
            case 'remove':
                let indexOfElementToDelete = Number(commandParts[0]);
                manipulativeArray.splice(indexOfElementToDelete, 1);
                break;
            case 'shift':
                let rotations = Number(commandParts[0]);
                for (let i = 0; i < rotations; i++) {
                    let first = manipulativeArray.shift();
                    manipulativeArray.push(first);
                }
                break;
            case 'sumPairs':
                let sumPairedNums = [];
                for (let i = 0; i < manipulativeArray.length; i += 2) {
                    let currentNum = Number(manipulativeArray[i]);
                    if (i + 1 < manipulativeArray.length) {
                        let nextNum = Number(manipulativeArray[i + 1]);
                        sumPairedNums.push(currentNum + nextNum)
                    } else {
                        sumPairedNums.push(currentNum);
                    }
                }
                manipulativeArray = sumPairedNums;
                break;
            case 'print':
                console.log(`[ ${manipulativeArray.join(', ')} ]`);
                break;
        }

    }
}

arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]


)