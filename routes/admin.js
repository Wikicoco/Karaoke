var express = require('express');
var router = express.Router();

/* POST register page. */
router.get('/', function(req, res, next) {
    res.render('admin', { title: 'Admin' });
});

module.exports = router;
