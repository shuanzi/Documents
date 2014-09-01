//client.js

/*
var io = require('socket.io/node_modules/socket.io-client')();

var client = io.connect('http://192.168.161.65', { 'reconnect': false });

client.on('connect', function (data){
	client.send("awdadevgbvgrgawerg");
})

client.on('message',function (message){
	console.log(message);

})
*/

var zmq = require('zmq')
  , sock = zmq.socket('pull');

sock.connect('tcp://127.0.0.1:3000');
console.log('Worker connected to port 3000');

sock.on('message', function(msg){
  console.log('work: %s', msg.toString());
});