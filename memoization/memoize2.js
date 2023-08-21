function looping(a) {
  let i = 0;
  while (i < 100000) i++;
  return a;
}

function memoize(fn) {
  let cache = new Map();
  return (...args) => {
    console.log(cache);
    const key = args[0];
    if (cache.has(key)) {
      console.log("from cache");
      return cache.get(key);
    } else {
      console.log("calculating");
      const res = fn.apply(this, args);
      cache.set(key, res);
      console.log(cache);
      return res;
    }
  };
}

const calculate = memoize(looping);
console.log(calculate(10));
console.log(calculate(10));
console.log(calculate(20));
console.log(calculate(20));
console.log(calculate(10));
//Map(0) {}
/* calculating
passes=10
Map(1) { 10 => 10 }
10
Map(1) { 10 => 10 }
from cache
10
Map(1) { 10 => 10 }
calculating
passes=20
Map(2) { 10 => 10, 20 => 20 }
20
Map(2) { 10 => 10, 20 => 20 }
from cache
20
Map(2) { 10 => 10, 20 => 20 }
from cache
10 */