function reverseArray (num, input) {
    let newInput = [];
    for (let i = 0; i < num; i++){
       let oldInputValue = input[i];
       newInput[i] = oldInputValue;
    }
    // newInput.reverse();
    let reversedInput = [];

    for (let i = 0; i < newInput.length; i++) {
        let currentValue = newInput[i];

        reversedInput[newInput.length - 1 - i] = currentValue;
    }

    console.log(newInput.join(' '));  
}

reverseArray(3, [10, 20, 30, 40, 50])