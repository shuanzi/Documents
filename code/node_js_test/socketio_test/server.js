//server.js
var io = require('socket.io')();

io.on('connection', function(socket){
	console.log("succsess!")
	socket.emit('an event', { some: 'data' });
});




io.listen(3000);


