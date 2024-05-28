// array

const numbers=[1,2,3,4,5];

const my_heros= new Array("Hulk","jarvis");
// console.log(my_heros);

// numbers.push(10)
// console.log(numbers)

// console.log("A",numbers);
// let new_num_1=numbers.slice(1,4);
// console.log(new_num_1);
// console.log("B",numbers);

/* slice will create a copy of array include the all the numbers between  the given index */

let new_num_2=numbers.splice(1,4);
// console.log(new_num_2)
// console.log("C",numbers);
/* splice will distort the original array and create a new array of number between given indexes... */


let num=[1,2,3,5];
let num2=[6,7,8,9];

// num.push(num2);
// console.log(num);// it will create a array having another array in it...

// let num3=num.concat(num2);
// console.log(num3);// this method will return a new array that will return the both array combined...


/* best method to mix two or more arrays also called as spread method */

// let num4=[...num,...num2];// we can even add more arrays to mix them all...
// console.log(num4);

Array.isArray("praveen")//false /* this will check if   the passed value is array or not*/
 console.log(Array.from("parveen"));/* this method will create an array which is shallow copy of the passed value... */
 console.log(Array.from({name:"praveen"}));// {} we need specify otherwise it will return the empty array..
 
 let score1=100;
 let score2=200;
 let score3=300;

 console.log(Array.of(score1,score2,score3));// it will create an array having passed values irrespective of their data types...
 