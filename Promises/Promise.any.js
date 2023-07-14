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

/* Promise.any([resolve1,resolve2,resolve3]).then((result)=>{
    console.log(result)
}) */
//***********o/p******
//reolving after 1 sec

/* Promise.any([rejectpr,resolve1, resolve2, resolve3]).then((result) => {
  console.log(result);
}); */

Promise.any([rejectpr,rejectpr2,rejectpr3]).then((result) => {
  console.log(result);
});

//**********o/p************** */

//Uncaught (in promise) AggregateError: All promises were rejected