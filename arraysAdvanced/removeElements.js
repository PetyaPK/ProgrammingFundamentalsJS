function removeRepetedElements(array) {
    let result = [];

    for (let num of array) {
        if (!result.includes(num)) {
            result.push(num)
        }
    }

    console.log(result.join(' '));

}

removeRepetedElements([7, 8, 9, 7, 2, 3, 4, 1, 2])