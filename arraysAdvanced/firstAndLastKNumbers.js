function printsFirstAndLastKElements(array) {
    let kNumber = array[0];
    let firstSlicedArray = array.slice(1, kNumber + 1);
    let secondSlicedArray = array.slice(array.length - kNumber);

    console.log(firstSlicedArray.join(' '));
    console.log(secondSlicedArray.join(' '));
    

}

printsFirstAndLastKElements([1]

)