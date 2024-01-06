/* const, var, let */

const accountId = 261104
let accountEmail = "ttf5@gmail.com"
var accountPassword = "ajay@9339"
accountCity = "Kanthalia" //we can declare variable with specify any type in JS.
let accountState; //If we don't get value to any varibale in JS then it always consider undefined as a value for that variable.

// accountId = 34555 // value change is not allowed in const.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

accountEmail = "helloji@gmail.com"
accountPassword = "newPassword"
accountCity = "91 bus stand"

/*
Prefer not to use var, because of issue in block scope and function scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])