function looping(...data) {
  let i = 0;
  while (i < 100000) i++;
  return data;
}

function memoize(fn) {
  let cache = new Map();
  return (...args) => {
    console.log(cache);
    const key = JSON.stringify(args);
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
console.log(calculate(10, 20, 30, 40));
console.log(calculate(10, 20, 30, 40));
