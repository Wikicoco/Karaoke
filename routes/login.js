var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

/* POST login page. */
router.post('/', function(req, res, next) {
    res.render('index', { title: 'Post' });
});

module.exports = router;
