const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydb1';

const mongoConnection = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url,{useNewUrlParser: true},function(err,client){
            if (err) {
                reject(err);
            } else {
                resolve(client);
            }
        });
    })
}
    
exports.mongoConnection = mongoConnection;