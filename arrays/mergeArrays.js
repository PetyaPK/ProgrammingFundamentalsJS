function mergeArrays(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (i % 2 === 0) {
            newArray.push(Number(array1[i]) + Number(array2[i]));
        } else {
            let firstString = array1[i];
            let secondString = array2[i]
            newArray.push(firstString + secondString);
        }
    }
    console.log(newArray.join(' - '));
}


mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)