//secret message array project 

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// removes 'JavaScript' string from array//
secretMessage.pop();
// adds two new strings at the end of array//
secretMessage.push('to', 'Program');
// changes string 'easily' to 'right'//
secretMessage[7] = 'right';
//removes first string in array//
secretMessage.shift();
//adds new strong at the beginning of array//
secretMessage.unshift('Programming');
// removes five strings and replaces with one new string//
secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(''))

