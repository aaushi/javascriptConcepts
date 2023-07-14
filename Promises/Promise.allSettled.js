let rejectPr = new Promise((resolve, reject) => {
  reject("rejected");
});
let pr1 = new Promise((resolve, reject) => {
  resolve("resolve pr1");
});

let pr2 = new Promise((resolve, reject) => {
  resolve("resolve pr2");
});

Promise.allSettled([rejectPr, pr1, pr2]).then(
  (resolve) => {
    console.log(resolve);
  }
);
//
// o/p

/* (3) [{…}, {…}, {…}]
0:{status: 'rejected', reason: 'rejected'}
1: {status: 'fulfilled', value: 'resolve pr1'}
2: {status: 'fulfilled', value: 'resolve pr2'}
*/
