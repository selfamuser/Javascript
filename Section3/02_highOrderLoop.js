// +++++++ FOR-OF loop +++++++++


const arr = [1,2,3,4,5,6]

for (const val of arr) {  //loop for array

    console.log(val);
    
}

const str = "Utkarsh is Cool"
for (const newChar of str) {
    
    console.log(`Charcter is ${newChar}`);
}



// +++++++ MAP ++++++++

/*
    1. Map doesn't allows repetition of values 
    2. Every value shall be unique in nature
    3. set and get function are used to add and recieve values
    4. To iterate over map
 */

const map = new Map()

map.set("Physics",100)
map.set("Chemistrt",98)
map.set("Math",100)
map.set("English",83)

console.log(map)


for(const [key,value] of map){
    console.log(`Key is ${key} and value is ${value} `);
}


/*
    Note:- Objects normally are not iterable directly

    Ex. 
    const myGame = {
        "game1" : "NFS",
        "game2" : "Tekken",
        "game3" : "Midtown Madness"
    }

    for(const [key,value] of myGame){
        console.log("Games are ${key} ${value")
    }

    IT GIVES ERROR THAT OBJECT ARE NOT ITERABLE
*/


//++++ To make object iterable

//Follow below syntax

const myGame = {
    "game1" : "NFS",
    "game2" : "Tekken",
    "game3" : "Midtown Madness"
}

for (const key in myGame) {
   console.log(myGame[key]);
}



// ++++++ FOR-IN LOOPS +++++++++++++++++++


/*
    1. In for-in loop
    2. It iterates over the keys.
    3. In case of array and strings keys begin with 0
    4. In case of objects keys are what are provided

*/

//Syntax

// for (const key in object) { 
//         const element = object[key];
// }




// ++++++ For Each Loop +++++++

//It never returns any value
//To make it return a value we need to add a condition

const month = ["jan","feb","mar","apr","jun"]


month.forEach(element => {
    console.log(`Month is ${element}`);
});

//Or

month.forEach(function (mon){
    console.log(mon);
})

//Example --
const myNum = [1,2,3,4,5,6,7,8,9]

// const newNum = myNum.filter((num)=> {
//     return num > 4
// })

const newNum = [];
myNum.forEach((num) => {
    if(num > 4){
        newNum.push(num)
    }
})

console.log((newNum));