function dungeonestDark(string) {
    let myString = string;
    let rooms = myString.split('|');

    let health = 100;
    let coins = 0;
    let roomsNum = 0;

    for (let i = 0; i < rooms.length; i++) {
        let elementsInRooms = rooms[i].split(' ');
        let itemMonster = elementsInRooms[0];
        let scores = Number(elementsInRooms[1]);
        roomsNum = i + 1;
        if (itemMonster === "potion") {
            health += scores;
            if (health > 100) {
                scores = scores - (health - 100)
                health = 100;
            }
            console.log(`You healed for ${scores} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemMonster === "chest") {
            coins += scores;
            console.log(`You found ${scores} coins.`);
        } else {
            health -= scores;
            if (health > 0) {
                console.log(`You slayed ${itemMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemMonster}.`);
                console.log(`Best room: ${roomsNum}`);
                return;
            }
        }

    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

}



dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")