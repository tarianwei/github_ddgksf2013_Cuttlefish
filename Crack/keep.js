/*
*[rewrite_remote]
*^https:\/\/api\.gotokeep\.com\/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/keep.js
*[mimt]
*hostname = api.gotokeep.com
*/

re('"payMode":"\\w+"','"payMode":"none"')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
} 
