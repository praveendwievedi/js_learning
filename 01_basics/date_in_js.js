let my_date=new Date();
console.log(my_date.toDateString());
console.log(my_date.toISOString());
console.log(my_date.toJSON());
console.log(my_date.toLocaleDateString());
console.log(my_date.toLocaleString('en-IN'));
console.log(my_date.toLocaleTimeString());

let new_date=new Date(2024,0,23);
console.log(new_date.toDateString());

/* in case of date the month calendar starts from 0 index i.e 0th month is January */

let nw_date=new Date(2024,0,23,5,3);
console.log(nw_date.toLocaleString());

let n_date=new Date("2035-01-23");
console.log(n_date.toLocaleString());

let to_day=new Date();


console.log(to_day.getTime());
console.log(Math.floor(to_day.getTime()/1000));

let time_stamps= Date.now();

/* here it will return the number of miliseconds from 1-jan-1970 to till this time.. */

console.log(Math.floor(time_stamps/1000));

/*  use floor here inspite o ceil to get minimum second and will be easy to compare.. */