// singelton
// Object.create();

//Object Literals --> a method of object creation using a pair of curly brackets...

let mySym=Symbol("key1");

const js_user={
     name:"Praveen",
     age: 22,
     email:"f@hotmail.com",
     "full Name":"Dwivedi",
     [mySym]:"myKey1" // this is the proper way of putting symbols in object...(iterview questins).
};
console.log(js_user);


console.log(js_user.email);
console.log(js_user["email"]);
/* Both ways are good but using second is best prsctice in every case. 
    In this object only the we can't access the full Name key using . method..

*/
// Object.freeze(js_user);
// this will freeze the object passed in the function and we can't change anything in this object again.


js_user.greeting=function(){
    console.log("hello");
}
 
js_user.greeting_two=function(){
    console.log(`Hello there i am ${this.name}`);
    // for accessing any key of an object we will use this method.
}
console.log(js_user.greeting);// it will return the refrence function. it wii not gonna print anything.
console.log(js_user.greeting());
console.log(js_user.greeting_two());