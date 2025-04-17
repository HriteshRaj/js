const myarr=[0,1,2,3,4]

const myHeros=["shaktiman","nagraj"]
console.log(myHeros);



console.log(myarr[2]);


//array methods

myarr.push(5);


myarr.unshift(99)
myarr.shift()
console.log(myarr.includes(4));

console.log(myarr.indexOf(3));

const newArr=myarr.join()
console.log(newArr);

console.log(typeof newArr);


console.log("A",myarr);
const myn1=myarr.slice(1,3);
console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3);
console.log(myarr);
console.log(myn2);


