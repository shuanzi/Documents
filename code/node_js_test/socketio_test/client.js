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
var nssocket = require('nssocket');

  //
  // Tell the server to listen on port `6785` and then connect to it
  // using another NsSocket instance.
  //


  var outbound = new nssocket.NsSocket();
  outbound.data(['you', 'there'], function (data) {
  	console.log(data)
    outbound.send(['iam', 'here'], "adwedqwedawfwrgawfrwef");
  });

  outbound.connect(6785);