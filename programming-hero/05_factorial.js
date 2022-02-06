function factorialOf(number) {
  // checking if number is negative
  if (number < 0) {
    return "Number should be positive"
  }
  // if number is 0
  else if (number === 0) {
    return "1";
  }
  // if number is positive
  else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    return fact;
  }
}

console.log(factorialOf(10));
