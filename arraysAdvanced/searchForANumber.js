function searchForANumber(array1, array2) {
    let elementsToTake = Number(array2[0]);
    let elementsToDelete = Number(array2[1]);
    let searchNum = Number(array2[2]);

    let coppiedArray1 = array1.slice();
    let splicedArray = coppiedArray1.splice(0, elementsToTake);
    splicedArray.splice(0, elementsToDelete);
    
    let countArray = splicedArray.filter(x => x === searchNum);
    
    console.log(`Number ${searchNum} occurs ${countArray.length} times.`);
    
    // let count = 0;
    // for (let i = 0; i < splicedArray.length; i++) {
    //     if (splicedArray[i] === searchNum) {
    //         count++;
    //     }
    // }

    // console.log(`Number ${searchNum} occurs ${count} times.`);
    
}

searchForANumber([7, 1, 5, 8, 2, 7],
[3, 1, 5]

)