function gladiatorInventory(array) {
    let equipmentArray = array.slice();
    let inventory = equipmentArray
        .shift()
        .split(' ');

    for (let i = 0; i < equipmentArray.length; i++) {
        let command = equipmentArray[i].split(' ');
        let commandName = command.shift();
        let equipmentItem = command.pop();

        switch (commandName) {
            case 'Buy':
                if (!inventory.includes(equipmentItem)) {
                    inventory.push(equipmentItem);
                }
                break;
            case 'Trash':
                let indexTrash = inventory.indexOf(equipmentItem);
                if (indexTrash !== -1) {
                    inventory.splice(indexTrash, 1);
                }
                break;
            case 'Repair':
                let indexRepair = inventory.indexOf(equipmentItem);
                if (indexRepair !== -1) {
                    let repairedItem = inventory.splice(indexRepair, 1);
                    inventory.push(...repairedItem);
                }
                break;
            case 'Upgrade':
                let equipmentUpdate = equipmentItem.split('-');
                let item = equipmentUpdate.shift();
                let upgrade = equipmentUpdate.pop();
                let indexUpgrade = inventory.indexOf(item);
                
                if (indexUpgrade !== -1) {
                    inventory.splice(indexUpgrade + 1, 0, `${item}:${upgrade}`);
                }
                break;

        }
    }


    console.log(inventory.join(' '));
    
}
    gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade Spear-Steel']



)
    