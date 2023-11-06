
//Suppose a object has heavy keyname so it will be difficult to write
// objectName.keyName everytime
//So what we can do is we can destructure
//By below method.

const course = {
    courseName : "Javascript",
    price : 1000,
    courseInstructor : "Utkarsh"
}

const {courseInstructor} = course
console.log(courseInstructor);
//if we feel the above name is also big we can use below syntax
// {keyName : yourName}

const {courseInstructor : instructor} = course

console.log(instructor); 

