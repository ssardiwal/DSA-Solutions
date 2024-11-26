/*

Memoization is a technique for speeding up applications by caching the results of 
expensive function calls and returning them when the same inputs are used again.
*/

function customAdder() {
  let cache = {};
  return function (param) {
    if (cache[param]) {
      console.log("returned from cache :>> ");
      return cache[param];
    } else {
      let result = square(param);
      console.log("not returned from cache :>> ");
      cache[param] = result;
    }
  };
}

let adder = customAdder();

adder(2);
adder(2);
adder(3);
adder(4);
adder(3);

function square(value) {
  return value * value;
}
