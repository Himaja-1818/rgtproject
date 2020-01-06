var express = require('express');
var router = express.Router();
const mongoConnection = require('./connection').mongoConnection;

const dbName = 'mydb1';
/* GET home page. */
router.post('/insert1', function(req, res, next) {
            console.log(req.body);
    mongoConnection().then((client) => {
        const db = client.db(dbName);
        const collection = db.collection("rgt1");
var myobj = { 
                reqId:   Math.floor(100000 + Math.random() * 900000),
                criteria:  req.body,
                status:'N'
 };

 collection.insertOne(myobj, function(err, result) {
 // if (err) throw err;
 if(err)
   {
     console.log(err);
    }
  console.log(result);
  res.send('done successfully');
});

});
});

module.exports = router;
