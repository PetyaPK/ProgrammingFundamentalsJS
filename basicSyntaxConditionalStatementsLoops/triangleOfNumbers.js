function triangleOfNumbers(n) {

    for (let rows = 1; rows <= n; rows++) {
        let string = "";
        for (let columns = 1; columns <= rows; columns++) {
            string += rows + " ";
        }
        console.log(string);
    }
}

triangleOfNumbers(5)

