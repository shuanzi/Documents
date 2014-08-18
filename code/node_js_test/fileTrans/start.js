/*
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/send"] = requestHandlers.send;
handle["/start"] = requestHandlers.receive;

server.start(router.route, handle,"receive");


var server = require("./server");
var router = require("./router");
var config = require('./config');
var requestHandlers = require("./requestHandler");

var handle = {}
handle["/send"] = requestHandlers.send;
handle["/start"] = requestHandlers.receive;

server.start(router.route, handle,"receive","http://localhost");\
*/

var sender = require('./fileSender.js');
var receiver = require('./fileReceiver.js');

sender.send();