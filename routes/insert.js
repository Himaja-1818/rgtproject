var express = require('express');
var router = express.Router();
const mongoConnection = require('./connection').mongoConnection;

const dbName = 'mydb1';
/* GET home page. */
router.get('/insert', function(req, res, next) {

    mongoConnection().then((client) => {
        const db = client.db(dbName);
        const collection = db.collection("rgt");
for(i=1;i<=100;i++)
{
    var myobj = { orderId: Math.floor(100000 + Math.random() * 900000),
                  orderDate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                   name:'himaja',
                   contact:9751558565,
                   orderStatus:'success'
     };
    collection.insertOne(myobj, function(err, result) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
      res.render('insertview',{
        result1:result,
       
        length:result.length
        });
    });
  };
    });
});

module.exports = router;
