//Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

let arr1 = [0, 3, 4, 31];
let arr2 = [4, 6, 30];

mergeAndSort();
mergeUniqueAndSort();

function mergeAndSort() {
  console.log([...arr1, ...arr2].sort((a, b) => a - b));
}
function mergeUniqueAndSort() {
  console.log([...new Set([...arr1, ...arr2])].sort((a, b) => a - b));
}
