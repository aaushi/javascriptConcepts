const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f) {
  console.log(x); //(2) [0, "Banana"]
 //[(1, "Orange")][(2, "Apple")][(3, "Mango")];
  console.log(x[1]);
  /* Banana;
  Orange;
  Apple;
  Mango; */
}
const users = [
  { firstName: "aaushi", lastName: "gupta" },
  { firstName: "aman", lastName: "bhardwaj" },
  { firstName: "aayush", lastName: "kumar" },
];
const usersIterator = users.entries();
for (i of usersIterator) {
  console.log(i);

}
