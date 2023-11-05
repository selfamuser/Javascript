//String interpolation
            
const name = "Utkarsh"
const lastName = "Shukla"
const age = 24;

console.log(`Hello my name is ${name} ${lastName} and my age is ${age}`);

//best practice to use values


//TO DECLARE STRING AND USE VARIOUS PROPERTIES

const fullName = new String("  Utkarsh Shukla  ");
console.log(fullName.length);

console.log(fullName.charAt(9))
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.indexOf('S'));
console.log(fullName.substring(0,10));
console.log(fullName.slice(-5));

console.log(fullName.trim());

const url = "https://utkarsh_shukla@utkarsh.co.in/utkarsh/shukla";
console.log(url);
console.log(url.replace("utkarsh","technology"));

const str = "When there was moon it was pleasent night";
console.log(str);

//To make it a array------

const strInWords = str.split(' ');
console.log(strInWords); 


//We can use many properties if we declare string in this manner.
