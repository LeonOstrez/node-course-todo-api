// const {SHA256} = require('crypto-js');
const jwt = require ('jsonwebtoken');


// var message = "I am user 1";

// var hash = SHA256(message).toString();
// console.log(hash);

var data = {
    id: 4
};

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)).toString()
// }

var token = jwt.sign(data, '123abc');

console.log(token);
var decoded = jwt.verify(token, '123abc');
console.log(decoded);