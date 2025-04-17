const wp = new Object()
console.log(wp);



wp.id="123abc"
wp.name="sam"
wp.islLoggedIn=false
//console.log(wp);

const regularUser = {

    email:"hritesh@gmail.vom"
    ,
    fullname : {
        userfullname:{
            firstname:"hritesh"
            ,
            lastname:"pattanaik"
        }
    }


}

console.log(regularUser.fullname.userfullname.firstname);

const obj1={
  1:"a",
  2:"b"

}


const obj2={
    3:"c",
    4:"d"
  
  }

  
  //const obj3={obj1,obj2}
  const obj3=Object.assign(obj1,obj2)
  console.log(obj3);

  const obj4={...obj1,...obj2}
  console.log(obj4);

console.log('   =----------------------------------------------------------------------=');
const users=[
    {email:"hritesh",age:24}, {email:"hritesh",age:24}, {email:"hritesh",age:24} ,{email:"hritesh",age:24} ,{email:"hritesh",age:24}


]
console.log(users[2].age);



console.log(Object.keys(wp));
console.log(Object.values(wp));












  
  
