// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedString = '';

  for(let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}


const reverseEz = (str) => str.split('').reverse().join('');


const reverseAr = (str) => {
  let reversedStringHolder = [];

  for(let i = str.length - 1; i >= 0; i--) {
    reversedStringHolder.push(str[i]);
  }

  return reversedStringHolder.join('');
}



module.exports = {
  reverse,
  reverseEz,
  reverseAr
}
