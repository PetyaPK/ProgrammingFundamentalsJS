function reorderNegativeAndPositiveNums(array) {
    array = array.map(Number);

    let result = [];
    
    for (let num of array) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join('\n'));
    

}

reorderNegativeAndPositiveNums(['3', '-2', '0', '-1'])