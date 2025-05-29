function dayOfWeek(day) {
    let dayOfWeek = Number(day)
    switch (dayOfWeek) {
        case 1:
            console.log(`Monday`);
            break;
        case 2:
            console.log(`Tuesday`);
            break;
        case 3:
            console.log(`Wednesday`);
            break;
        case 4:
            console.log(`Thursday`);
            break;
        case 5:
            console.log(`Friday`);
            break;
        case 6:
            console.log(`Saturday`);
            break;
        case 7:
            console.log(`Sunday`);
            break;
    }
    if (dayOfWeek < 1 || dayOfWeek > 7) {
        console.log('Invalid day!');
    }
}

function dayOfTheWeek(dayNum) {
    let day = Number(dayNum);
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day >= 1 && day <= 7) {
        console.log(daysOfWeek[day-1]);
    } else {
        console.log('Invalid day!');
    }
}

dayOfTheWeek(3)
