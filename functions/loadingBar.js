function makeLoadingBar(number) {
    function createLoadingStructure(num) {
        let result = '';
        let percentageRepetition = num / 10;
        let dotRepetition = 10 - percentageRepetition;
        result += '%'.repeat(percentageRepetition) + '.'.repeat(dotRepetition);
        return result
    }

    if (number < 100) {
        console.log(`${number}% [${createLoadingStructure(number)}]`);
        console.log('Still loading...');
    } else if (number === 100) {
        console.log('100% Complete!');
        console.log(`[${createLoadingStructure(number)}]`);
    }
}

makeLoadingBar(100)