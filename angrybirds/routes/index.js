var express = require('express');
var birds = require('../data/birds');

var router = express.Router();

//`/` should render a home page with a link to '/angry-birds'
router.get('/', function(req, res, next) {
    res.render('index', {
    	title: 'Angry-Birds',
    	env: JSON.stringify(process.env.NODE_ENV)
    });
});

// `/angry-birds` will render a view of ALL angry birds
// has each bird's name, ability, image, and group visible on the page
// has a link to `/angry-birds/BIRDS_ID`
// There should also be a link back to `/`
router.get('/angry-birds', function(req, res, next) {
	res.render('users', {
		title: 'All the Angry-Birds',
		birds: birds
	});
});

// //`/angry-birds/:id` will render a view of JUST the angry bird with the matching ID
//This should have the bird's name, ability, image, and group visible on the page
// //also has links back to `/` and `/angry-birds`
router.get('/angry-birds:id', function(req, res, next) {
	res.render('users', {
		title: 'angry-birds:id',
		birds: birds
	});
});

module.exports = router;