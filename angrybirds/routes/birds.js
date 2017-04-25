require('dotenv').config();
const express = require('express');
const birds = require('../data/birds');
const router = express.Router();

// `/angry-birds` will render a view of ALL angry birds
// has each bird's name, ability, image, and group visible on the page
// has a link to `/angry-birds/BIRDS_ID`
// There should also be a link back to `/`
router.get('/', (req, res, next) => {
	res.render('birds', {
		title: 'All the Angry-Birds',
		birds: birds
	});
});

// //`/angry-birds/:id` will render a view of JUST the angry bird with the matching ID
//This should have the bird's name, ability, image, and group visible on the page
// //also has links back to `/` and `/angry-birds`
router.get('/:id', (req, res, next) => {
	let id = req.params.id;
	// res.send('I workd')
    res.render('brd', {
    	birds: birds[id-1], //thanks Gainor
    	title: 'This bird is...'
    });
});

module.exports = router;