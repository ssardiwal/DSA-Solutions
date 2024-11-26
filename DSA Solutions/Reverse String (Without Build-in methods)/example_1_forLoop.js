// Program to find Reverse of a string without using built-in method ?
function reverseString(str) {
  let reversedString = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reversedString = reversedString + str[index];
  }
  return reversedString;
}

console.log(reverseString("abcd"));
