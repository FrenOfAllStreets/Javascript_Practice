const service = 30.0;

// Rick's function
const ricksBill = (devices = 41.67, fees = 0) => {
    const ricksBillTotal = service + devices + fees;
    return ricksBillTotal;
};
let total = ricksBill();
console.log(`Ricks bill total is ${total}`);

// Sam's function
const samsBill = (devices = 31.25, fees = 0) => {
    samsBillTotal = service + devices + fees;
    return samsBillTotal;
};
total = samsBill();
console.log();
console.log(`Sam's bill total is ${total}`);

// Ben's function
const bensBill = (devices = 31.25, insurance = 18.0, fees = 0) => {
    bensBillTotal = service + devices + insurance + fees;
    return bensBillTotal;
};
total = bensBill();
console.log();
console.log(`Ben's bill total is ${total}`);

//Alberto's function

const albertosBill = (devices = 48.42, service = 60, fees = 10) => {
    albertosBillTotal = devices + service + fees;
    return albertosBillTotal;
};
total = albertosBill();
console.log();
console.log(`Alberto's bill total is ${total}`);

// All bills combined
const combinedBill = ricksBill() + samsBill() + bensBill() + albertosBill();

console.log();
console.log(`The combined bill total is ${combinedBill}`);