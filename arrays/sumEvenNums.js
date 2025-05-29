function sumEvenNums(array) {
    let sumEvenNumbers = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNum = Number(array[i]);
        if (currentNum % 2 === 0) {
            sumEvenNumbers += currentNum
        }
    }

   console.log(sumEvenNumbers);
   
    
}

sumEvenNums(['2','4','6','8','10'])