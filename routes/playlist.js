var express = require('express');
var router = express.Router();

///Page
/* GET playlist Page. */
router.get('/', function(req, res, next) {
    var playlistof = 'Pseudo';
    var playlistTitle = 'Playlist ';
    var enCours = 'En cours ';
    var eventName = 'Event Title';
    var title = 'Playlist';
    var karaoke = ' Karaoke';
    var pseudo = ' Pseudo';
    res.render('playlist', { title: title, karaoke:karaoke, pseudo:pseudo , playlistof: playlistof, eventName:eventName , playlistTitle:playlistTitle, enCours:enCours });
});


//////////////////////////////////////////////

/// Get Item List
/* GET users Item */
router.get('/userslist', function(req, res) {
    var db = req.db;
    db.collection('users').find().toArray(function (err, items) {
        res.json(items);
    });
});

router.get('/userslist/:id', function(req, res) {
    var db = req.db;
    var userToFind = req.params.id;
    db.collection('users').find({'_id': userToFind}).toArray(function (err, items) {
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
