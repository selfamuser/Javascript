function calculatePrice(...num1){
    return num1;
}

console.log(calculatePrice(100,200,300));


//We can pass object as a parameter in function


const user = {
    name : "Utkarsh",
    price : 10000,
    age : 24
}

function handleUser(newuser){

    console.log(`Username is ${newuser.name}`);

}

handleUser(user);