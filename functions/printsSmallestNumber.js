function printSmallestNumber(integer1, integer2, integer3) {
    function printSmalerNum(num1, num2) {
        let result = 0;
        if (num1 <= num2) {
            result = num1;
        } else {
            result = num2;
        }
        return result
    }
    
    let firstResult = printSmalerNum(integer1, integer2);
    let finalResult = printSmalerNum(firstResult, integer3);
    console.log(finalResult);
    
}

printSmallestNumber(2, 5, 3)

