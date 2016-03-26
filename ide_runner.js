/**
 * Created by wizdev on 3/23/2016.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http');
    //mongoose = require('mongoose');

var  server = express(); // Set up an express server (but not starting it yet)
// configure app to use bodyParser()
// this will let us get the data from a POST
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(cors());

var port = process.env.PORT || 3001;        // set our port
server.set('port', port);
var base = '/client';

server.use('/assets', express.static(__dirname + '/assets'));
server.use('/client', express.static(__dirname + '/client'));
server.use('/images', express.static(__dirname + '/images'));
server.use('/database', express.static(__dirname + '/database'));
server.use('/', express.static(__dirname + '/'));

server.get('/', function (req, res) {
    res.sendFile('client/index.html', { root : __dirname});
});

server.listen(server.get('port'), function () {
    console.log('INFO: server is running on port ' + server.get('port'));
});

/*
 app.server.use('/', app.express.static(parentDirectory['server']));
 app.server.get('/', function (req, res) {
 res.sendFile('go-live-client/index.html', { root : __dirname});
 });
 app.server.use('/images', app.express.static(__dirname + '/images'));*/