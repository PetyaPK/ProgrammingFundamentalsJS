function sumDigits(num) {
    let sum = 0;
    let numAsString = String(num);
    for (let i = 0; i < numAsString.length; i++) {
        let currentDigit = numAsString[i];
        sum += Number(currentDigit);
    }
    console.log(sum);
}

sumDigits(245678)