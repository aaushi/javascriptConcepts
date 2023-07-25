function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
const sum = myFunction(5);
console.log(sum); // will return 15

const sum2 = myFunction(5, 20);
console.log(sum2); //25

const sum3 = myFunction();
console.log(sum3); //nan
