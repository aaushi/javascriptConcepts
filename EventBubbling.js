window.onload=function(){const divgp = document.getElementById("grandParent");
const divp = document.getElementById("Parent");
const divc = document.getElementById("Child");
const divb = document.getElementById("buttonClick");
console.log(divgp);
divgp.addEventListener(
  "click",
  (e) => {
    console.log("grandparent clicked");
  },
  true
);
divp.addEventListener(
  "click",
  (e) => {
    console.log("parent clicked");
  },
  true
);
divc.addEventListener(
  "click",
  (e) => {
    console.log("child clicked");
  },
  true
);
divb.addEventListener(
  "click",
  (e) => {
    console.log("button clicked");
  },
  true
);
console.log("heyyyy")}