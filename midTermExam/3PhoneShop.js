function buyOnlyNecessaryPhones(array) {
    let phoneList = array.shift().split(', ');

    let command = array.shift();
    while (command !== "End") {
        let commandParts = command.split(' ');
        let commandName = commandParts.shift();

        switch (commandName) {
            case "Add":
                let phone1 = commandParts.pop();
                if (!phoneList.includes(phone1)) {
                    phoneList.push(phone1);
                }
                break;
            case "Remove":
                let phone2 = commandParts.pop();
                if (phoneList.includes(phone2)) {
                    let indexOfPhone2 = phoneList.indexOf(phone2);
                    phoneList.splice(indexOfPhone2, 1);
                }
                break;
            case "Bonus":
                let phones = commandParts.pop().split(':');
                let newPhone = phones.pop()
                let oldPhone = phones.pop();
                if (phoneList.includes(oldPhone)) {
                    let indexOfOldPhone = phoneList.indexOf(oldPhone);
                    phoneList.splice(indexOfOldPhone + 1, 0, newPhone);
                }
                break;
            case "Last":
                let phone3 = commandParts.pop();
                if (phoneList.includes(phone3)) {
                    let indexOfPhone3 = phoneList.indexOf(phone3);
                    phoneList.splice(indexOfPhone3, 1);
                    phoneList.push(phone3);
                }
                break;
        }

        command = array.shift();
    }

    console.log(phoneList.join(', '));
    
}

buyOnlyNecessaryPhones((["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"])
)



