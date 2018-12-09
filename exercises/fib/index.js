// --- Directions
/* 
  Print out the n-th entry in the fibonacci series.

  The fibonacci series is an ordering of numbers where
  each number is the sum of the preceeding two.

  For example, the sequence

  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

  forms the first ten entries of the fibonacci series.

  Example:
    fib(4) === 3 
*/
const fibRecursiveTernary = (num) => num >= 2 ? (fibRecursive(num - 1) + fibRecursive(num - 2)) : num;


const fibRecursive = (num) => {
  if(num < 2) return num;
  return fibRecursive(num - 1) + fibRecursive(num - 2);
}


// 0, 1, 1, 2, 3, 5, 8
const fibIterative = (num) => { //fib(3) = 2
  if(num < 2) return num; 

  let sum = 0,
      prev = 1,
      secPrev = 0;

  for(let i = 2; i <= num; i++){
    debugger
    sum = prev + secPrev;
    secPrev = prev;
    prev = sum;
  }

  return sum;
}

fibIterative(5)

module.exports = {
  fibRecursive,
  fibRecursiveTernary,
  fibIterative
}

