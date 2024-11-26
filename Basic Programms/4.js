/*
Move zeroes at end
 */

function moveZeroes(list) {
  let zeroes = [];
  let nonZeroesArray = list.filter((item) => {
    if (item > 0) return item;
    else zeroes.push(item);
  });
  return [...nonZeroesArray, ...zeroes];
}
console.log(moveZeroes([1, 0, 0, 3, 0, 4, 5, 6]));
