function rounding(numToBeRounded, numsAfterDecimal) {
    let precission = Number(numsAfterDecimal);
    let result = 0;

    if (precission >= 15) {
        result = numToBeRounded.toFixed(15);
    } else {
        result = numToBeRounded.toFixed(precission);
    }

    console.log(Number(result));

}

rounding(10,
    3)