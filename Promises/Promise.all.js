let rejectPr = new Promise((resolve, reject) => {
  reject("rejected");
});
let pr1 = new Promise((resolve, reject) => {
  resolve("resolve pr1");
});

let pr2 = new Promise((resolve, reject) => {
  resolve("resolve pr2");
});

Promise.all([rejectPr, pr1, pr2]).then(
  (resolve) => {
    console.log(resolve);
  }
);
//console.log(all)
