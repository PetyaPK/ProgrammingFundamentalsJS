function printAndSum (startNum, endNum) {
    let sum = 0;
    let string ="";

    for (let i = startNum; i <= endNum; i++) {
        string += i + ' ';
        sum += i;
    }

    console.log(string);
    console.log(`Sum: ${sum}`);
    
    
}

printAndSum(5, 10)