function addAndSubstract(array) {
    let originalArraySum = 0;
    let modifiedArraySum = 0;
    let modifiedarray = [];
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        originalArraySum += currentNum;
        if (currentNum % 2 === 0) {
            currentNum += i;
        } else {
            currentNum -= i;
        }
        modifiedarray.push(currentNum);
        modifiedArraySum += currentNum;
    }

    console.log(modifiedarray);
    console.log(originalArraySum);
    console.log(modifiedArraySum);
}

addAndSubstract([5, 15, 23, 56, 35])