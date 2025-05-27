function sumOfOddNumbers (num) {
    let sum = 0;
    let countNumbers = 0;

    let i = 1;
    while (countNumbers !== num) {
        countNumbers ++;
        console.log(i);
        sum += i;
        i += 2;
        
    }

    console.log(`Sum: ${sum}`);
    
}

sumOfOddNumbers(3)