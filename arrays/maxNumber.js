function maxNumber(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        let currentNum1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let currentNum2 = array[j];
            if (currentNum2 >= currentNum1) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result.push(array[i]);
        }
    }

    console.log(result.join(' '));

}

maxNumber([27, 19, 42, 2, 13, 45, 48])