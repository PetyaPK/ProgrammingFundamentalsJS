function amazingNumbers(num) {
    let numString = String(num);
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        let singleNum = numString[i];
        sum += Number(singleNum);
    }

    let sumString = String(sum);
    let isAmazing = false;

    for (let j = 0; j < sumString.length; j++) {
        let currentDigit = sumString[j];
        if (currentDigit === '9') {
            isAmazing = true;
        }
    }

    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(999)