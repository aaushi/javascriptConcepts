function myPromiseAll(promisesArr) {
  return new Promise((resolve, reject) => {
    const results = new Array(promisesArr.length);
    let completed = 0;

    if (promisesArr.length === 0) {
      resolve(results);
      return;
    }

    promisesArr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promisesArr.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

const promise1 = new Promise((resolve, reject) => {
  resolve("p1");
});

const promise2 = new Promise((resolve, reject) => {
  resolve("p2");
});

const promise3 = new Promise((resolve, reject) => {
  resolve("p3");
});

const promiseAll = myPromiseAll([promise1, promise2, promise3]);

promiseAll
  .then((result) => {
    console.log(result); // []
  })
  .catch((error) => {
    console.error("Promise rejection:", error);
  });
