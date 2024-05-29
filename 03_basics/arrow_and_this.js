// this refers to the global object..

const myobj={
    usernem:"Praveen",

    welcomeMessage: function(){
        console.log(`${this.usernem} welcome to the website`);
        console.log(this);
    }
}

/* here this is reffering to the myObj's Object.. */

// console.log(myobj.welcomeMessage());
// myobj.usernem="Dwivedi";
// // here we change the value within the myObje's object that's why it will print the changed output..
// console.log(myobj.welcomeMessage());

function chai() {
    username:"dwivedi"
    console.log(this.username);
}
// chai();
// in strict mode this will not work with the function it will return undefined always.
// in normal this wii return window object..

// console.log(this);
// this wii refer to the global object.
// in node environment we will get empty object but in case of browser we will get a window object..(Interview Qustion).

// ++++++++++++++++++++++++++++++++++++++++++++++++++ Arraow Function++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// this will be formed by removing function word from the function syntax.

const adding=function(num,num2){
  return num+num2;
}
// this normal synatx of function 

const add=(num,num2)=>{return num+num2};// when we will use the curly brackets we will use return.
const addTwo=(num,num2) => (num + num2);// when we will use the parenthess we will not use return.
const add_two=(num,num2) => num+num2;
// this is an arrow function..

console.log(add(1,2));