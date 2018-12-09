// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // the easiest way would be to just use `return str.split('').reverse().join('')`

  let reversedString = '',
      i = str.length - 1;

  for(i; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

module.exports = reverse;
