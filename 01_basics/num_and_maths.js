const score=400;

const high_score=new Number(300);
/*
this method of initialising will create a number type object on which we can different prottypes function...
*/
console.log(score);
console.log(high_score);
console.log(typeof high_score);//object

/*some prototypes functions
tofixed--> this will decimal upto given value
precision.
*/
console.log(high_score.toFixed(2)); // 300.00

let num=23.8990;
console.log(num.toPrecision(3));//23.9
num=123.8990
console.log(num.toPrecision(3));//124
/*
this function will give priority to the numbers part before the decimal part..
and will return values in rouindoff when needed...
 */

let money=10000000;
console.log(money.toLocaleString());// 10,0000,000..
/* if no input passed it return string having the number in american standard.. */

console.log(money.toLocaleString('en-IN'));// 1,00,00,000..
/* this will return indian standard... */

//+++++++++++++++++++++++++++++++++ MAths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* math is an inbuilt library in javascript..

some interredting function in math library..
Math.random();
*/
console.log(Math.random());

console.log(Math.floor(Math.random())); // lower the value i.e 2l.3=21
console.log(Math.ceil(Math.random())); // increse the value i.e 21.3=22

let min=10,max=20;
console.log(min);
console.log(max);

// number we will multiply with random to get in [min,max]= max-min+1;

console.log(Math.floor(Math.random()*(max-min +1))+min); // range will [min,max]