const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// removes everything
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({}).then();
// Todo.findByIdAndRemove(id).then();