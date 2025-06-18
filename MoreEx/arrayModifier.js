function arrayModifier(array) {
    let numbers = array.shift().split(' ').map(Number);
    
    let index = 0;
    let commandAll = array[index];
    while (commandAll !== "end") {
        let command = commandAll.split(' ')
        let commandName = command.shift();
        let commandNums = command.map(Number);
        
        switch (commandName) {
            case "swap":
                let indexFirst = Number(commandNums.shift());
                let indexSecond = Number(commandNums.shift());
                let temp = numbers[indexFirst]
                numbers[indexFirst] = numbers[indexSecond];
                numbers[indexSecond] = temp;
                break;
            case "multiply":
                let firstIndex = Number(commandNums.shift());
                let secondIndex = Number(commandNums);
                let result = numbers[firstIndex] * numbers[secondIndex];
                numbers.splice(firstIndex, 1, result);
                break;
            case "decrease":
                numbers = numbers.map(nums => nums - 1);
        }

        index++
        commandAll = array[index];
    }

    console.log(numbers.join(', '));
    
}

arrayModifier([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
]

)