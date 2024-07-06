// Program to find Reverse of a string without using built-in method ?
function reverseString(str) {
  return str.split("").reduce((previous, current) => {
    return current + previous;
  }, "");
}

console.log(reverseString("abcd"));
