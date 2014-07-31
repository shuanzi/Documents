//SyncInsert.js 
//by Xiquan at 2014.7.28
var config = require("./config");
var msgTransfer = require('./msgtransfer');
var ActionHistory = require('./DAO/ActionHistoryDAO');
var myList;

//
function test(){
	ActionHistory.createInsertItem('testInsert_1');
	ActionHistory.createInsertItem('testInsert_2');
	ActionHistory.createInsertItem('testInsert_3');
	ActionHistory.createInsertItem('testInsert_4');
	ActionHistory.createInsertItem('testInsert_5');
	console.log('hello');
};
exports.test = test;

function isExist(List,dataURI){
	var flag = false;
	List.forEach(function(listItem){
		if(dataURI === listItem.dataURI){
			flag = true;
		}
	});
	return flag;
};

function getOtherInsertList(data){
	var data_str = data.toString();
	console.log('============================='+data_str);
	var otherList_json = data;
	otherList_json.forEach(function(item){
		if(isExist(myList,item.dataURI)){
			console.log('---nothing new---');
		}else{
			console.log('---something new---');
			console.log('We got a new item: '+item);
			ActionHistory.createInsertItem(item.dataURI);
		};
	});
};

function getMyInsertList(IP){
	ActionHistory.findAllInsert(function(err,insertList){
		myList = insertList;
		if(myList != ''){
			console.log('=============================getMyInsertList');
			var MSG = {'type':'INSERTHISTORY'};
			var myList_tag = myList;
			myList_tag.unshift(MSG);
			console.log(myList_tag.toString());
			var myList_str = JSON.stringify(myList_tag);
			console.log('This is my list: '+myList_str);
			msgTransfer.sendMsg(IP,myList_str);
		}else{
			console.log('Soemthing wrong! List is empty!');
		}
		if(err){
			config.dblog(err);
		};
	});
};

function syncInsertHistory(IP){
	msgTransfer.initServer(getOtherInsertList,IP);
	getMyInsertList(IP);
};
exports.syncInsertHistory = syncInsertHistory;