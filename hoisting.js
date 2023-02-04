var x=7;

function getName(){
    var b=10;
    console.log(t);
    c();
    function c(){
        console.log(t);
        console.log(b);
        console.log(n)
    }
}
var t=20;
getName();
console.log(x);

/* x=7;
console.log(x);
var x; 

//7 */

/* console.log(x);
x=7;
var x;

//undefined */

//hoisted function

/* hello();

function hello(){
    console.log("hello");
}

//hello */

/* hello();

var hello=()=>{console.log("heeelllooo")} */

// this gives error hello is not a function, it is allocated a memory like a variable, hello:undefined

/* hello();

var hello=function(){console.log("heeelllooo")} */