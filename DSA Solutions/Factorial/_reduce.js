// factoial program

function factorial(n) {
  let factorialOrderArray = Array.from({ length: n }, (_, n) => n + 1);
  let result = factorialOrderArray.reduce((previous, current) => {
    return previous * current;
  }, 1);
  return result;
}
console.log("factorial is :>> ", factorial(3));
