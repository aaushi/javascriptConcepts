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
  false
);
divp.addEventListener(
  "click",
  (e) => {
    console.log("parent clicked");
  },
  false
);
divc.addEventListener(
  "click",
  (e) => {
    console.log("child clicked");
    e.stopPropagation();
  },
  false
);
divb.addEventListener(
  "click",
  (e) => {
    console.log("button clicked");
    e.stopPropagation();
  },
  false
);
console.log("heyyyy")}