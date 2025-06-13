function processOddPositionedNumbers(array) {
    // let result = [];

    let oddPositonNums = array.filter((value, index) => index % 2 === 1)

    let doubledNums = oddPositonNums.map(num => num * 2);

    // for (let number of oddPositonNums) {
    //     let doubledNum = 2 * number;
    //     result.push(doubledNum);   
    // }

    console.log(doubledNums.reverse('').join(' '));

}

processOddPositionedNumbers([3, 0, 10, 4, 7, 3])