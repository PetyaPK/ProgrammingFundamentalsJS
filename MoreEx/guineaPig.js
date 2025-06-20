function calculationForGuineaPigWellness(array) {
    let foodKilos = Number(array.shift());
    let hayKilos = Number(array.shift());
    let coverKilos = Number(array.shift());
    let weightKilos = Number(array.shift());

    let daysCount = 0;

    let dailyFoodConsumptionKg = 300 / 1000;

    for (let i = 1; i <= 30; i++) {
        daysCount++;
        let dailyFoodLeft = Number(foodKilos - dailyFoodConsumptionKg);
        foodKilos = dailyFoodLeft;
        if (daysCount % 2 === 0) {
            let hayLeft = Number(hayKilos - (foodKilos * 0.05));
            hayKilos = hayLeft;
        } else {
            hayKilos = hayKilos;
        }
        if (daysCount % 3 === 0) {
            leftCover = Number(coverKilos - (weightKilos / 3));
            coverKilos = leftCover;
        }

        if (foodKilos.toFixed(2) <= 0 || coverKilos.toFixed(2) <= 0 || hayKilos.toFixed(2) <= 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }

    }

    console.log(`Everything is fine! Puppy is happy! Food: ${foodKilos.toFixed(2)}, Hay: ${hayKilos.toFixed(2)}, Cover: ${coverKilos.toFixed(2)}.`);
    
}

calculationForGuineaPigWellness((["9",
"5",
"5.2",
"1"])


)