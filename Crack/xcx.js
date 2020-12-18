/*
Unlocks by Cuttlefish 公众号：墨鱼手记
*/

re('"excitationAd":"\\d"@Ad":"\d"@ad":true@AdId":"[^"]*"@adid":"[^"]*"','"excitationAd":"0"@Ad":"0"@ad":false@AdId":""@adid":""')

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
