const arr = [5, 1, 8, 3, 6];

/* const arrmap=arr.map(function binary(x){
    return x.toString(2);
}); */

const arrmap = arr.map((x) => x.toString(2));
console.log(arrmap);

const arrfilter = arr.filter((x) => x % 2); //odd numbers
console.log(arrfilter);

const arrfilter2 = arr.filter((x) => x % 2 === 0); // even numbers
console.log(arrfilter2);

//
const reduceExampleSum = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(reduceExampleSum);

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
const findmaxarr = findMax(arr);
//console.log(findmaxarr);
const reduceExampleMax = arr.reduce(function (max, curr) {
  if (max < curr) {
    max = curr;
  }
  return max;
}, 0);
console.log(reduceExampleMax);

const users = [
  { name: "Aaushi", lname: "gupta", city: "blr" ,age:29},
  { name: "Aman", lname: "bhardwaj", city: "blr",age:29 },
  { name: "amisha", lname: "kumari", city: "rnc" ,age:30},
  { name: "indira", lname: "priya", city: "del" ,age:31},
];


const usermap=users.map(x=>x.name+x.lname);
console.log(usermap);

const userfilter=users.filter(x=>x.city==='blr');
console.log(userfilter);

/* const userreduce=users.reduce(function(acc,curr){
    let count=0;
    //acc.push(curr.age,count++);
    acc={age:curr.age,count:count++}
    return acc;
})
console.log(userreduce);
[{age:29,count:2}]
function countage(users){


}
 */

const userfiltermap=users.filter(x=>x.age<30).map(x=>x.name);
//console.log(userfilter);

const userreduce=users.reduce(function(acc,curr){
   if(curr.age<30){
        acc.push(curr.name);
    }
    return acc;
    
},[]);
console.log(userreduce);
