/* 
Currying is a functional programming technique in JavaScript where a function, 
instead of taking all its arguments at once, takes the first argument and 
returns a new function that takes the next argument, and so on, 
until all arguments have been provided. This allows for more modular and reusable code.
*/

function sum1(a) {
  return function (b) {
    if (b) {
      return sum1(a + b);
    } else {
      return a;
    }
  };
}
function sum2() {
  return Object.values(arguments).reduce((previous, current) => {
    return previous + current;
  }, 0);
}
console.log("sum :>> ", sum1(1)(2)(3)(4)());
console.log("sum :>> ", sum2(1, 2, 3, 4));

// combining both

function sum(x) {
  if (arguments.length > 1) {
    return Object.values(arguments).reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
  } else {
    return function (y) {
      return y ? sum(x + y) : x;
    };
  }
}
console.log("sum :>> ", sum(1)(2)(3)(4)());
console.log("sum :>> ", sum(1, 2, 3, 4));
