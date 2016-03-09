var express = require('express');
var router = express.Router();

/* GET home page. */
var count = 1 ;
router.get('/greeting', function(req, res, next) {
  res.json({"id":count++,"content":"Hello, World!"});
  //res.render('index', { title: 'Express' });
});

module.exports = router;
