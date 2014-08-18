//send.js
var send = require('./msgtransfer');
var data = "{\"type\":\"syncStart\",\"account\":\"xiquan\",\"insertList\":[{\"id\":1,\"dataURI\":\"adfadsfadf\"},{\"id\":2,\"dataURI\":\"testInsert_3\"},{\"id\":3,\"dataURI\":\"testInsert_4\"},{\"id\":4,\"dataURI\":\"testInsert_2\"},{\"id\":5,\"dataURI\":\"testInsert_1\"},{\"id\":6,\"dataURI\":\"testInsert_5\"},{\"id\":7,\"dataURI\":\"testInsert_8\"},{\"id\":8,\"dataURI\":\"testInsert_6\"}]}"
var IP ='127.0.0.1';


send.sendMsg(IP,data);
