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
// router.post('/', function (req, res, next) {
  
//   const data = req.body;
//   console.log("req",data);
//   con.query("INSERT INTO user ( user_role, user_name, user_password, contact_no) VALUES ('"+data.role+"', '"+data.name+"' ,'"+data.password+"', "+data.contact+" )", function (err, result) {
//   //  console.log("Number of records inserted: " + result.affectedRows);//

//     if (err) {
//       console.log(err);
//       res.send([
//         {
//           code: "ERROR",
//           message: err
//         }
//       ]);
//       return;
//     }


//     res.send([
//       {
//         code: "OK",
//         message: `Number of records inserted: ${result.affectedRows}` 
//       }
//     ])

//   });

  /* GET users listing. */
  router.get('/', function (req, res, next) { 
    console.log("tttt");
    con.query("SELECT * FROM user", function (err, result) {
    console.log(result);
    
  
      if (err) {
        console.log(err);
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
          data: result
        }
      ])
    });
    });






module.exports = router;
