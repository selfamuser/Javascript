/*

    DATES

 */

let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toLocaleString());

//Many other functions are there

//We can pass our dates also

let newDate = new Date(2024,0,18);
console.log(newDate.toDateString());

//NOTE:- In javascript month starts from 0 - 11 in case of single digit
//in case of dd-mm-yyyy month is from 01-12
//i.e 0 is january 11 is december


//TimeStamp

let myTimeStamp = Date.now();
console.log(myTimeStamp); //it gives output in millisecond from 1 Jan 1970