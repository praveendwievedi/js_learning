// Primtive data types
/* 
Number
string
boolean
null
undefined
symbol
*/
//every primitive data type will show typeof as their original type except null which will show object ...
let tempreture= null;
console.log(tempreture);//object..
let bigNumber =1234567898123412312434235424n;
console.log(typeof bigNumber);//bigInt..
// Reference (non Primitve)

/*
Array
Object
Function
*/
// every refrence data type will show typeof as object...
let seaFishes=["shark","whale"]
console.log(typeof seaFishes);// object
let myObj={
    name: "Praveen",
    age:21
}


let myFunction= function(){
    console.log("hello");
}
// console.log(typeof myFunction);//function but we call it as object function...