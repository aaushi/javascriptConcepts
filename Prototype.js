function square(num) {
  return num * num;
}

const arr = [1, 2, 3];
Array.prototype.square = square;
const res = arr.square(2);
console.log(res);
