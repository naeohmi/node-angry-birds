const express = require('express');
const birds = require('../data/birds');
const router = express.Router();

//`/` should render a home page
// with a link to '/angry-birds'
router.get('/', (req, res, next) => {
    res.render('index', {
    	title: 'Angry-Birds',
    	env: JSON.stringify(process.env.NODE_ENV)
    });
});

module.exports = router;