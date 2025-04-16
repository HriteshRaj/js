const accountId=144553
let accountEmail="hritesh@gmail.com"
var accountPassword="12345"
accountCity="cuttack"


// accountId=2
// console.log(accountId); Not Allowed because const cant change

accountEmail="hritesh1@gmail.com"
accountPassword="2313131"
console.table([accountEmail,accountPassword]);

/*
prefer not to use var
because of issue in block and functional scope
*/

let accountState;
console.log(accountState);
