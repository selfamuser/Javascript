//NUMBER---------------------

const score = 100;
console.log(score);

const newScore = new Number(500);
console.log(newScore);

//By the above given method we can use the other kind of properties

console.log(newScore.toString());

//It give values upto given decimal places
console.log(newScore.toFixed(4));


const amount = 23.7685;

console.log(amount.toPrecision(3));

const newAmount = 1000000;

//It makes it readible and return type is string
console.log(newAmount.toLocaleString('en-IN'));



//MATH-----------------------------------


console.log(Math);

console.log(Math.abs(-19));

console.log(Math.round(4.3));//if < .5 gives lower end
console.log(Math.round(4.8));//if more than .5 gives higher end.

console.log(Math.min(2,3,4));

//Important function of number that will be mostlu used

/*
MATH RANDOM
 */

console.log(Math.random()); //GIVES VALUE BETWEEN 0 & 1

 //to generate value on aur given parameters


 const min = 100
 const max = 200

//++++++IMPORTANT++++++++//
Math.floor(( Math.random()* (max - min + 1))) + min

console.log(Math.floor(( Math.random()* (max - min + 1))) + min);