var express = require('express');
var router = express.Router();

///Page
/* GET playlist page. */
router.get('/', function(req, res, next) {
    var playlistof = 'Playlist';
    res.render('playlist', { title: 'Playlist', playlistof: playlistof });
});


/// Get Item List
/* GET users Item */
router.get('/userslist', function(req, res) {
    var db = req.db;
    db.collection('users').find().toArray(function (err, items) {
        res.json(items);
    });
});

/* GET playlist Item */
router.get('/playlist', function(req, res) {
    var db = req.db;
    db.collection('playlist').find().toArray(function (err, items) {
        res.json(items);
    });
});

/* GET Morceaux Item */
router.get('/morceauxlist', function(req, res) {
    var db = req.db;
    db.collection('morceaux').find().toArray(function (err, items) {
        res.json(items);
    });

});


module.exports = router;
