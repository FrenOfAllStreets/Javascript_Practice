//Race Day registration program

let raceNumber = Math.floor(Math.random() * 1000);

//change values of early and age to see changes
let early = true;
let age = 19;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`Race will begin at 9:30am, your race number is ${raceNumber}`);
} 
else if (!early && age > 18) {
  console.log(`Race will begin at 11:00am, your race number is ${raceNumber}`);
}
else if (age < 18) {
  console.log(`Race will begin at 12:30pm, your race number is ${raceNumber}`);
}
else {
  console.log('Please go to registration desk');
}