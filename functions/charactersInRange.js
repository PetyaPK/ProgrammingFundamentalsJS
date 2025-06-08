function charactersInRange(character1, character2) {
    function findFirstCharacter(c1, c2) {
        let char1 = c1.charCodeAt(0);
        let char2 = c2.charCodeAt(0);

        if (char1 < char2) {
            return [char1, char2];
        } else {
            return [char2, char1];
        }
    }
    // let sortedChars = findFirstCharacter(character1, character2);
    // let start = sortedChars[0];
    // let stop = sortedChars[1];
    let [strat, stop] = findFirstCharacter(character1, character2);

    let result = '';
    for (let i = strat + 1; i < stop; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    console.log(result);
    
}

charactersInRange('C',
'#'
)