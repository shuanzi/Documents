var path = require('path');
var config = require('./config');

function route(handle, pathname,host){
	if (typeof handle[pathname] == 'function') {
		handle[pathname];
	} else {
		console.log("err");
	}
}