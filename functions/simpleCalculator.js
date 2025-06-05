function simpleCalculations(numberOne, numberTwo, operation) {
    let operator;

    if (operation === "multiply") {
        operator = (x, y) => x * y;
    } else if (operation === "divide") {
        operator = (x, y) => x/y;
    } else if (operation === "add") {
        operator = (x, y) => x + y;
    } else if (operation === "subtract") {
        operator = (x, y) => x - y;
    }

    return operator(numberOne, numberTwo)

}

let result = simpleCalculations(50,
13,
'subtract'

);
console.log(result);
