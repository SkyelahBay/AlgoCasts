const palindromeMethods = require('./index');

describe('#palindrome function', () => {

  test('it is defined', () => {
    expect(typeof palindromeMethods.palindrome).toEqual('function');
  });
  test('"aba" is a palindrome', () => {
    expect( palindromeMethods.palindrome('aba')).toBeTruthy();
  });
  test('" aba" is not a palindrome', () => {
    expect( palindromeMethods.palindrome(' aba')).toBeFalsy();
  });
  test('"aba " is not a palindrome', () => {
    expect( palindromeMethods.palindrome('aba ')).toBeFalsy();
  });
  test('"greetings" is not a palindrome', () => {
    expect( palindromeMethods.palindrome('greetings')).toBeFalsy();
  });
  test('"1000000001" a palindrome', () => {
    expect( palindromeMethods.palindrome('1000000001')).toBeTruthy();
  }); 
  test('"Fish hsif" is not a palindrome', () => {
    expect( palindromeMethods.palindrome('Fish hsif')).toBeFalsy();
  });  
  test('"pennep" a palindrome', () => {
    expect( palindromeMethods.palindrome('pennep')).toBeTruthy();
  });

});


describe('#palindromeEz function', () => {

  test('it is defined', () => {
    expect(typeof palindromeMethods.palindromeEz).toEqual('function');
  });
  test('"aba" is a palindrome', () => {
    expect( palindromeMethods.palindromeEz('aba')).toBeTruthy();
  });
  test('" aba" is not a palindrome', () => {
    expect( palindromeMethods.palindromeEz(' aba')).toBeFalsy();
  });
  test('"aba " is not a palindrome', () => {
    expect( palindromeMethods.palindromeEz('aba ')).toBeFalsy();
  });
  test('"greetings" is not a palindrome', () => {
    expect( palindromeMethods.palindromeEz('greetings')).toBeFalsy();
  });
  test('"1000000001" a palindrome', () => {
    expect( palindromeMethods.palindromeEz('1000000001')).toBeTruthy();
  }); 
  test('"Fish hsif" is not a palindrome', () => {
    expect( palindromeMethods.palindromeEz('Fish hsif')).toBeFalsy();
  });  
  test('"pennep" a palindrome', () => {
    expect( palindromeMethods.palindromeEz('pennep')).toBeTruthy();
  });
});


describe('#palindromeFo function', () => {

  test('it is defined', () => {
    expect(typeof palindromeMethods.palindromeFo).toEqual('function');
  });
  test('"aba" is a palindrome', () => {
    expect( palindromeMethods.palindromeFo('aba')).toBeTruthy();
  });
  test('" aba" is not a palindrome', () => {
    expect( palindromeMethods.palindromeFo(' aba')).toBeFalsy();
  });
  test('"aba " is not a palindrome', () => {
    expect( palindromeMethods.palindromeFo('aba ')).toBeFalsy();
  });
  test('"greetings" is not a palindrome', () => {
    expect( palindromeMethods.palindromeFo('greetings')).toBeFalsy();
  });
  test('"1000000001" a palindrome', () => {
    expect( palindromeMethods.palindromeFo('1000000001')).toBeTruthy();
  }); 
  test('"Fish hsif" is not a palindrome', () => {
    expect( palindromeMethods.palindromeFo('Fish hsif')).toBeFalsy();
  });  
  test('"pennep" a palindrome', () => {
    expect( palindromeMethods.palindromeFo('pennep')).toBeTruthy();
  });
});

describe('#palindromeNum function', () => {
  test('it is defined', () => {
    expect(typeof palindromeMethods.palindromeNum).toEqual('function');
  });
  test('the number 11211 is a palindrome', () => {
    expect( palindromeMethods.palindromeNum(11211)).toBeTruthy();
  });
  test('the number 1211 is a palindrome', () => {
    expect( palindromeMethods.palindromeNum(1211)).toBeFalsy();
  });
  test('the number 113123321311 is a palindrome', () => {
    expect( palindromeMethods.palindromeNum(11211)).toBeTruthy();
  });
});
