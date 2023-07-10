var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "radproj@1359",
  database: "bss"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
// write to users table//
router.post('/', function (req, res, next) {
  console.log("req",  req.body);
  con.query("INSERT INTO user ( userId, user_role, user_name, user_password, contact_no) VALUES ( 100, 'owner', 'xxy','nope6', 0765748390 )", function (err, result) {
  //  console.log("Number of records inserted: " + result.affectedRows);//

    if (err) {
      res.send([
        {
          code: "ERROR",
          message: err
        }
      ]);
      return;
    }


    res.send([
      {
        code: "OK",
        message: `Number of records inserted: ${result.affectedRows}`
      }
    ])

  });
  /* GET users listing. */
  router.get('/user', function (req, res, next) {
    res.send([
      {
        nm: "ssa",
        nam: "xaxj"
      }
    ]);
  });
});

module.exports = router;
