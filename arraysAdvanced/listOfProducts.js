function makeNumberedOrderedList(array) {
    let sortedArray = array.sort();
    
    for (let i = 1; i <= sortedArray.length; i++) {
        console.log(`${i}.${sortedArray[i - 1]}`);
    }
    
}

makeNumberedOrderedList(['Watermelon', 'Banana', 'Apples'])