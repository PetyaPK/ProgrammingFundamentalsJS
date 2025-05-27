function login(input) {
    let index = 0;
    let username = input[index];
    index++;

    let incorrectCount = 0;

    let reversed = ``;

    for (let i = username.length - 1; i >= 0; i--) {
        reversed += username[i];
    }

    let command = input[index];
    while (command !== reversed) {
        incorrectCount += 1;
        if (incorrectCount >= 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log(`Incorrect password. Try again.`);

        index++;
        command = input[index];
    }

    if (command === reversed) {
        console.log(`User ${username} logged in.`);
        
    }


}

login(['sunny','rainy','cloudy','sunny','not sunny'])