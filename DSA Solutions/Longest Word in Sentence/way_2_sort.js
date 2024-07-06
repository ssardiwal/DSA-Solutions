//Program to find longest word in a given sentence ?


function longestword(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}

console.log(longestword("The quick brown fox jumpppps over the lazy dog"));
