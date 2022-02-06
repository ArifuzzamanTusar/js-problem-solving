function inchToCm(inch) {
    // validation
    if (typeof inch != "number") {
        return "Please input a number";
    }
    //conversion
    let cm = inch * 2.54;
    return cm;
}
console.log(inchToCm(500));