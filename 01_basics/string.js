const name="Praveen";
const repo_count=2;

// console.log(name+repo_count+"value");// poor way to conactenate the string not so professionsal

//string Interpolation.....
// console.log(`Hello my name is ${name} and my repo count is ${repo_count}`);// this is proper and neat way to write the concatination...

const game_name=new String("PraveenDwivedi");
/*
this method will create a object type string..
this method provide many prototypes which we can access dirstly 
examples---->
*/

// console.log(game_name.toUpperCase());// here the original string will remain same... 
// console.log(game_name.charAt(2));
// console.log(game_name.indexOf('e'));
// console.log(game_name.substring(0,4));// all char from 0-3 will appear not the 4th one....
// console.log(game_name.slice(0,4));
// console.log(game_name.slice(-14,4));


// let try_out="    Praveen   t "
// console.log(try_out); 

// console.log(try_out.trim());
 /*
 =>it will create a new copied string and original string remain intacted..
 => it will remove white spaces only when the come with line terminators..
 */

// console.log(try_out);


// console.log(typeof game_name);//object