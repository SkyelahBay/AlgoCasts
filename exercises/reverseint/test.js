const reverseIntMethods = require('./index');

describe('#reverseIntEz', () => {

  test('it exists', () => {
    expect(reverseIntMethods.reverseIntEz).toBeDefined();
  });
  
  test('ReverseIntEz handles 0 as an input', () => {
    expect(reverseIntMethods.reverseIntEz(0)).toEqual(0);
  });
  
  test('ReverseIntEz flips a positive number', () => {
    expect(reverseIntMethods.reverseIntEz(5)).toEqual(5);
    expect(reverseIntMethods.reverseIntEz(15)).toEqual(51);
    expect(reverseIntMethods.reverseIntEz(90)).toEqual(9);
    expect(reverseIntMethods.reverseIntEz(2359)).toEqual(9532);
  });
  
  test('ReverseIntEz flips a negative number', () => {
    expect(reverseIntMethods.reverseIntEz(-5)).toEqual(-5);
    expect(reverseIntMethods.reverseIntEz(-15)).toEqual(-51);
    expect(reverseIntMethods.reverseIntEz(-90)).toEqual(-9);
    expect(reverseIntMethods.reverseIntEz(-2359)).toEqual(-9532);
  });

});

describe('#reverseInt', () => {

  test('it exists', () => {
    expect(reverseIntMethods.reverseInt).toBeDefined();
  });
  test('ReverseInt handles 0 as an input', () => {
    expect(reverseIntMethods.reverseInt(0)).toEqual(0);
  });
  test('ReverseInt flips a positive number', () => {
    expect(reverseIntMethods.reverseInt(5)).toEqual(5);
    expect(reverseIntMethods.reverseInt(15)).toEqual(51);
    expect(reverseIntMethods.reverseInt(90)).toEqual(9);
    expect(reverseIntMethods.reverseInt(2359)).toEqual(9532);
  });
  test('ReverseInt flips a negative number', () => {
    expect(reverseIntMethods.reverseInt(-5)).toEqual(-5);
    expect(reverseIntMethods.reverseInt(-15)).toEqual(-51);
    expect(reverseIntMethods.reverseInt(-90)).toEqual(-9);
    expect(reverseIntMethods.reverseInt(-2359)).toEqual(-9532);
  });

})