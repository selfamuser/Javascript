const myNum = [1,2,3,4,5,6,7,8,9]

const updateNum = myNum.map( (num) => {
    return num + 10
})

console.log(updateNum);

//We can use multiple map at a time to perform various operations


const newNum = myNum
                .map((num)=> num + 10)
                .map((num)=>num * 10)
                .map((num)=>num + 20)

console.log(newNum);

