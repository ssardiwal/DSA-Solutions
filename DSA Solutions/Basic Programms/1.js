// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

function checkSquaredArray(arr1, arr2) {
  return arr1.map((item) => item * item).toString() === arr2.toString();
}

console.log(checkSquaredArray([1, 2, 3], [1, 4, 4])); // false
console.log(checkSquaredArray([1, 2, 3], [1, 4, 6])); // true
