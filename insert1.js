var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb1");
//for(i=1;i<=25;i++)
//{
var myobj = { reqId:    Math.floor(100000 + Math.random() * 900000),
              criteria:  {
                  startDate:new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " +  new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
    
                  endDate:new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " +  new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
    
                  reqStatus:'success'
              },
              status:'N'
 };

dbo.collection("rgt1").insertOne(myobj, function(err, result) {
 // if (err) throw err;
 if(err)
   {
     console.log(err);
    }
  console.log("1 document inserted");
});
//}
});