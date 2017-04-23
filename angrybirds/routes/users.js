var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/birds', function(req, res, next) {
  res.render('birds', {
  	title: 'angryyy'
  });
});

module.exports = router;
