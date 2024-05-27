const teender_user=new Object();// this is singleton method..

console.log(teender_user);//{}

/* we can use nestig objects upto any level.. */
let users={
    id:"123abc",
    fullName:{
        userName:{
         first_name:"Praveen",
         last_name:"Dwivedi"
        }
    }
};
console.log(users["fullName"]["userName"]["first_name"]);//Praveen
console.log(users.fullName ?.userName.first_name);
// ? is used in the keys of the objects to check if thses keys are present in the objects or not..
// mostly used in case if we fetch data from any API..


let obj1={1:"a",2:"b"};
let obj2={3:"a",4:"b"};
let obj3={5:"a",6:"b"};

/* merging Techniques of Object in JavaScript */

let obj4=Object.assign(obj1,obj2);
// here obj1 and obj2 merge and stored in obj1..

let obj5=Object.assign({},obj1,obj2);// better  method than above 
// here obj1 and obj2 merge and stored in new  object..

let obj6={...obj1,...obj2};
// most used method and clean one using spreaders..

let teenderUsers={
    id:"123abc",
    email:"hc@gmail.com",
    isLogged: false
}

console.log(Object.keys(teenderUsers));
// array of keys..
console.log(Object.values(teenderUsers));
// array of values
console.log(Object.entries(teenderUsers));
// array of all entries in the passed object..

// these logs will show us that evety key and values are stored in arrays anf can be accessed using indexes..


