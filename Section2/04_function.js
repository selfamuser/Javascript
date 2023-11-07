// function calculatePrice(...num1){
//     return num1;
// }

// console.log(calculatePrice(100,200,300));


// //We can pass object as a parameter in function


// const user = {
//     name : "Utkarsh",
//     price : 10000,
//     age : 24
// }

// function handleUser(newuser){

//     console.log(`Username is ${newuser.name}`);

// }

// handleUser(user);


//+++++Arrow Function+++++


const user = {
    name : "Utkarsh",
    price : 10000,
    age : 24,
    welcomeMessage : function(){
        console.log(`Hello ${this.name} to the website`);
        console.log(this);
    }
}

user.welcomeMessage();

user.name = "Sanchit"

user.welcomeMessage();


//To create arraow 

const func = () =>{
    let userName = "Utkarsh"
    console.log(this);
}
func();


// Implicit Return ------

const addTwo = (num1,num2) => num1 + num2

// In the above line we didn;t write the return keyword but we still got the answer because if we write the code in one line without return it acts as implicit return function.


console.log(addTwo(2,3));








