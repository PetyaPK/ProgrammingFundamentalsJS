function biggestOf3Numbers (arg1, arg2, arg3) {
    let number1 = Number(arg1);
    let number2 = Number(arg2);
    let number3 = Number(arg3);

    if (number1 >= number2 && number1 >= number3) {
        console.log(number1);   
    } else if (number2 >= number1 && number2 >= number3) {
        console.log(number2);
    } else if (number3 >= number1 && number3 >= number2) {
        console.log(number3);
    } 
}

biggestOf3Numbers(43,
43.2,
43.1


)

