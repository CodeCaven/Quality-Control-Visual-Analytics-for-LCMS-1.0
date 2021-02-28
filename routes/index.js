var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.redirect('/metabolomics');
  res.render('index');
  //res.send("To implement landing page");
});

module.exports = router;
