var mongoose = require('mongoose');

var User = mongoose.model('User', {
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// var newUser = new User({
//     user: "lola",
//     email: "lola@gmail.com"
// });

// newUser.save().then((res) => {
//     console.log('saved', res);
// }, (e) => {
//     console.log('error occured', e);
// });

module.exports = {User};