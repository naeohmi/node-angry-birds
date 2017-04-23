var express = require('express');
var birds = require('../data/birds');
// console.log('==>>', birds);
var router = express.Router();

/* GET users listing. */
router.get('/angry-birds', function(req, res, next) {
  res.render('users', {
  	title: 'angryyy',
  	birds: birds
  });
});


//`/angry-birds` will render a view of ALL angry birds
//has each bird's name, ability, image, and group visible on the page
//has a link to `/angry-birds/BIRDS_ID`
//There should also be a link back to `/`
// router.get('/angry-birds', function(req, res, next) {
// 	res.render('users', { //maybe change to index (need to decide one file or multiple)
// 		title: 'angry-birds',
// 		birds: birds
// 	});
// });

module.exports = router;
