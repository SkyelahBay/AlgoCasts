// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const charMapper = (string) => {
  let charCount = {};

  for(let char of string.replace(/[^\w]/g, '').toLowerCase()){
    charCount[char] = charCount[char] + 1 || 1
  }

  return charCount
}


const anagrams = (stringA, stringB) => {
  // to reduce the amount of repetitive code, stick the filtering in with the helper function.
  let aChars = charMapper(stringA),
      bChars = charMapper(stringB);
  
  if(Object.keys(aChars).length !== Object.keys(bChars).length) return false;

  for(let char in aChars){
    if(aChars[char] !== bChars[char]) return false;
  }

  return true;
}


module.exports = anagrams;

