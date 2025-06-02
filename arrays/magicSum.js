function magicSum (array, magicNum) {
    let sum = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            sum = array[i] + array[j];
            if (sum === magicNum) {
                result.push(array[i], array[j]);
                console.log(result.join(' '));
                result = [];
            }
        }
    }
    
}

magicSum([1, 2, 3, 4, 5, 6],
6


)