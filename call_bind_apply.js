var emp1={name:'riya',age:29};
var emp2={name:'amisha',age:30};

function print(name,age){
    console.log(name+age);
}

print.call(emp1,emp1.name,emp1.age);

print.apply(emp2,[emp2.name,emp2.age]);

var p1=print.bind(emp1);//return a function
p1("jiya",90);
