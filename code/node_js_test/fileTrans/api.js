function browser(){
  var ua = window.navigator.userAgent,
      ret = "";
  if(/Firefox/g.test(ua)){
    ua = ua.split(" ");
    ret="Firefox|"+ua[ua.length-1].split("/")[1];
  }
  else if(/Fuck/g.test(ua)){
    ua = ua.split(" ");
    ret = "Fuck|"+ua[ua.length-1].split("/")[1];
  }
  else if(/MSIE/g.test(ua)){
    ua = ua.split(";");
    ret = "IE|"+ua[1].split(" ")[2];
  }
  else if(/Opera/g.test(ua)){
    ua = ua.split(" ");
    ret = "Opera|"+ua[ua.length-1].split("/")[1];
  }
  else if(/Chrome/g.test(ua)){
    ua = ua.split(" ");
    ret = "Chrome|"+ua[ua.length-2].split("/")[1];
  }
  else if(/^apple\s+/i.test(navigator.vendor)){
    ua = ua.split(" ");
    ret = "Safair|"+ua[ua.length-2].split("/")[1];
  }
  else{
    ret = "未知浏览器";
  }
  return ret.split("|");
}

functoin send(){
	
}function isLocal(){
  var localflag=0;
  if(typeof(require)=="function"){
    var apiLocalHandle = require("./backend/apiLocalHandle");
    localflag= apiLocalHandle.localflag;
  }
  if(localflag==1){
    return true;
  }
  else{
    return false;
  }
}