function isLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return "Leap Year";
  } else {
    return "not Leap Year";
  }
}
console.log(isLeapYear(2024));
