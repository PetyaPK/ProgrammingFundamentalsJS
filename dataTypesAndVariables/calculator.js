function calculator (num1, operator, num2) {
    let resultAsString = num1 + operator + num2;
    let result = eval(resultAsString)
    console.log(result.toFixed(2));
    
    
}

calculator(25.5,
'-',
3

)