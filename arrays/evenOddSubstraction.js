// function evenOddSubstraction(array) {
//     let sumEvenNumbers = 0;
//     let sumOddNumbers = 0;

//     for (let i = 0; i < array.length; i++) {
//         let currentNum = Number(array[i]);
//         if (currentNum % 2 === 0) {
//             sumEvenNumbers += currentNum;
//         } else {
//             sumOddNumbers += currentNum;
//         }
//     }
//     let result = sumEvenNumbers - sumOddNumbers;
//     console.log(result);
    
// }

function evenOddSubstraction(array) {
    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;

    for (let i = 0; i < array.length; i++) {
        array[i]= Number(array[i]);
    }
    for (let num of array) {
        if (num % 2 === 0) {
            sumEvenNumbers += num;
        } else {
            sumOddNumbers += num;
        }
    }
    let result = sumEvenNumbers - sumOddNumbers;
    console.log(result);
    
}

evenOddSubstraction([2,4,6,8,10])