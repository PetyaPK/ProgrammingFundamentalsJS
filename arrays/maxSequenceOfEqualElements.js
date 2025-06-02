function maxSequenceOfEqualElements(array) {
    let result = [];
    let isEqual = true;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                isEqual
                result.push(array[i], array[i + 1]);
            } else {
                isEqual = false;
                break;
            }
        }
    }
    console.log(result.join(' '));

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])