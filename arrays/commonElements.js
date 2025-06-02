// function commonElements(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         let currentValue1 = array1[i];
//         for (let j = 0; j < array2.length; j++) {
//             let currentValue2 = array2[j];
//             if (array2.includes(currentValue1)) {
//                 let commonElements = array1[i];
//                 console.log(commonElements);
//                 break;
//             } 
//         }
//     }
// }

function commonElements(array1, array2) {
    for (let firstEl of array1) {
        if (array2.includes(firstEl)) {
            console.log(firstEl);
        }
    }
}


commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])
