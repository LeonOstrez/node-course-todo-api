const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to db');
    }

    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // db.collection('Users').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        name: "Leon"
    }).then((result) => {
        console.log(result);
    });
    
    client.close();
});