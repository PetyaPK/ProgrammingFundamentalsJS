function equalSums (array) {
    let sumAll = 0;

    for (let i = 0; i < array.length; i++) {
        sumAll += array[i];
    }

    let leftSum = 0;
    for (let i = 0; i < array.length; i++) {
        let rigthSum = sumAll - leftSum - array[i];
        if (rigthSum === leftSum) {
            console.log(i);
            return;
        }
        leftSum += array[i];
    }

    console.log('no');
    
}

equalSums([1, 2, 3])