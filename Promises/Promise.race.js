const rejectpr = new Promise((resolve, reject) => {
  reject("rejected");
});

const rejectpr2 = new Promise((resolve, reject) => {
  reject("rejected2");
});

const rejectpr3 = new Promise((resolve, reject) => {
  reject("rejected3");
});

const resolve1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("reolving after 1 sec"), 1000);
});

const resolve2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("reolving after 3 sec"), 3000);
});

const resolve3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("reolving after 5 sec"), 5000);
});

Promise.race([resolve1, resolve2, resolve3]).then((result) => {
  console.log(result);
});