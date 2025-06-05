function signCheck(numOne, numTwo, numThree) {
    let negativeNumbers = 0;
    
    if (numOne < 0) {
        negativeNumbers++
    }

    if (numTwo < 0) {
        negativeNumbers++
    }

    if (numThree < 0) {
        negativeNumbers++
    }

    if (negativeNumbers === 1 || negativeNumbers === 3) {
        console.log('Negative');        
    } else {
        console.log('Positive');
        
    }

}

signCheck(-6,
-12,
 14


)