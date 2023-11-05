const accountId = 123;

//for const when value is assigned it cannot be changed

let accountEmail = "user1@gmail.com";
var accountPassword = "1234";
accountCity = "Kanpur";


// accountId = 2; //not allowed
// console.log(accountId); will not be printed


accountEmail = "dummy1@gmail.com";
console.log(accountEmail);

accountPassword = "4567";
console.log(accountPassword);


//NOTES ---------------

/*
1. Once a variable is declared with CONST its value cannot be modified.

2. VAR is not used because its block scope and functional scope issue.
   ONLY Use CONST AND LET for declaring the variables.

3. We can declare the variable without assigning the value then its value will be UNDEFINED in the system.


*/