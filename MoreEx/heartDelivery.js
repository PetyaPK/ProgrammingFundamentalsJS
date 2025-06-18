function trackCupidsMission(array) {
    let heartsNeeded = array.shift().split('@').map(Number);

    let currentPosition = 0;

    let index = 0;
    let command = array[index];
    while (command !== 'Love!') {
        let commandParts = command.split(' ');
        let commandJumpLength = Number(commandParts.pop());

        currentPosition += commandJumpLength;

        if(currentPosition > heartsNeeded.length - 1) {
            currentPosition = 0;
        }

        if (heartsNeeded[currentPosition] === 0) {
            console.log(`Place ${currentPosition} already had Valentine's day.`);  
        } else {
            heartsNeeded[currentPosition] = heartsNeeded[currentPosition] - 2;
            if (heartsNeeded[currentPosition] === 0) {
                 console.log(`Place ${currentPosition} has Valentine's day.`); 
            }
        }

        index++;
        command = array[index];
    }

    console.log(`Cupid's last position was ${currentPosition}.`);
    
    let resultArray = [];
    let resultFlag = true;

    heartsNeeded.forEach(element => {
        if(element !== 0) {
            resultFlag = false;
            resultArray.push(element)
        }
    });

    if(resultFlag) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${resultArray} places.`);
        
    }

}




trackCupidsMission((["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
)