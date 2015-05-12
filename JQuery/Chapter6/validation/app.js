/**
 * Created by caoyangkaka on 5/11/15.
 */
var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'html');
app.set('.', path.resolve(__dirname, 'views'));
app.get('/', function(req, res, next) {
    res.render('demo3');
});
app.get('/usertest', function(req, res, next) {
     var name = req.body.username;
});