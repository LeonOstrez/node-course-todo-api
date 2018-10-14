var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: "  Edit video  ",
//     completed: false
// });

// newTodo.save().then((result) => {
//     console.log('Saved Todo', result);
// }, (e) => {
//     console.log('Unable to save.', e);
// });

module.exports = {Todo};