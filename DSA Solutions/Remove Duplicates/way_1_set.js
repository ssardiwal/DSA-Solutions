// Write a program to remove duplicates from an array ?

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 2, 1]));
