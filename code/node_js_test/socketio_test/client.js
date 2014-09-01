//client.js
var io = require('socket.io/node_modules/socket.io-client')();

var client = io.connect('http://192.168.161.65', { 'reconnect': false });

client.on('connect', function (data){
	client.send("awdadevgbvgrgawerg");
})

client.on('message',function (message){
	console.log(message);

})