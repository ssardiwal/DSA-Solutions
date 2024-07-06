function isPrime(n) {
  if (n === 1) return true;
  else {
    for (let index = 2; index < n; index++) {
      if (n % index === 0) return false;
    }
  }
  return true;
}

console.log(isPrime(9)); // false
console.log(isPrime(6)); // false
console.log(isPrime(5)); // true
console.log(isPrime(7)); // true
