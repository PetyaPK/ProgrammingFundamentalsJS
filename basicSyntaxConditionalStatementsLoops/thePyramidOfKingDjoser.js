function thePyramidOfKingDjoser(base, increment) {
    let size = 0
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let totalGold = 0;

    let steps = 0;
    while (base >= 1) {
        size = base ** 2;

        base -= 2;
        steps += 1;

        if (base < 1) {
            totalGold = size * increment;
            break;
        } else {
            totalGold = 1 * increment;
        }


        let stoneSize = base ** 2;
        let stone = stoneSize * increment;
        totalStone += stone;

        if (steps % 5 === 0) {
            let lapisLazuliSize = size - (base ** 2);
            let lapisLazuli = lapisLazuliSize * increment;
            totalLapisLazuli += lapisLazuli;
        } else {
            let marbelSize = size - (base ** 2);
            let marble = marbelSize * increment;
            totalMarble += marble;
        }

    }


    let pyramidHight = steps * increment;
    

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHight)}`);

}

thePyramidOfKingDjoser(11, 1)