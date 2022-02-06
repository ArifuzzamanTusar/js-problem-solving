function checkEvenOdd(number) {
    // validation
    if (typeof number != "number") {
        return "Please input a number";
    }
    //even check
    if (number % 2 == 0) {
        return "Even";
    }
    //odd
    else {
        return "ODD";
    }
}
console.log(checkEvenOdd(16));
