const array = [1, 2, 3, 4, 6, 32, 45];
const [a, b, c, ...d] = array;
console.log(a, b, c, d); // 1 2 3 [4, 6, 32, 45]

const [e, , , ...f] = array;
console.log(e, f);// 1 [4, 6, 32, 45]


const obj = { r: 2, s: 3 };
const { r, s } = obj;
console.log(r, s); //2 3

const arr = [1, 4, 5];
const convertToObj = { ...arr };
console.log(convertToObj);// {0: 1, 1: 4, 2: 5}