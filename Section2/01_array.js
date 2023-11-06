
const arr = [1,2,3,4,5,6];

// const arr1 = arr;
// console.log(arr1);
// arr1[4] = 30;
// console.log(arr);

 /*

    Note:-  When we copy a array it makes a shallow copy
    Which means they are not given a copy instead they a are given the reference point to the original array
    Similar to storing in heap memory
    It means when we make changes in the array it is reflected in the original array also.

  */


const myArr = new Array(100,200,300);
const myArr2 = new Array('a','b','c');


//Array Functions-------

myArr.push(400); //add at last
myArr.pop() //pops from last

//To add at the start of array we use a function

myArr.unshift(800);

//To remove from the start of array

myArr.shift();

//To check wheather data is present

myArr.includes(5);

//To get the index of value

myArr.indexOf(4);


//to add all elements of array in string

const str = myArr.join(); //return string

console.log(typeof str); 


/*

    MORE ABOUT ARRAYS

*/


const marvel = ["Ironman","Thor","Black Panther","Captain America"];
const dcHeros = ["Batman","Superman","Wonder Woman"];

//It can even take array as an element

const comic = new Array();
comic.push(marvel);
comic.push(dcHeros);

console.log(comic);



//Concat of Array

const allHero = marvel.concat(dcHeros);

console.log(allHero);


//SPREADING ARRAY

const newHeros = [...marvel,...dcHeros];
console.log(newHeros);


//FLAT function

//Ife we have arrays inside array and we want to make them all in single array we can use flat function.

//Ex arr = [1,2,3,[4,5],6,7,[8,9,10,11],[12,13]];

const exArr = [1,2,3,[4,5],6,7,[8,9,10,11],[12,13]];

const flatArr = exArr.flat(Infinity);
console.log(flatArr);


/*
  To make array of characters from string
 */


const myName = "Utkarsh Shukla"

const nameArray = Array.from(myName);

console.log(nameArray);



