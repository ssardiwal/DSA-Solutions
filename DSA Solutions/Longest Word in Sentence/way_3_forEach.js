//Program to find longest word in a given sentence ?

function longestword(str) {
  let longestWord = "";

  str.split(" ").forEach((value) => {
    if (value.length > longestWord.length) {
      longestWord = value;
    }
  });
  return longestWord;
}

console.log(longestword("The quick brown fox jumpppps over the lazy dog"));
