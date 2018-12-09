const fizzBuzzMethods = require('./index');

describe('#fizzBuzz function', () => {

  test('it is defined', () => {
    expect(fizzBuzzMethods.fizzBuzz).toBeDefined();
  });

  test('Calling fizzbuzz with `5` prints out 5 statements', () => {
    fizzBuzzMethods.fizzBuzz(5);
    expect(console.log.mock.calls.length).toEqual(5);
  });

  test('Calling fizzbuzz with 15 prints out the correct values', () => {
    fizzBuzzMethods.fizzBuzz(15); // run the function first
  
    // the beforeEach below will then look at the console and see what has occured, returning a mock object of the console.
    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls[1][0]).toEqual(2);
    expect(console.log.mock.calls[2][0]).toEqual('fizz');
    expect(console.log.mock.calls[3][0]).toEqual(4);
    expect(console.log.mock.calls[4][0]).toEqual('buzz');
    expect(console.log.mock.calls[5][0]).toEqual('fizz');
    expect(console.log.mock.calls[6][0]).toEqual(7);
    expect(console.log.mock.calls[7][0]).toEqual(8);
    expect(console.log.mock.calls[8][0]).toEqual('fizz');
    expect(console.log.mock.calls[9][0]).toEqual('buzz');
    expect(console.log.mock.calls[10][0]).toEqual(11);
    expect(console.log.mock.calls[11][0]).toEqual('fizz');
    expect(console.log.mock.calls[12][0]).toEqual(13);
    expect(console.log.mock.calls[13][0]).toEqual(14);
    expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');

    console.log( console.log.mock )
  });
  
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  
  afterEach(() => {
    console.log.mockRestore();
  });
});


