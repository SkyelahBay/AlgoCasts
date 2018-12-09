const reverseMethods = require('./index');

describe('#reverse function', () => {
  test('#reverse function exists', () => {
    expect(reverseMethods.reverse)
      .toBeDefined();
  });
  test('#reverse reverses a string', () => {
    expect(reverseMethods.reverse('abcd'))
      .toEqual('dcba');
  });
  test('#reverse reverses a string', () => {
    expect(reverseMethods.reverse('  abcd'))
      .toEqual('dcba  ');
  });
});


describe('#reverseEz function', () => {
  test('it exists', () => {
    expect(reverseMethods.reverseEz)
      .toBeDefined();
  });
  test('it reverses a string', () => {
    expect(reverseMethods.reverseEz('wafflezRock'))
      .toEqual('kcoRzelffaw');
  });
  test('it reverses a string', () => {
    expect(reverseMethods.reverseEz('superCat'))
      .toEqual('taCrepus');
  });
});


describe('#reverseAr function', () => {
  test('it exists', () => {
    expect(reverseMethods.reverseAr)
      .toBeDefined();
  });
  test('it reverses a string', () => {
    expect(reverseMethods.reverseAr('starbooks'))
      .toEqual('skoobrats');
  });
  test('it reverses a string', () => {
    expect(reverseMethods.reverseAr('cranberries'))
      .toEqual('seirrebnarc');
  });
});

