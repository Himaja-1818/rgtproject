var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var async = require('async');

var jsonexport = require('jsonexport');

MongoClient.connect(url, function(err, db) {
    const skipValue = [0,25,50,75];
  if (err) throw err;
  var dbo = db.db("mydb1");
  async.each(skipValue, function(eachElement, callback) {
     dbo.collection("rgt1").findOne({status:'N'},function(err, result) {
        if (err) throw err;
        dbo.collection("rgt1").updateOne({reqId:689017},{$set:{status:'P'}},function(err, result) {
            if (err) throw err;
              dbo.collection("rgt").find( { projection: { _id: 0 } }).limit(25).skip(eachElement).toArray(function(err, result) {
             if (err) throw err;
             console.log(result);
           db.close();
  jsonexport(result,function(err, csv){
    if(err) return console.log(err);
    //console.log(csv);

  
fs.appendFile('sample4.csv',csv, 'utf8',
   // callback function
   function(err) { 
       if (err) throw err;
       // if no error
       console.log("Data is appended to file successfully.");
       callback();
   });
});
             });
            });
 });
  },(err) => {
    dbo.collection("rgt1").updateOne({reqId:689017},{$set:{status:'Y'}},function(err, result) {
        if (err) throw err;
  
    console.log('DONE');
  });
})
})