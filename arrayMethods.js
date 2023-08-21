const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fs = fruits.toString();
console.log(fs);

const fj = fruits.join("*");
console.log(fj);

fruits.pop();
console.log(fruits);
fruits.push("chiku");
console.log(fruits);

fruits.shift();
console.log(fruits);
fruits.unshift("cherry");
console.log(fruits);

const abc = ["we", "are", "people"];
const xyz = ["of", "India"];
const pledge = abc.concat(xyz);
console.log(pledge);

const add = xyz.concat("jkl");
console.log(add);

const all = abc.concat(xyz, add);
console.log(all);

const flatting = [[3, 4], [30, 40, 50], [90]];
const farray = flatting.flat();
console.log(farray);

const flattingNested = [[3, 4], [30, [40, 10, [20, 60], 80], 50], [90]];
const farrayNested = flattingNested.flat();
console.log(farrayNested);

const farrayNested2 = flattingNested.flat(2);
console.log(farrayNested2);

const farrayNested3 = flattingNested.flat(3);
console.log(farrayNested3);

const arrayForSplice = ["Banana", "Orange", "Apple", "Mango"];
const afterSplice = arrayForSplice.splice(0, 2);
console.log(afterSplice);
console.log(arrayForSplice);
console.log("=========");
const arrayForSlice = ["Banana", "Orange", "Apple", "Mango"];
const afterSlice = arrayForSlice.slice(0, 2);
console.log(afterSlice);
console.log(arrayForSlice);
