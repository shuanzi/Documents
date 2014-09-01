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

var nssocket = require('nssocket');

  var server = nssocket.createServer(function (socket) {
    //
    // Here `socket` will be an instance of `nssocket.NsSocket`.
    //
    socket.send(['you', 'there'],"son of bitch");
    socket.data(['iam', 'here'], function (data) {
      //
      // Good! The socket speaks our language 
      // (i.e. simple 'you::there', 'iam::here' protocol)
      //
      // { iam: true, indeedHere: true }
      //
      console.log(data);
    })
  });
  server.listen(6785);