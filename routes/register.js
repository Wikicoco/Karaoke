var express = require('express');
var router = express.Router();

/* POST register page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

/* POST register page. */
/*router.post('/register', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
*/
module.exports = router;
