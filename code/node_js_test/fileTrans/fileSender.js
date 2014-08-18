
// fileSender.js
var net = require("net");
var fs = require('fs');
var stream = require('stream');
var config = require('./config.js');
var FILEPATH = '/home/xiquan/testFile/book.pdf';
var HOST = 'http://localhost'
//var FILEPATH = '/home/xiquan/testFile/GitHub.wps'
//var FILEPATH = '/home/xiquan/testFile/test.txt'
//var FILEPATH = '/home/xiquan/testFile/linux.zip';

var client = net.connect(
{port:8080/*config.SERVERPORT*/},
{host:HOST},
//{ allowHalfOpen: true},
function(){
	var readStream = fs.createReadStream(FILEPATH);
	readStream.on('open',function() {
		readStream.pipe(client);
		console.log('Client connected !');
	});
	readStream.on('close',function() {
//client.end();
//client.write('ended');
console.log('File tranfer done !');
});
});
client.on('end', function() {
	console.log('Client disconnected !');
});


