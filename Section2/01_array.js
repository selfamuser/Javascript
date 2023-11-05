
const arr = [1,2,3,4,5,6];

const arr1 = arr;
console.log(arr1);
arr1[4] = 30;
console.log(arr);

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



console.log(myArr + myArr2);
