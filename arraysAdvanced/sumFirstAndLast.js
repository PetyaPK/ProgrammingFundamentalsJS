function sumFirstAndLastElement(array) {
    let arrayNums = array.map(Number);

    let firstElement = arrayNums.shift();
    let lastElement = arrayNums.pop();

    console.log(firstElement + lastElement);
    
}

sumFirstAndLastElement(['5', '10'])