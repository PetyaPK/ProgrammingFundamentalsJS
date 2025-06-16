function sortByTwoCriteria(array) {
    let sortedArray = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        };
        return a.toLowerCase().localeCompare(b.toLowerCase());
    } );

    console.log(sortedArray.join('\n'));

}

sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])