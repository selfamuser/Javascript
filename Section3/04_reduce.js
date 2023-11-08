/*
SYNTAX-----

const arr = [1,2,3,4]

const initialValue = 0;
const sumWithInitial = arr.reduce(
    (accumulator,currentValue) => accumulator + currentValue, initialValue
);

console.log(sumWithInitial)

Output = 10;

*/



//Example

const shoppingCart = [
    {
        itemName : "T-Shirt",
        price : 1000
    },
    {
        itemName : "Jeans",
        price : 2000
    },
    {
        itemName : "Overcoat",
        price : 11999
    },
    {
        itemName : "Belt",
        price : 500
    }
]

const priceToPay = shoppingCart.reduce((finalPrice,item)=>{
    return finalPrice + item.price
},0)

console.log(priceToPay);