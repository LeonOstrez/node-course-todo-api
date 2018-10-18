// const {SHA256} = require('crypto-js');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$ZrZZM/POdDiRmuwgrmtcLuq4RrpqJmulray3yGMhthpZgs16C1jEu';

bcrypt.compare(password, hashedPassword,(err, res) => {
    console.log(res);
});


// var message = "I am user 1";

// var hash = SHA256(message).toString();
// // console.log(hash);

// var data = {
//     id: 4
// };

// // var token = {
// //     data,
// //     hash: SHA256(JSON.stringify(data)).toString()
// // }

// var token = jwt.sign(data, '123abc');

// console.log(token);
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);