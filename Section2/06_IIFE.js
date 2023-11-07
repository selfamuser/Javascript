/*

    1. IIFE = Immediately Invoke Function Expression
    2. To make a function IIFE we wrap the function in () bracket.
    3. IIFE is used to avoid the pollution created by global scope
    4. If two IIFE are called simultaneously then we need to end first IIFE with ; - "semi colon"
    5. Works with both declared and arrow function.
 */


// function print(){
//     console.log(`Function is working`);
// }()

//The above function is not correct structure of immediately invoked function.


(function print(){
    console.log(`Function is working`);
})();

(()=>{
    console.log(`Arrow function is working as IIFE`);
})();