/**
 * Created by hotin on 17/05/15.
 */

// Module
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Database
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/Karaoke", {native_parser:true});

//routes
var index = require('./routes/index');
var login = require('./routes/login');
var playlist = require('./routes/playlist');
var register = require('./routes/admin');
var reservation = require('./routes/reservation');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req, res, next){
    req.db = db;
    next();
});

app.use('/', index);
app.use('/login', login);
app.use('/playlist', playlist);
app.use('/register', register);
app.use('/reservation', reservation);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

karafun();

// Karafun
function karafun(){
    try{

        var net = require('net');
        var client = net.createConnection(57570, '192.168.1.100',
            function(){
                console.log('connect to server ws');
                client.write('<action type="getCatalogList"></action>');
            }
        );

        client.on('getCatalogList', function(data) {
            console.log(data.toString());
            client.end();
        });

        client.on('end', function(){
            console.log('Disconnected from ws');
        });

/*        var socket = new WebSocket('ws://192.168.1.100:57570/');

         socket.send('<action type="getStatus"></action>');

         socket.onmessage(function() {alert(socket.message);});*/

    }catch (e)
    {
        console.log('Err: '+e.message);
    }
}

module.exports = app;
