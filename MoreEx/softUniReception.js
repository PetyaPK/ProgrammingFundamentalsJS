function timeCalculationsSoftUniReception(array) {
    let studentsCount = Number(array.pop());
    let studentsPerHour = 0;

    for (let students of array) {
        studentsPerHour += Number(students);
    }

    let totalHours = 0;
    while (studentsCount > 0) {
        totalHours++;
        studentsCount -= studentsPerHour;

        if (totalHours % 4 === 0) {
            totalHours++;
        }
    }
    
    console.log(`Time needed: ${totalHours}h.`);
    
}

timeCalculationsSoftUniReception(['3','2','5','40'])