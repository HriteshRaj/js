function sayMyName(){
    console.log("hi")
    console.log("user")
}

//sayMyName()


function add(number1,number2){
    let resu= number1+number2
    return resu
}
const result = add(2,4)
console.log(result);

function loggedin(username){
    return `${username} just loggedin`
}

console.log(loggedin("hritesh"));

function calculatePrice(val1,val2,...num){
    return num
}

console.log(calculatePrice(200,400,500));

const user={
    name:"hritesh",
    age:24
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`)
}


handleObject(user)


