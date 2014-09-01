//hashtable test file
//var testHashTable = require('./DeleteSync.js');
var test = require("./hashtable").Hashtable();
//var hashtable = require("./testhash");



var test_1 = [
	{id:"1",dataURI:"test_1"},
	{id:"2",dataURI:"test_1"},
	{id:"3",dataURI:"test_1"},
	{id:"4",dataURI:"test_1"},
	{id:"5",dataURI:"test_1"},
	{id:"6",dataURI:"test_1"},
];

var test_2 = [
	{id:"1",dataURI:"test_1"},
	{id:"2",dataURI:"test_2"},
	{id:"3",dataURI:"test_8"},
	{id:"5",dataURI:"test_0"},
	{id:"6",dataURI:"test_6"},
	
];

//var table = new test();


//table.createFromArray(test_1);
//for(var k in test_1){
//	table.put(test_1[k].dataURI,test_1[k].id);
//}

//var table_1 = testHashTable.createHash(test_1);
//var table_2 = testHashTable.createHash(test_2);
//console.log(table.entries());
//console.log(table_2);
//var t1 = new hashtable.HashTable();
var table = new test();
table.createFromArray(test_1);
//test.remove("test_6");

//var test3 = t1.getDiff(test_2,test);
console.log(table.get("test_1"));
//console.log(test);
//table.getAll();
//var diff = testHashTable.getDiff(table_2,table_1);

//console.log(diff);