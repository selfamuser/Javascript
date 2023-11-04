let score = undefined;

console.log(typeof score);

console.log(typeof(score));

let newScore = Number(score);
console.log(typeof newScore);

console.log(newScore);

//NOTES-----------

/*

WHEN WE CONVERT VARIABLE TYPE

1. When we convert string to number it gives the given number in string
    Ex :- "33" ==> 33
2. When string cannot be converted it gives NaN
    Ex :- "33Abc" ==> NaN
3. In case of Boolean values true is converted to 1 and false to 0
    Ex :- true ==> 1, false ==> 0

*/