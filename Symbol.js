//A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.
//It represents a unique "hidden" identifier that no other code can accidentally access.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let id = Symbol("id");
person[id] = 140353;
console.log(person.id);//undefined
console.log(person[id]);//140353