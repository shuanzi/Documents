//test.js
var test = require("./linkedlist.js")

var list = {
	_dataURI: "test_01",
	_edit_id: "goodtest"

}



var array = {

}

var list_1 = {
	_edit_id: "goodtest2",
	_dataURI: "test"
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

var tmp = {
	_dataURI : "test_02",
	_edit_id : "awdw"
}

var tmp_2 = {
	_dataURI : "test_03",
	_edit_id : "iamtail_2"
}

test.init(list);
test.append(list,tmp);
test.append(list,tmp_2);
//test.append(list,{a:2});



//console.log(list._tail);
console.log(list._dataURI);
console.log(list._idleNext._dataURI);
console.log(list._idleNext._idleNext._dataURI);
console.log(list._idleNext._idleNext._idleNext._dataURI);
//cons0le.log(list._idleNext._idleNext._idleNext._idleNext);
console.log("=================");
console.log(list._dataURI);
console.log(list._idlePrev._dataURI);
console.log(list._idlePrev._idlePrev._dataURI);
console.log(list._idlePrev._idlePrev._idlePrev._dataURI);
