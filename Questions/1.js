const student = {
  name: "abc",
  printName() {
    console.log(this);
    console.log(this.name);
  },
};

student.printName();
console.log(student.printName);
setTimeout(student.printName);

/* { name: 'abc', printName: [Function: printName] }
abc
[Function: printName]
Timeout {
  _idleTimeout: 1,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 86,
  _onTimeout: [Function: printName],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 6,
  [Symbol(triggerId)]: 1
}
undefined */
