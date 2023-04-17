//Basic Set List Generator for Grave Secrets//

const random = Math.floor(Math.random() * 3);

const setList1 = ['I Dont Care', 'Love Songs', 'Anxious', 'Drugs', 'Fuck Shit Up', 'Mood Ring', 'Bad Blood', 'Stuck Inside'];

const setList2 = ['Preachers Nightmare', 'Anxious', 'I Dont Care', 'Bad Blood', 'Drugs', 'Stuck Inside', 'Love Songs', 'Our Last Departure'];

const setList3 = ['Anxious', 'Preachers Nightmare', 'Love Songs', 'Drugs', 'I Dont Care', 'Bad Blood', 'Stuck Inside', 'Mood Ring'];

const setList = () => {
    if (random === 0) {
      return setList1
    }
    else if (random === 1) {
      return setList2 
    } 
    else {
      return setList3
    }
};

const generateSetList = setList();
console.log(generateSetList);