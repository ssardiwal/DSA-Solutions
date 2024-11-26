// Write a program to remove duplicates from an array ?

function removeDuplicates(arr) {
  let uniqueArray = [];
  arr.forEach((value, index) => {
    if (index === arr.lastIndexOf(value)) uniqueArray.push(value);
  });
  return uniqueArray;
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 2, 1]));
