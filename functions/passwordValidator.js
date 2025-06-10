function passwordValidator(password) {
    function checkLength(pass) {
        return pass.length >= 6 && pass.length <= 10;
    }

    function checkRange(num, min, max) {
        return num >= min && num <= max;
    }

    function checkLettersAndDigits(pass) {
        for (let i = 0; i < pass.length; i++) {
            let asciiCode = pass.charCodeAt(i);
            if (!checkRange(asciiCode, 48, 57) 
                && !checkRange(asciiCode, 65, 90) 
                && !checkRange(asciiCode, 97, 122)) {
                return false
            }
        }
        return true
    }


    function checkDigitCount(pass) {
        let result = 0;
        for (let i = 0; i < pass.length; i++){
            let asciiCode = pass[i].charCodeAt(0);
            if (checkRange(asciiCode, 48, 57)) {
                result++;
            }
        }
        return result;
    }

    let isValid = true;
    if (!checkLength(password, 6, 10)) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    } 
    if (!checkLettersAndDigits(password)) {
        isValid = false;
        console.log('Password must consist only of letters and digits');        
    }
    if (checkDigitCount(password) < 2) {
        isValid = false;
        console.log('Password must have at least 2 digits'); 
    }
    if (isValid) {
        console.log('Password is valid');
        
    }
}

passwordValidator('logIn')