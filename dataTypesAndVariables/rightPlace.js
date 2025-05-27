function rightPlace (word1, element, correctWord) {
    let result = word1.replace('_', element) 
    if (result === correctWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
        
    }
}

rightPlace('Str_ng', 'i', 'String')