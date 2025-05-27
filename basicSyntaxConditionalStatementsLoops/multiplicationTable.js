function multiplicationTable (arg) {
    let multiplayer1 = Number(arg);

    for (let multiplyer2 = 1; multiplyer2 <= 10; multiplyer2++){
        let product = arg * multiplyer2;
        console.log(`${multiplayer1} X ${multiplyer2} = ${product}`);
        
    }
}

multiplicationTable(5)