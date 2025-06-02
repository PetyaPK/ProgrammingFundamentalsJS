function arrayRotation (array, roatations) {
    let newArray = [];
    let actualRotations = roatations % array.length; 

    for (let i = actualRotations; i < array.length; i++) {
        newArray.push(array[i]);
    }
    for (let i = 0; i < actualRotations; i++) {
        newArray.push(array[i])
    }

    console.log(newArray.join(' '));
    
}

arrayRotation([51, 47, 32, 61, 21], 2)