//test.js
var test = require("./linkedlist.js")

var list = {
	_idleNext: null,
	_idlePrev: null,
	//_head: false,
	//_tail: false,
	//_edit_id: "goodtest"
}

var list_1 = {
	_edit_id: "goodtest2"
	_dataURI:1
}

var list_2 = {
	_idleNext: null,
	_idlePrev: null,
	_head: false,
	_tail: false,
	_edit_id: "goodtest2"
}

var list_3 = {
	_idleNext: null,
	_idlePrev: null,
	_head: false,
	_tail: false,
	_edit_id: "goodtest3"
}

test.init(list_1);
//test.append(list,{a:1});
//test.append(list,{a:2});




console.log(list);
/*
console.log(list._idleNext._idleNext);
console.log(list._idleNext._idleNext._idleNext);
console.log(list._idleNext._idleNext._idleNext._idleNext);

console.log(list._idlePrev);
console.log(list._idlePrev._idlePrev);
console.log(list._idlePrev._idlePrev._idlePrev);
*/