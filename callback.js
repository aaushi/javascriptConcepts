setTimeout(function(){
    console.log("this is timer")
},5000);

function x(y){
    console.log("this is x new");
    y();
}

function y(){
    console.log("this is y new")
}

x(y);