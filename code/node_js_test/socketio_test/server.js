//server.js
var io = require('socket.io')();

io.on('connection', function(socket){
	console.log("succsess!")
	socket.emit('message', { some: 'data' });
	socket.on('message',function (message){
		console.log(message);
	})
});




io.listen(3000);


