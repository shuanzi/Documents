//fileTranfer.js
var net = require("net");
var fs = require('fs');
var stream = require('stream');
var config = require('./config.js');
var i=0;//flag

// fileSender
function sendfile(FILEPATH,_host){
  var socket = net.connect({port:8080},{host:_host})，{localAddress：'192.168.1.100'};
  socket.on('connect',function() {
    console.log('Client connected !');
    socket.write('FILEPATH'+FILEPATH);
  });
  socket.on('data',function(data){
    if(data.toString() == 'START'){
      console.log('sending started!');
      var readStream = fs.createReadStream(FILEPATH);
      readStream.on('open',function(){
        readStream.pipe(socket);
      });
      readStream.on('data',function(){
        console.log(data);
      });
      readStream.on('close',function() {

        console.log('File send done !');
        socket.end();
      });
    //readStream = fs.createReadStream(FILEPATH);
  }
});
  socket.on('end', function(){
    console.log('Client disconnected !');
  });
};
exports.sendfile = sendfile;

//get file name from path
function getFilename(FILEPATH){
  var pos = FILEPATH.length;
  while(FILEPATH.charAt(pos) != '/')
    pos--;
  return FILEPATH.substr(pos+1);
};
exports.getFilename = getFilename;

// fileReceiver
function receivefile(FILEPATH){
var server = net.createServer(function(socket) { //'connection' listener
  console.log('Socket connected !');
  var fileWriteStream;// = fs.createWriteStream(FILEPATH);
  var FILENAME = '';
  var check = '';

  socket.on('data', function(data){
    //console.log(data.toString());
    var someString = data.toString();
    check = someString.substr(0,8);
    //console.log(check);
    if(check.toString() == 'FILEPATH'){
      console.log(data.toString());
      FILENAME = getFilename(data.toString());
      FILEPATH += FILENAME;
      
      console.log(FILEPATH.toString());
      console.log(FILENAME.toString());

      socket.write('START');
      //fileWriteStream = fs.createWriteStream(FILEPATH);
    }else{
      //fileWriteStream.write(data);
      fs.wrteFile(FILEPATH,data);
      //fs.appendFile(FILEPATH,data,{mode:0666});
    }
  });

  socket.on('end', function() {
  //fileWriteStream.end();
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
};
exports.receivefile = receivefile;

