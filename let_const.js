/* console.log(b);
var b=10;
console.log(b); */

/* console.log(a);
let a=10;
console.log(a) */

//block scope
/* 
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a); */
//console.log(b);// b is not defined
//console.log(c);

//shadowing

//illegal shadowing
var a=20;
{
    let a=30;
    console.log(a);

}
console.log(a);