

 setTimeout(() => {
   console.log("A");
 });

 new Promise((resolve) => {
   console.log("B");
   resolve();
 })
   .then(() => {
     console.log("C");
   })
   .then(() => {
     console.log("D");
   });

 Promise.resolve().then(() => console.log("E"));
 console.log("F");