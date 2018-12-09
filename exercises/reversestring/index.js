// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
const reverseEz = (str) => str.split('').reverse().join('');

const reverse = (str) => {
  let reversedString = '';

  for(let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}


const reverseAr = (str) => {
  let reversedStringHolder = [];

  for(let i = str.length - 1; i >= 0; i--) {
    reversedStringHolder.push(str[i]);
  }
  return reversedStringHolder.join('');
}


const reverseFo = (str) => {
  let reversedString = '';

  for(let character of str){
    reversedString = character + reversedString;
  }
  return reversedString;
}


module.exports = {
  reverse,
  reverseEz,
  reverseAr,
  reverseFo
}
