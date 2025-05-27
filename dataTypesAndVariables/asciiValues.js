function asciiValues(symbol1, symbol2, symbol3) {
    let result = symbol3 + symbol2 + symbol1;
    console.log(result);
    let asciiValue = '';
    for (let i = 0; i < result.length; i++) {
        asciiValue += result.charCodeAt(i) + ' ';        
    }
    console.log(asciiValue);
    
}
asciiValues('%',
'2',
'o'
)