function mileToKm(mile) {
  // validation
  if (typeof mile != "number") {
    return "Please input a number";
  }
  //conversion
  let km = mile * 1.60934;
  return km;
}
console.log(mileToKm(500));
