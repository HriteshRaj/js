//singleton

//object literals


const JsUser = {
    name:"hritesh","full name":"hritesh pattanaik",
    age:24,
    location:"Cuttack",
    email:"hritesh@gmail.com",
    lastLoggedIn:["monday","tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["full name"]);


const mysym=Symbol("key1")
const user={  name:"hritesh",
    "full name":"hritesh pattanaik",
    age:24,
    [mysym]:"mykey1",
    location:"Cuttack",
    email:"hritesh@gmail.com"

}
console.log(user[mysym]);


console.log("--------------------------------------------------------------");
user.greeting= function() {
    console.log("hello user");
}
console.log(user.greeting());
user.greeting2= function() {
    console.log(`hello user,${this.name}`);

}

console.log(user.greeting2());
