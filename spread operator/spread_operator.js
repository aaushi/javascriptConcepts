function sum(a,b,...c){
  console.log(...c)
  console.log(c[0]);
  console.log(c[1]);
  console.log(c[2]);
}
sum('a','b','c','d','e','f');


const original = { firstname: "aa", lastname: "gupta" };
log({ ...original });
function log(obj) {
  console.log(obj.firstname);
  console.log(obj.lastname);
}

//*******op******* */
/* aa
gupta */

