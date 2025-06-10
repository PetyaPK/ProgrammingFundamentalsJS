function checkPerfectNumber(number) {
    function checkDivisors(num) {
        let result = 0;
        for (let i = 1; i < num; i++) {
            let currentDivisor = num / i;
            if (currentDivisor % 1 === 0) {
                result += i;
            }
        }
        return result
    }
    
    let sumDivisors = checkDivisors(number);
    let isPerfect = sumDivisors === number

    if (isPerfect) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

checkPerfectNumber(1236498)