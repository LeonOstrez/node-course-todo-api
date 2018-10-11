//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to db');
    }

    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something else to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name: 'Leon',
    //     age: 28,
    //     location: 'Croatia'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('you failed!');
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });
    
    client.close();
});