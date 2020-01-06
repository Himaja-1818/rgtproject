var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var jsonexport = require('jsonexport');

MongoClient.connect(url, function(err, db) {
    const skipValue = [0,25,50,75];
  if (err) throw err;
  var dbo = db.db("mydb1");
for(let i=0;i<skipValue.length;i++)
    {
        dbo.collection("rgt").find({orderStatus:'success'}, { projection: { _id: 0 } }).limit(25).skip(skipValue[i]).toArray(function(err, result) {
         if (err) throw err;
            console.log(result);
            db.close();
   jsonexport(result,function(err, csv){
    if(err) return console.log(err);
    //console.log(csv);
   
fs.appendFile('sample2.csv',csv, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
    });
});

  });
}
});