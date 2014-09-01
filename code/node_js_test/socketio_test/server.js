//server.js

/*
var io = require('socket.io')();

io.on('connection', function(socket){
	console.log("succsess!")
	socket.emit('message', { some: 'data' });
	socket.on('message',function (message){
		console.log(message);
	})
});




io.listen(3000);
*/

var zmq = require('zmq')
  , sock = zmq.socket('push');

//sock.bindSync('tcp://127.0.0.1:3000');
//console.log('Producer bound to port 3000');

///  console.log('sending work');
//  sock.send('some work');
//}, 500);


