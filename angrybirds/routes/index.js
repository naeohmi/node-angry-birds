let express = require('express');
let birds = require('../data/birds');

let router = express.Router();

//`/` should render a home page with a link to '/angry-birds'
router.get('/', function(req, res, next) {
    res.render('index', {
    	title: 'Angry-Birds',
    	env: JSON.stringify(process.env.NODE_ENV)
    });
});

module.exports = router;