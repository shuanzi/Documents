
// fileReceiver.js
var net = require('net');
var fs = require('fs');
var config = require('./config.js');
var FILEPATH = '/home/xiquan/received/test.pdf';
//var FILEPATH = '/home/xiquan/received/test.zip';
var i=0;//flag

var server = net.createServer(function(socket) { //'connection' listener
  console.log('Socket connected !');
  var fileWriteStream = fs.createWriteStream(FILEPATH,{ flags: 'w',
    encoding: null,
    mode: 0666 });
  socket.on('data', function(data){
    if(data === 'ended'){
      fileWriteStream.end();
      console.log('end');
    }else{
i++;//
fs.appendFile(FILEPATH,data,{mode:0666});
//fileWriteStream.write(data);
console.log('Get data chunk '+i );
//console.log(data);
}
});
  socket.on('end', function() {
    fileWriteStream.end();
//server.close();
console.log('Socket disconnected !');
});
});

server.on('error', function (e) {
  if (e.code == 'EADDRINUSE') {
    console.log('Address in use, retrying...');
  }
});

server.listen(8080/*config.SERVERPORT*/, function() { //'listening' listener
  console.log('Ready to receive !');
});

