//client.js
var io = require('socket.io')();

var client = io.connect('http://127.0.0.1:1337', { 'reconnect': false });

client.on('connect', function (data){
	client.send("awdadevgbvgrgawerg");
})

client.on('message',function (message){
	console.log(message);
})