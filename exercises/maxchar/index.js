// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// also catches cases where you have 2+ characters with the same max count.
const maxChar = (str) => {

  // initial setup of variables and changing letters to be the same case
  let lowerString = str.toLowerCase(),
      charCounts = {},
      currentMax = 1,
      maxChars = [];

  // get a count of each character in the string.
  for(let char of lowerString){
    // since adding to an undefined value returns null / NaN, having || 1 will set it to 1.
    charCounts[char] = charCounts[char] + 1 || 1
  }

  // enumerate over every character and find the most common ones.
  for(let char in charCounts){
    if(charCounts[char] === currentMax) maxChars.push(char) // if there is a tie

    if(charCounts[char] > currentMax){
      maxChars = [];                     // reset the array.
      currentMax = charCounts[char];     // set the new max.
      maxChars.push(char);               // push the character.
    }
  }

  //return it :)
  return maxChars
}


module.exports = {
  maxChar
}
