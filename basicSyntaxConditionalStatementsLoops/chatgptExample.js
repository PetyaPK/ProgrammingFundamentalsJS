function chatGPT (input) {
    let daysCount = 0;
    let isFound = false;
    let firstDayMoreThan100Points = 0;

    for (i = 0; i < input.length; i++) {
        daysCount++;
        let points = input[i];
        

        if (points > 100 && !isFound) {
            isFound = true;
            firstDayMoreThan100Points = daysCount;

        }


    }

    console.log(firstDayMoreThan100Points);
    
}

chatGPT ([50, 60, 80, 120, 90, 150, 200])