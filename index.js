/*
Flattens a 2D array of numbers and then returns the product of all the
numbers in all arrays. I like how concise these advanced array methods
can allow code to be.
*/

let twoDimensionalProduct = function(arr) {
    /*
    within the main array, takes each element (which is an array) and
    returns its final product as a single element of the main array.
    */
let newArr = arr.map((el) => el.reduce((prev, next) => prev * next));
  /*
  returns the product of all the products of all the inner arrays,
  essentially as if flattening a 2D array and then multiplying all numbers
  within the array together
  */
  return newArr.reduce((acc, curr) => acc * curr);
};


//tests
let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
