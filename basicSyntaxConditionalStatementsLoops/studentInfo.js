function studentInfo(name, age, averageGrade) {
    let studentGrade = Number(averageGrade)
    console.log(`Name: ${name}, Age: ${age}, Grade: ${studentGrade.toFixed(2)}`);
}

studentInfo('John', 15, 5.54678)