/**
 * @Title: DataSync.js
 * @Description: Function for data sync
 * @author: yuanzhe
 * @version: 0.0.1
 **/

var msgTransfer = require("./msgtransfer");
var commonDAO = require("./DAO/CommonDAO");
var config = require("./config");

var ActionHistory = require('./DAO/ActionHistoryDAO');//
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

//Init method,retrive data from db
function syncInitActions(initCallback){
  console.log("init actions history!");
  commonDAO.findAllActionHistory(initCallback);
}

//Sync send message method
//@param Obj
//     turn to jsonStr
function syncSendMessage(address, msgObj){
	
	var msgStr = JSON.stringify(msgObj);
  	msgTransfer.sendMsg(address,msgStr);
}

//Sync delete action
function syncDeleteAction(deleteCallBack){
	//To-Do
	deleteCallBack();
}

//Sync insert action
function syncInsertAction(other_insertHistory,insertCallBack){
	commonDAO.findEachActionHistory("insert",function(my_insertHistory){
		insertCallBack(other_insertHistory,my_insertHistory);
	});
}

//Sync insert action
function syncUpdateAction(updateCallBack){
	//To-Do
	updateCallBack();
}

//Send sync request when other devices connect the net.
function syncRequest(address){
  // console.log("get address from internet discovery : " + address);
  var requestMsg = {
  	type: "syncRequest",
  	account: config.ACCOUNT
  };

  syncSendMessage(address[0],requestMsg);
}

//Confirm request
function syncResponse(msgObj, address){
	var resultValue = null;
	//ToDo something to confirm
	//example account , list for sync and so on... 
	resultValue = "OK";
	var responseMsg = {
		type: "syncResponse",
		account: config.ACCOUNT,
		result: resultValue
	};

//	var responseStr = JSON.stringify(responseMsg);
//	console.log(address);
	syncSendMessage(address,responseMsg);
}

//Check Response
function syncCheckResponse(msgObj, address){
	//TODO check response
	if (typeof(msgObj.result) != "undefined" && msgObj.result == "OK") {
		//Get and transfer actions
		var insertActions = null;
		var deleteActions = null;
		var updateActions = null;
		syncInitActions(function(insertArray, deleteArray, updateArray){
			insertActions = insertArray;
			deleteActions = deleteArray;
			updateActions = updateArray;

			var syncDataObj = {
				type: "syncStart",
				account:config.ACCOUNT,
				insertActions: insertActions,
				deleteActions: deleteActions,
				updateActions: updateActions
			};

			syncSendMessage(address, syncDataObj);
		});
	};
}

//Start sync data
function syncStart(syncData, adress){
	var insertActions = syncData.insertActions;
	var deleteActions = syncData.deleteActions;
	var updateActions = syncData.updateActions;

	console.log("insert actions: " + JSON.stringify(insertActions));
	console.log("delete actions: " + JSON.stringify(deleteActions));
	console.log("update actions: " + JSON.stringify(updateActions));

	//Sync data, delete > insert > update
	syncDeleteAction(function(){

		//Retrive actions after delete, start to sync insert actions 
		syncInsertAction(insertActions,function(insertActions,my_insertHistory){
			insertActions.forEach(function(item){
				if(isExist(my_insertHistory,item.dataURI)){
					console.log('---nothing new---');
				}else{
					console.log('---something new---');
					console.log('We got a new item: '+item);
					ActionHistory.createInsertItem(item.dataURI);
				};
			});
			////Retrive actions after insert, start to sync update actions 
			syncUpdateAction(function(){

			});
		});
	});
}

//check is exist or not
function isExist(List,dataURI){
	var flag = false;
	List.forEach(function(listItem){
		if(dataURI === listItem.dataURI){
			flag = true;
		}
	});
	return flag;
};

//Sync complete
function syncComplete(){
	//To-Do
}

//Export method
exports.syncStart = syncStart;
exports.syncRequest = syncRequest;
exports.syncResponse = syncResponse;
exports.syncCheckResponse = syncCheckResponse;