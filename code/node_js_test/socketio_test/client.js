//client.js

/*
var io = require('socket.io/node_modules/socket.io-client');

var client = io.connect('http://192.168.161.65:3000', { 'reconnect': false });

client.on('connect', function (data){
	client.send("awdadevgbvgrgawerg");
})

client.on('message',function (message){
	console.log(message);

})

*/
var WebSocket = require('ws');
var ws = new WebSocket('http://127.0.0.1:8080');
ws.on('open', function() {
    ws.send('something');
});
ws.on('message', function(data, flags) {
    // flags.binary will be set if a binary data is received
    // flags.masked will be set if the data was masked
});