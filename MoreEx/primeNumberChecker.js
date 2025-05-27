function primeNumberChecker(num) {
    let isPrime = true
    if (num <= 1) {
       console.log(!isPrime);
       return
    }

   
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(!isPrime);
            return; 
        } 
    }


    console.log(isPrime);
    

}

primeNumberChecker(5)