// sleep debt calculator
// else if statment
const getSleepHours = day => {
    if (day === 'Monday') {
      return 8;
    } else if (day === 'Tuesday') {
      return 6;
    } else if (day === 'Wednesday') {
      return 7;
    } else if (day === 'Thursday') {
      return 6;
    } else if (day === 'Friday') {
      return 8;
    } else if (day === 'Saturday') {
      return 9;
    } else if (day === 'Sunday') {
      return 9;
    } else {
      console.log('Please enter a day')
    }
  };
  
  // switch statement (uncomment to test)
  // const getSleepHours = day => {
  //   switch(getSleepHours) {
  //     case 'Monday':
  //       return 8;
  //       break;
  //     case 'Tuesday':
  //       return 6;
  //       break;
  //     case 'Wednesday':
  //       return 7;
  //       break;
  //     case 'Thursday':
  //       return 6; 
  //       break;
  //     case 'Friday':
  //       return 8;
  //       break;
  //     case "Saturday":
  //       return 8;
  //       break;
  //     case 'Sunday':
  //       return 8;
  //       break;
  //   }
  // };
  
  // FUnction for hours slept each day added up 
  const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  };
  
  // Ideal sleep hours function
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  //Testing getActualSleepHours & getIdealSleepHours functions
  // console.log(getActualSleepHours());
  // console.log(getIdealSleepHours());
  
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('Great Job!, You got the perfect amount sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('Wow, slept ' + (actualSleepHours - idealSleepHours) + ' hour(s) more than you needed this week.')
    } else if (actualSleepHours < idealSleepHours) {
      console.log('Uh oh.... You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  };
  
  //Test Program
  // calculateSleepDebt();
  
  //Open to code review if improvements can be made
  
  
  
  
  
  