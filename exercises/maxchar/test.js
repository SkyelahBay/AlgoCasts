const maxCharMethods = require('./index');

describe('#maxChar function', () => {

  test('maxChar function exists', () => {
    expect(typeof maxCharMethods.maxChar).toEqual('function');
  });
  
  test('Finds the most frequently used chars', () => {
    expect(maxCharMethods.maxChar('a')).toEqual(['a']);
    expect(maxCharMethods.maxChar('abcdefghijklmnaaaaa')).toEqual(['a']);
    expect(maxCharMethods.maxChar('aeeaiou')).toEqual(['a', 'e']);
    expect(maxCharMethods.maxChar('aeeaiouu')).toEqual(['a', 'e', 'u']);
  });
  
  test('Works with numbers in the string', () => {
    expect(maxCharMethods.maxChar('ab1c1d1e1f1g1')).toEqual(['1']);
  });

});
