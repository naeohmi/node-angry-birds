var express = require('express');
var router = express.Router();

//`/` should render a home page with a link to '/angry-birds'
router.get('/', function(req, res, next) {
    res.render('index', {
    	title: 'Angry-Birds'
    });
});

//`/angry-birds` will render a view of ALL angry birds
//has each bird's name, ability, image, and group visible on the page
//has a link to `/angry-birds/BIRDS_ID`
//There should also be a link back to `/`
router.get('/angry-birds', function(req, res, next) {
	res.render('users', { //maybe change to index (need to decide one file or multiple)
		title: 'angry-birds'
	});
});

//`/angry-birds/:id` will render a view of JUST the angry bird with the matching ID. This should have the bird's name, ability, image, and group visible on the page
//also has links back to `/` and `/angry-birds`
router.get('/angry-birds:id', function(req, res, next) {
	res.render('users', {
		title: 'angry-birds:id'
	});
});

module.exports = router;
