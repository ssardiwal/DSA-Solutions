// Write a program to remove duplicates from an array ?

function removeDuplicates(arr) {
  return arr.reduce((previousValue, currentValue, currentIndex, array) => {
    if (!previousValue.includes(currentValue)) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 2, 1]));
