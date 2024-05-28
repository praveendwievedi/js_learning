function user(number1,number2){
 console.log(number1+number2);
}
user // this is called as function refrenceing..
user();// this is cslled as executing the function..
let user_data=user(1,2);
//here we can use execute the data but we cannot store anything in user_data. because the function is not returning anything.
function user_content(number1,number2){
    console.log(number1+number2);
    return number1+number2;
}
user_content();// when we are not giving any arguments the it will return nan;
let uer_info=user_content(2,3);
// now user_info have the data as 5.
// if the data is disilmilar it will try to convert in one data type..i.e user_content(2,"3");

/* the things we pass in function at the time of execution is arguements.
    the elements in function is called as parameteres.
    
    all the statements after return in a function is non reachable and will never be execute..
*/

function user_log_in(name="Sam") {
    if(!name){
        // basially it is checking if the values passed are undefined or not. if undefined then if part will execute.
    }
    return `${name} just logged in`;
}
// this way of initialised parameter will take sam when nothing will br given  and will rewrite the name when some values get passed..
console.log(user_log_in());


//++++++++++++++++++++++++ array Objects in Functions.+++++++++++++++++++++++++++++++++++++++


// we get more than one arguments in the function we will handle them using the rest opertator (i.e ...).
function user_cart_price(...num) {
    return num;
}
// this method will convert all the passed arguments into a array.
// now we can give as many arguments as we want..
console.log(user_cart_price(200,500,2000));

// objects in functions

let myObj={
    username:"Praveen",
    salary: 120
};

function salary_provider(anyObject){
  return `${anyObject.username} has a salary of ${anyObject.salary}`
}
console.log(salary_provider(myObj));
console.log(salary_provider({
    username:"dwivedi",
    salary: 200
}));
// the same way we can pass an array too

let myArray=[200,300,400];
function array_showcase(getArray) {
    // i can name this parametre anything i just writing it getArray for better readablity.
    return getArray[0];
    
}

console.log(array_showcase(myArray));
console.log(array_showcase([ 1111,23455]));

