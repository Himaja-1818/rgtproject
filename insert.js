var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb1");
for(i=1;i<=25;i++)
{
var myobj = { orderId: Math.floor(100000 + Math.random() * 900000),
              orderDate: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " +  new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
               name:'dilip',
               contact:7165987661,
               orderStatus:'success'
 };

dbo.collection("rgt").insertOne(myobj, function(err, result) {
 // if (err) throw err;
 if(err)
   {
     console.log(err);
    }
  console.log("1 document inserted");
});
}
});