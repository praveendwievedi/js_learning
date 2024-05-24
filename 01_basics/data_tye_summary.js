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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//memory ----> stack (for Primitive) and Heap(for refrence data type)
let id="Praveen"
let another_id=id
another_id="Dwivedi"
console.log(id);
console.log(another_id);// id will be different for both because there will be no change in original value when pass by value...

let user_one={
   email:"user@gmail.com",
   age:211
}
let user_two=user_one
user_two.email="hh@hh.com"
console.log(user_one);
console.log(user_two);// email in both will be same and updated.
