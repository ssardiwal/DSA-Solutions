// factorial program

function factorial(n) {
  let array = [];
  for (let index = n; index > 0; index--) array.push(index);
  return array.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );
}

console.log(factorial(3));
