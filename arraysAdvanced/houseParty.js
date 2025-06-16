function trackGuestOnHouseParty(array) {
    let guesList = [];
    for (let command of array) {
        let name = command.split(' ')[0];
        if (command.includes('is going!')) {
            if (guesList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guesList.push(name);
            }
        } else if (command.includes('is not going!')) {
            if (guesList.includes(name)) {
                let index = guesList.indexOf(name);
                guesList.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log((guesList.join('\n')));
    
}

trackGuestOnHouseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']


)