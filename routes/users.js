var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("ss", res)
  res.send([
    {
      nm: "ssa",
      nam: "xaxj"
    }
  ]);
});

router.post('/', function(req, res, next) {
  res.send([
    {
      responseCode: "OK", //ERROR
      message: ""
    }
  ]);
});

router.get('/login', function(req, res, next) {
  res.send('The list of usersrrrr');
});

router.get('/logout', function(req, res, next) {
  res.send('The list of usersrrrr');
});

module.exports = router;
