function reversedString (input) {
    let reversedInput = '';
    for (let i = input.length - 1; i >=0; i--) {
        reversedInput += input[i];
    }
    console.log(reversedInput);
    
}

reversedString('star')