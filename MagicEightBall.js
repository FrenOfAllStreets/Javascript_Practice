//Magic Eightball Program

let userName = 'Carlos'

//ternary expression below
userName === 'Carlos' ? console.log(`Hello ${userName}!`) : console.log('Hello');

const userQuestion = 'Will I win the lottery?'
console.log(`Carlos asked ${userQuestion}`);

//Random numbers 0-7 
const randomNumber = Math.floor(Math.random() * 8);

let eigthBall = ''

//using switch statment
switch (randomNumber) {
  case 0:
    console.log('It is certain')
    break;
  case 1:
    console.log('It is decidedly so')
    break;
  case 2:
    console.log('Reply hazy try again')
    break;
  case 3:
    console.log('Cannot predict now')
    break;
  case 4:
    console.log('Do not count on it')
    break;
  case 5:
    console.log('My sources say no')
    break;
  case 6:
    console.log('Outlook not so good')
    break;
  case 7:
    console.log('Signs point to yes')
    break;
}

//using if/else if/else statments

if (randomNumber === 0) {
  console.log('It is certain');
} else if (randomNumber === 1) {
  console.log('It is decidedly so');
} else if (randomNumber === 2) {
  console.log('Reply hazy try again');
} else if (randomNumber === 3) {
  console.log('Cannot predict now')
} else if (randomNumber === 4) {
  console.log('Do not count on it');
} else if (randomNumber === 5) {
  console.log('My sources say no');
} else if (randomNumber === 6) {
  console.log('Outlook not so good');
} else if (randomNumber === 7) {
  console.log('Signs point to yes');
}

 
//uncomment code below to see the value generated from randomNumber variable
//console.log(randomNumber);