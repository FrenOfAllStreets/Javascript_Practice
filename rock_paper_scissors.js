//Code is still a work in progress
// User Choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Error, please type: rock, paper or scissors');
    }
  };
  
  // console.log(getUserChoice('rock'));
  
  const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1: 
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  console.log(getComputerChoice())
  