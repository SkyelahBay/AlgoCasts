// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


const reverseIntEz = (num) => {
  if(num === 0) return 0;
  const reversedNum = parseInt(num.toString().split('').reverse().join(''));

  return num < 0 ? 0 - reversedNum : reversedNum;
}


const reverseInt = (num) => {
  if(num === 0) return 0;

  let stringNum = num.toString().split(''),
      reversedNum = '';
  
  for(let i = stringNum.length - 1; i >= 0; i--){
    reversedNum += stringNum[i];
  }

  //return num < 0 ? 0 - parseInt(reversedNum) : parseInt(reversedNum);

  // after doing some reading I came across Math.sign, which would then let you refactor the above a bit since Math.sign returns 1 or -1.
  return parseInt(reversedNum) * Math.sign(num)
}

module.exports = {
  reverseIntEz,
  reverseInt
}
