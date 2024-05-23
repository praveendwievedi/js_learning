const account_id= 12345;//cannot change it's values....
let account_email="hc@hc.com"// can change it's values , we can use this same variable name again but in another scope,unlike in var.
var account_name="hac"
account_city="jaipur"

let account_state;

/*
prefer not to use var because of block scope and functional scope issue.....
*/

console.table([account_id,account_email,account_name,account_city,account_state])


