const chunkMethods = require('./index');

describe('#chuckSlice function', () => {
  test('it exists', () => {
    expect(typeof chunkMethods.chunkSlice).toEqual('function');
  });
  
  test('chunk divides an array of 10 elements with chunk size 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = chunkMethods.chunkSlice(arr, 2);
  
    expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });
  
  test('chunk divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3];
    const chunked = chunkMethods.chunkSlice(arr, 1);
  
    expect(chunked).toEqual([[1], [2], [3]]);
  });
  
  test('chunk divides an array of 5 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunkMethods.chunkSlice(arr, 3);
  
    expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
  });
  
  test('chunk divides an array of 13 elements with chunk size 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = chunkMethods.chunkSlice(arr, 5);
  
    expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
  });
});


describe('#chuckNoSlice function', () => {
  test('it exists', () => {
    expect(typeof chunkMethods.chunkNoSlice).toEqual('function');
  });
  
  test('chunk divides an array of 10 elements with chunk size 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = chunkMethods.chunkNoSlice(arr, 2);
  
    expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });
  
  test('chunk divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3];
    const chunked = chunkMethods.chunkNoSlice(arr, 1);
  
    expect(chunked).toEqual([[1], [2], [3]]);
  });
  
  test('chunk divides an array of 5 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunkMethods.chunkNoSlice(arr, 3);
  
    expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
  });
  
  test('chunk divides an array of 13 elements with chunk size 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = chunkMethods.chunkNoSlice(arr, 5);
  
    expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
  }); 
});
