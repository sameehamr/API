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

router.post('/', function (req, res, next) {
    console.log("req", req.body);
    con.query("INSERT INTO property ( propertyId, room_type, rental, gender_of_tenant, location, facilities, userId) VALUES ( 200, 'full house', 200, 'F', 'kandy', 'electricity', 100 )", function (err, result) {
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
});

module.exports = router;
