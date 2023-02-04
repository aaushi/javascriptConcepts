function sum(...inp){
  console.log(inp)
  let add=0;
  for(let i=0;i<inp.length;i++){
      add+=inp[i];
  }
  console.log(add);
}
sum(1,2,3,4,5);