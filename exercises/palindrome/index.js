// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindromeEz = (str) => str === str.split('').reverse().join('');
const palindromeNum = (num) => num === parseInt(num.toString().split('').reverse().join(''));


// using the new 'for of' syntax
const palindromeFo = (str) => {
  let revCount = str.length - 1; 

  for(let char of str){          
    if(char !== str[revCount]) return false;
    revCount -= 1;
  }

  return true;
}


//using .every
const palindromeEv = (str) => {
  let splitString = str.split(''); 

  return splitString.every( (char, index) => {
    char === (splitString[splitString.length - 1] - index)
  });
}


// probably the best since it only checks half the array.
const palindrome = (str) => {
  for(let i = 0; i < str.length/2; i++){
    if(str[i] !== str[(str.length - 1) - i]) return false
  }

  return true;
}


module.exports = {
  palindrome,
  palindromeEz,
  palindromeNum,
  palindromeFo
}
