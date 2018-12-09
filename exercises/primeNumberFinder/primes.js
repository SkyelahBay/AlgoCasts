/*
  for a given number, n, return an array containing every prime number up until that point.

  NOTE: 
    - a prime number must have exactly 2 positive divisors.
    - a prime number is only divisible by itself and one.
    - because of these, 1 is not a prime number since it's only divisible by itself.
    - the only even prime number is 2.

*/

// we can now assume that this function will never receive anything lower than 3.

const isPrime = (num) => {
  for(let i = 2; i < num; i++){
    if(num % i === 0) return false;
  }
  return true;
}


const primesOf = (num) => {
  let primes = [];

  if(num < 2) return false;
  if(num >= 2) primes.push(2); 


  for(let i = 3; i <= num; i++){
    if(isPrime(i)) primes.push(i);
  }

  return primes;
}

console.log( primesOf(11) ) // [2,3,5,7,11]