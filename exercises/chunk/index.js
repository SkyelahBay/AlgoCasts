// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunkSlice = (arr, size) => {
  let chunkContainer = [];

  for(let i = 0; i < arr.length; i+=size){
    chunkContainer.push( arr.slice(i, i+size) );
  }
  return chunkContainer;
}



const chunkNoSlice = (arr, size) => {
  let chunkContainer = [];

  for(let i = 0; i < arr.length; i += size){ // [1,2,3,4,5,6], size = 2 -> [[1,2], [3,4], [5,6]]
    let subArray = [];

    for(let j = 0; j < size; j++){ //for(0; 0 < 2; 0++)
      if(arr[i+j]) subArray.push(arr[i+j]);
    }

    chunkContainer.push(subArray);
  }

  return chunkContainer;
}


console.log( chunkNoSlice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)  );  

module.exports = {
  chunkSlice,
  chunkNoSlice
}