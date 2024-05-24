console.log(null > 0);// false//here null is converted o zero
console.log(null == 0);//false// here null= NAN
console.log(null >= 0);//true// here null is 0

/* comparisons of different types  convert differently thats why they show different values...*/ 

console.log(undefined > 0);// false in every case
console.log(undefined == 0);
console.log(undefined >= 0);

console.log("2"==2);// this will convert the string to number and comapre...//true
console.log("2"===2);// this strict comparison here it will check the data types including the values...//false

//there is no problem in jS for normal comaprisons the main problem arises when the datatypes are different....
// but we need to avoid it for incresing the readablity of the code...