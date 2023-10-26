Array.prototype.myMap = function (callback) {
  let a = [];
  for (let i = 0; i < this.length; i++) {
    a.push(callback(this[i], i, this));
  }
  return a;
};

Array.prototype.myFilter = function (callback) {
  let a = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      a.push(this[i]);
    }
  }
  return a;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (i === 0 && initialValue === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};
