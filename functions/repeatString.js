function repeatString(string, repeatCount) {
    let newString = '';
    for (let i = 1; i <= repeatCount; i++) {
        newString += string;
    }
    
    return newString
    
}

let result = repeatString("abc", 3);
console.log(result);
