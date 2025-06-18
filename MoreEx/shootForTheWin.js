function trackOfShootTargets(array) {

    let targets = array.shift().split(' ').map(Number);
    let coppiedTargets = targets.slice();
    let shootTargetCount = 0;

    let index = 0;
    let command = array[index];
    while (command !== "End") {
        let commandNums = Number(command);

        if (commandNums < targets.length && targets[commandNums] !== -1) {
            targets[commandNums] = -1;
            shootTargetCount++;
            for (let i = 0; i < coppiedTargets.length; i++) {
                let currentTargets = targets[i];
                let currentCoppiedTargets = coppiedTargets[commandNums];
                if (currentTargets > currentCoppiedTargets && currentTargets !== -1 && currentCoppiedTargets !== -1) {
                    currentTargets -= currentCoppiedTargets;
                    targets[i] = currentTargets;
                } else if (currentTargets <= currentCoppiedTargets && currentTargets !== -1 && currentCoppiedTargets !== -1) {
                    currentTargets += currentCoppiedTargets;
                    targets[i] = currentTargets;
                }
            }
            coppiedTargets = targets.slice();

        }
        index++;
        command = array[index];
    }
    console.log(`Shot targets: ${shootTargetCount} -> ${targets.join(' ')}`);

}


trackOfShootTargets((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
)
