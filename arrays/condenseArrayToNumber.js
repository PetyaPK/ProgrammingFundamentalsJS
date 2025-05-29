function condenseArrayToNumber(array) {

    if (array.length === 1) {
        console.log(array[0]);
        return;        
    }
    
    let result = [];

    while (true) {

        for (let i = 0; i < array.length - 1; i++) {
            let firstValue = array[i];
            let secondValue = array[i + 1];

            let sum = firstValue + secondValue;
            result.push(sum);
        }
        if (result.length === 1) {
            break;
        }

        array = result;
        result = [];
    }


    console.log(result[0]);
}

condenseArrayToNumber([2, 10, 3])