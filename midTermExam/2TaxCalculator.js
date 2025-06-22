function calculateVechicleTaxes(array) {
    let vechicleRepresentation = array.shift().split('>>');
    let totalColectionByAgency = 0;

    for (let i = 0; i < vechicleRepresentation.length; i++) {
        let exampleParts = vechicleRepresentation[i].split(' ');
        
        let carType = exampleParts.shift();
        let yearsToBePaid = Number(exampleParts.shift());
        let traveledKm = Number(exampleParts.shift());

        let totalTax = 0;
        let taxDeclinationByYear = 0;
        let taxIncreasonByKm = 0;

        switch (carType) {
            case "family":
                taxDeclinationByYear = yearsToBePaid * 5;
                taxIncreasonByKm = Math.floor(traveledKm / 3000) * 12;
                totalTax = 50 - taxDeclinationByYear + taxIncreasonByKm;
                break;
            case "heavyDuty":
                taxDeclinationByYear = yearsToBePaid * 8;
                taxIncreasonByKm = Math.floor(traveledKm / 9000) * 14;
                totalTax = 80 - taxDeclinationByYear + taxIncreasonByKm;
                break;
            case "sports":
                taxDeclinationByYear = yearsToBePaid * 9;
                taxIncreasonByKm = Math.floor(traveledKm / 2000) * 18;
                totalTax = 100 - taxDeclinationByYear + taxIncreasonByKm;
                break;
            default:
                console.log(`Invalid car type.`);
                continue;
        }

        console.log(`A ${carType} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
        

        totalColectionByAgency += totalTax;
    }

    console.log(`The National Revenue Agency will collect ${totalColectionByAgency.toFixed(2)} euros in taxes.`);
    
}

calculateVechicleTaxes([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])