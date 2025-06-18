function printReceipt(input) {
    let index = 0;

    let priceWithoutTaxes = 0;
    let totalAmountOfTaxes = 0;
    
    let partPrice = input[index];
    while (partPrice !== "special" && partPrice !== "regular") {
        let price = Number(partPrice);

        if (price < 0) {
            console.log('Invalid price!');
            index++
            partPrice = input[index];
            continue;
        }

        priceWithoutTaxes += price;
        priceWithoutTaxes = Number(priceWithoutTaxes);

        let priceWithTaxes = price * 1.2;

        totalAmountOfTaxes += priceWithTaxes - price;

        index++
        partPrice = input[index];
    }

    let totalPrice = priceWithoutTaxes + totalAmountOfTaxes;

    let typeOfClient = input.pop();
    if (typeOfClient === "special") {
        totalPrice *= 0.90;
    }
  
    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
Taxes: ${totalAmountOfTaxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`);
    } 
}

printReceipt([1050,
200,
450,
2,
18.50,
16.86, 
"special"

])
