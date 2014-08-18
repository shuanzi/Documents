var sender = require('./fileSender.js');
var receiver = require('./fileReceiver.js');
var config = require('./config');
var port = config.SERVERPORT;

function send(FILEPATH,_host){
	sender.fileSender(FILEPATH,_host);
}
exports.send = send;

function receive(FILEPATH,_host){
	receiver.fileReceiver(FILEPATH);
}
exports.receive = receive;