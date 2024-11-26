//Program to find longest word in a given sentence ?


function longestword(str) {
  return str.split(" ").reduce((previousValue, currentValue) => {
    return previousValue.length < currentValue.length
      ? currentValue
      : previousValue;
  }, "");
}

// returned value in line 3 will be previousValue for next iteration
console.log(longestword("The quick brown fox jumpppps over the lazy dog"));
