function arrayManipulation(input) {
    let numbers = input
        .shift()
        .split(' ')
        .map(Number);

    for (let command of input) {
        let commandParts = command.split(' ');
        let commandName = commandParts.shift();
        let commandNums = commandParts.map(Number);

        if (commandName === "Add") {
            let value = commandNums.pop();
            numbers.push(value);
        } else if (commandName === "Remove") {
            let value = commandNums.pop();
            numbers = numbers.filter(num => num !== value)
        } else if (commandName === "RemoveAt") {
            let index = commandNums.pop();
            numbers.splice(index, 1);
        } else if (commandName === "Insert") {
            let number = commandNums.shift();
            let index = commandNums.pop();
            numbers.splice(index, 0, number);
        }

    }

    console.log(numbers.join(' '));
    
        
}

arrayManipulation(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']

)