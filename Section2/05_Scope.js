if(true){
    let a = 10

    const b = 20

    var c = 30

}

// console.log(`A is ${a}`); //This will not run since it is declared inside the scope of if block
// console.log(`B is ${b}`);//This will not run since it is declared inside the scope of if block
// console.log(`C is ${c}`);//It is the issue because it doesn't follows any scope concept.


/*

    1. Any value inside the global scope can be accessed inside block scope also.
    2. If variable is declared and initialized in global scope and then also declared in local scope then it will hold different values when accessed at the respective places.

    3. In case of nested function variable/function declared in PARENT can be accessed by CHILD but Vice Versa is not applicanle.
    

*/


//Nested Scope


function one(){
    const userName = "Utkarsh"

    function two(){
        const website = "youtube"
        console.log(`Username is ${username}`)
    }
    console.log(`Website is ${website}`)

    two();
}

one();