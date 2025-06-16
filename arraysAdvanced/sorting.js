function sortsNumbers(array) {
    let sortedArray = array.sort((a, b) => b - a);
    let middle = Math.ceil(Number(sortedArray.length / 2));

    let result = [];

    for (let i = 0; i < middle; i++) {
        let biggest = sortedArray.shift();
        let smallest = sortedArray.pop();
        result.push(biggest);
        if (smallest !== undefined) {
        result.push(smallest);
        }
    }

    console.log(result.join(' '));
    
}

sortsNumbers([34, 2, 32, 45, 690, 19, 47])