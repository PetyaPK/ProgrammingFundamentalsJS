function findPalindrome(array) {

    // for (let i = 0; i < array.length; i++) {
    //     let currentNum = String(array[i]);
    //     let backwordsNum = '';

    //     for (let j = currentNum.length - 1; j >= 0; j--) {
    //         let currentValue = String(currentNum[j]);
    //         backwordsNum +=currentValue;
    //     }

    //     if (backwordsNum === currentNum) {
    //         console.log('true');
    //     } else {
    //         console.log('false');

    //     }
    // }

    function checkIfPalindrome(num) {
        let numToString = String(num);
        let reversedNum = numToString.split('').reverse().join('');
        return numToString === reversedNum;
    }

    for (let i = 0; i < array.length; i++) {
        console.log(checkIfPalindrome(array[i]));
    }

}

findPalindrome([32, 2, 232, 1010])