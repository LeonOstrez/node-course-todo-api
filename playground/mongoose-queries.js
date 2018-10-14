const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5bc1ddbfedf0692c381702b0";

// if (!ObjectId.isValid(id)){
//     console.log('id not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if (!todo) {
//         return console.log('no todo');
//     };
//     console.log(todo);
// });

// Todo.findById(id).then((todoById) => {
//     if (!todoById) {
//         return console.log('no todoById');
//     };
//     console.log(todoById);
// }).catch((e)=>console.log(e));

User.findById(id).then((userById) => {
    if(!userById) return console.log('no user by id');
    console.log(userById);
}).catch((e)=>console.log(e));