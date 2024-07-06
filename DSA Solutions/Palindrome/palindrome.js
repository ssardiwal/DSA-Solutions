// How to check whether a string is palindrome or not ?

function isPalindrome(str) {
  return str.toString().split("").reverse().join("") === str.toString();
}

console.log(isPalindrome("abc")); // false
console.log(isPalindrome("cbc")); // true
console.log(isPalindrome("cbcbc")); // true
console.log(isPalindrome("abcd")); // false
console.log(isPalindrome(123)); // false
console.log(isPalindrome(12321)); // true
