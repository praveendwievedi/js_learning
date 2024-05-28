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