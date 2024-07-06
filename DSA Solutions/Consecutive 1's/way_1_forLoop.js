// Find the max count of consecutive 1’s in an array ?

function maximumOccurenceInArray(array, targatedNumber) {
  let count = 0;
  array.forEach((value) => {
    if (value === targatedNumber) count = count + 1;
  });
  return count;
}

console.log(maximumOccurenceInArray([1, 2, 3, 4, 2, 3, 4, 2, 1, 1], 2));
