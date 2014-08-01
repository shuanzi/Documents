var net = require('net')
var config = require('./config')


function initServer(getOtherInsertList,IP){
	var server =  net.createServer(function(c) {
		//console.log('Client ' + c.remoteAddress + ' : ' + c.remotePort + ' connected!');
		var remoteAD = c.remoteAddress;
		var remotePT = c.remotePort;
	c.on('data', function(data) {
		var MSG = JSON.parse(data);
		switch(MSG[0].type)
		{
			case 'INSERTHISTORY':
			getOtherInsertList(MSG.shift());

		};

	c.on('close',function(){
			console.log('Client ' + remoteAD +  ' : ' + remotePT + ' disconnected!');
		});
	c.write('Hello!\r\n');

	c.on('error',function(){
			console.log('Unexpected Error!');
	});
//	c.pipe(c);
	});

	server.listen(config.MSGPORT, function(){
		console.log('Server Binded! '+ config.MSGPORT);
	});
});
};

function sendMsg(IP,MSG){
	if ( !net.isIP(IP)) {
		console.log('Input IP Format Error!');
		return;
	};
	var  client = new net.Socket();
	client.connect(config.MSGPORT,IP,function(){
		client.write(MSG,function(){
			client.end();
		});
	});
}

exports.initServer=initServer;
exports.sendMsg=sendMsg;