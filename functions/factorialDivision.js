function divideFactorials(number1, number2) {
    function calculateFactorial(num) {
        let fact = 1;
        for (let i = num; i > 0; i--) {
            fact *= i;
        }
        return fact
    }

    function divisionOfFactorials(fact1, fact2) {
        return fact1 / fact2
    }

    let factorial1 = calculateFactorial(number1);
    let factorial2 = calculateFactorial(number2);
    let division = divisionOfFactorials(factorial1, factorial2);

    console.log(division.toFixed(2));
    
}

divideFactorials(6, 2)