function printsTwoSmallestElements(array) {
    let sortedNums = array.sort((a, b) => a-b);
    let smallestTwo = sortedNums.slice(0, 2);

    console.log(smallestTwo.join(' '));
}

printsTwoSmallestElements([3, 0, 10, 4, 7, 3])