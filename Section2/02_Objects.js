/*

    1. Objects can be declared as literals
    2. Objects can be declared as consutructors
    3. Object declared from constructor it is called SINGLETON

 */


//-----------------OBJECT LITERALS--------------------------

//Values exists as Key-Value pair

const user = {
    firstName : "Utkarsh",
    lastName : "Shukla",
    email : "us@test.com",
    married : false,
    age : 24
};

//To access objects

// 1 . objectName.keyName
// 2 . objectName[keyName] //Here if key is string pass it as string in inverted commas


/*

+++++++++++ Important ++++++++++++

To use SYMBOL as key in Object refer below example

let sym = new Symbol("key1");
const user ={
    [sym]:"myKey1"
}

We use symbol inside square brackets as key

 */


//To not allow ammending values in object for future

//+++++++++++++++

//We can use Object.freeze(objectName)


//-------------Object Declaring using constructor-----------------

//It is ***  singleton  ***

const dataUser = new Object();

dataUser.id = "abc123"
dataUser.name = "Utkarsh"
dataUser.age = 24

console.log(dataUser);


//------To merge two or more objects

const obj1 = {
    1 : 'a',
    2 : 'b',
    3 : 'c'
}
const obj2 = {
    4 : 'd',
    5 : 'e',
    6 : 'f'
}

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);

const obj5 = {...obj1,...obj2};
console.log(obj5);



//----To get all keys and values of an object

//Object.keys(objectName)----- //return type is array
//Object.values(objectName) -----//return type is array


console.log(Object.keys(user));

console.log(Object.values(user));


//----To get key value pairs as an array from object

//Object.entries(objectName)
//return type will be [ [key1 , value1], [key2 , vallue2] ....]


console.log(Object.entries(user));


//-----To check wheather a object has specified property or not

//objectName.hasOwnProperty(propertyName); 
//return type is either true or false

console.log(user.hasOwnProperty("password"));

console.log(user.hasOwnProperty("age"));