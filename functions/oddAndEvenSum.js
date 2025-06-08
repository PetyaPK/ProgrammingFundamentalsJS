function sumOddAndEvenNums(number) {
    function oddNumbers(num) {
        let result = [];
        let numAsStr = String(num);
        for (let i = 0; i < numAsStr.length; i++) {
            let currentNum = Number(numAsStr[i]);
            if (currentNum % 2 !== 0) {
                result.push(currentNum);
            }
        }
        return result;
    }

    function evenNumbers(num) {
        let result = [];
        let numStr = String(num);
        for (let i = 0; i < numStr.length; i++) {
            let currentNum = Number(numStr[i]);
            if (currentNum % 2 === 0) {
                result.push(currentNum)
            }
        }
        return result;
    }

    function sumArray(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            let currentNum = array[i];
            sum += currentNum;
        }
        return sum
    }

    let odd = oddNumbers(number);
    let even = evenNumbers(number);
    let sumOdd = sumArray(odd);
    let sumEven = sumArray(even);

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

}

sumOddAndEvenNums(1000435)