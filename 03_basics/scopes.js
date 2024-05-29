let a=10;
var b=100;
const c=10000;

if(true){
   let a=20;
   var b=23;
}
// console.log(a);
// console.log(b);// 23 thats's why we don't use var usuaslly because it do not follow the block scope, and create bug whenever used next time.

//+++++++++++++++++++++++++++++++ Interesting facts+++++++++++++++++++++++++++++++++++++++++++++++

function addOne(num) {
    return num+1;
}
addOne(5);



const addTwo=function(num){
return num+2;
}
addTwo(5)

/* we can access the a function even if it is declared after the calling it 
 But in 2nd case we can't acces the functiion if we call it before initialisinhg it...
*/