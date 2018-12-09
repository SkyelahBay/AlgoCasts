const fibMethods = require('./index');

describe('#fibRecursive function', () => {
  test('it is defined', () => {
    expect(typeof fibMethods.fibRecursive).toEqual('function');
  });
  
  test('it calculates correct fib value for 1', () => {
    expect(fibMethods.fibRecursive(1)).toEqual(1);
  });
  
  test('it calculates correct fib value for 2', () => {
    expect(fibMethods.fibRecursive(2)).toEqual(1);
  });
  
  test('it calculates correct fib value for 3', () => {
    expect(fibMethods.fibRecursive(3)).toEqual(2);
  });
  
  test('it calculates correct fib value for 4', () => {
    expect(fibMethods.fibRecursive(4)).toEqual(3);
  });
  
  test('it calculates correct fib value for 15', () => {
    expect(fibMethods.fibRecursive(39)).toEqual(63245986);
  });
  
});


describe('#fibRecursiveTernary function', () => {
  test('it is defined', () => {
    expect(typeof fibMethods.fibRecursiveTernary).toEqual('function');
  });
  
  test('it calculates correct fib value for 1', () => {
    expect(fibMethods.fibRecursiveTernary(1)).toEqual(1);
  });
  
  test('it calculates correct fib value for 2', () => {
    expect(fibMethods.fibRecursiveTernary(2)).toEqual(1);
  });
  
  test('it calculates correct fib value for 3', () => {
    expect(fibMethods.fibRecursiveTernary(3)).toEqual(2);
  });
  
  test('it calculates correct fib value for 4', () => {
    expect(fibMethods.fibRecursiveTernary(4)).toEqual(3);
  });
  
  test('it calculates correct fib value for 15', () => {
    expect(fibMethods.fibRecursiveTernary(39)).toEqual(63245986);
  });
});


describe('#fibIterative function', () => {
  test('it is defined', () => {
    expect(typeof fibMethods.fibIterative).toEqual('function');
  });
  
  test('it calculates correct fib value for 1', () => {
    expect(fibMethods.fibIterative(1)).toEqual(1);
  });
  
  test('it calculates correct fib value for 2', () => {
    expect(fibMethods.fibIterative(2)).toEqual(1);
  });
  
  test('it calculates correct fib value for 3', () => {
    expect(fibMethods.fibIterative(3)).toEqual(2);
  });
  
  test('it calculates correct fib value for 4', () => {
    expect(fibMethods.fibIterative(4)).toEqual(3);
  });
  
  test('it calculates correct fib value for 15', () => {
    expect(fibMethods.fibIterative(39)).toEqual(63245986);
  });
});