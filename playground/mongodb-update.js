const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to db');
    }

    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: ObjectID("5bc1bd5b595e2e6ca02af4e4")
    }, { $set: {
        name: "Leon"
        }, $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    client.close();
});