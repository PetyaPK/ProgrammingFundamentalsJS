function goShopping(array) {
    let shoppingList = array.shift().split('!');


    let command = array.shift();
    while (command !== "Go Shopping!") {
        let commandParts = command.split(' ');
        let commandName = commandParts.shift();
        let commandProduct = commandParts.shift();


        switch (commandName) {
            case "Urgent":
                if (!shoppingList.includes(commandProduct)) {
                    shoppingList.unshift(commandProduct);
                }
                break;
            case "Unnecessary":
                if (shoppingList.includes(commandProduct)) {
                    let indexProduct = shoppingList.indexOf(commandProduct);
                    shoppingList.splice(indexProduct, 1);
                }
                break;
            case "Correct":
                if (shoppingList.includes(commandProduct)) {
                    let indexOld = shoppingList.indexOf(commandProduct);
                    commandProduct = commandParts.shift();
                    shoppingList.splice(indexOld, 1, commandProduct);
                }
                break;
            case "Rearrange":
                if (shoppingList.includes(commandProduct)) {
                    let indexOld = shoppingList.indexOf(commandProduct);
                    shoppingList.splice(indexOld, 1);
                    shoppingList.push(commandProduct);
                }
                break;
        }

        command = array.shift();
    }

    console.log(shoppingList.join(', '));

}

goShopping((["Tomatoes!Potatoes!Bread",
"Correct Tomatoes Onion",
"Go Shopping!"])

)