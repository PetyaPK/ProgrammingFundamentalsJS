function townInfo(townName, populationNum, area) {
    if (townName.length < 3) {
        console.log('Town name must be at least 3 characters!');
    }
    if (populationNum < 0) {
        console.log('Population must be a positive number!');
    }
    if (area < 0) {
        console.log('Area must be a positive number!');
    }

    if (townName.length > 2 && populationNum >= 0 && area >= 0) {
        console.log(`Town ${townName} has population of ${populationNum} and area ${area} square km.`);
    }
}

townInfo('Ka',
    3600,
    -50



)