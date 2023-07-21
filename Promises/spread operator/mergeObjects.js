const original = { firstname: "aa", lastname: "gupta" };
const copied = { ...original };//creates a shallow copy
copied.lastname = "Singh";

console.log(copied);
const additional = { age: 28, city: "ranchi" };

const mergedObj = { ...original, ...additional };
console.log(mergedObj);
console.log(original);
const mergedObjoriginalcopied = { ...original, ...copied };
console.log(mergedObjoriginalcopied);

//***********op******* */

/* { firstname: 'aa', lastname: 'Singh' }
{ firstname: 'aa', lastname: 'gupta', age: 28, city: 'ranchi' }
{ firstname: 'aa', lastname: 'gupta' }
{ firstname: 'aa', lastname: 'Singh' } */