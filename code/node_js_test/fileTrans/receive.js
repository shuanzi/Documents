//receive
var receiver = require('./fileTransfer.js');
var FILEPATH = '/home/xiquan/received/linux.zip';
var HOST = '127.0.0.1';
receiver.startReceiving(FILEPATH,HOST);

