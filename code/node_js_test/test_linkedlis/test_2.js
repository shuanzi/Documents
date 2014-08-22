//test ll_01.js
var llist = require("./ll_01.js");
var htable = require("../htable_test/testhash");

var test = new llist.linklist();
var t1 = new htable.HashTable();

var tempdata ={
	dataURI : "testURI_1",
	edit_id : "tempdata",
	key: "name",
	parent : "tempdata",
	child : "tempdata1"
};

var tempdata1 ={
	dataURI : "testURI_1",
	edit_id : "tempdata1",
	key: "fiel",
	parent : "tempdata",
	child : "tempdata2"
};

var tempdata2 ={
	dataURI : "testURI_2",
	edit_id : "tempdata2",
	key: "sometag",
	parent : "tempdata1",
	child : "tempdata3"
};

var tempdata3 ={
	dataURI : "testURI_3",
	edit_id : "tempdata3",
	key: "nameasd",
	parent : "tempdata2",
	child : "tempdata4"
};

var tempdata4 ={
	dataURI : "testURI_4",
	edit_id : "tempdata4",
	key: "n12a",
	parent : "tempdata3",
	child : "tempdata5"
};

var tempdata5 ={
	dataURI : "testURI_5",
	edit_id : "tempdata5",
	parent : "tempdata4",
	child : null
};

var dataArray = [
	tempdata5,tempdata2,tempdata4,tempdata3,tempdata1
];


test.init();
//test.createFromArray(tempdata,dataArray);

//console.log(test.getNode("tempdata4"));
/*
t1.createHash(data);
test.init(tempdata);
for(var k in data){
	if(t1.get(data[k].dataURI) !== "undefined"){
		test.insert(data[k]);
	}
}
*/
//test.print();

console.log("==============");



test.insert("test_1");
//test.print();
console.log(test.tail);console.log("==============");
test.insert("test_2");
console.log(test.tail);console.log("==============");
//test.print();
test.insert("test_3");
console.log(test.tail);console.log("==============");
//test.print();
test.insert("test_4");
console.log(test.tail);console.log("==============");
//test.print();
test.insert("test_5");
console.log(test.tail);console.log("==============");
//test.print();
test.insert("test_6");
console.log(test.tail);console.log("==============");
//test.print();
test.insert("test_7");
console.log(test.tail);console.log("==============");
//test.print();

//console.log(test.head.next.data);
//console.log(test.head.next.next.data);
//console.log(test.head.next.next.next.data);