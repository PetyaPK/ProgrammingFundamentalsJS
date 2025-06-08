function addAndSubstract(integer1, integer2, integer3) {
    function sum(num1, num2) {
        return num1 + num2;
    }

    let firstResult = sum(integer1, integer2);
    
    function substract(num1, num2) {
        return num1 - num2;
    }

    let result = substract(firstResult, integer3)
    console.log(result);
      
}

addAndSubstract(1,
17,
30

)