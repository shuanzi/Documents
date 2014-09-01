//server.js

/*
var io = require('socket.io')();

io.on('connection', function(socket){
	console.log("succsess!")
	//socket.emit('message', { some: 'data' });
	socket.on('message',function (message){
		console.log(message);
	})
});

io.listen(3000);
*/

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});
  
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });
    ws.send('something');
});