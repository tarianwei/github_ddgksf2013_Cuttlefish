// ==UserScript==
// @Name              QX每日色图脚本
// @Author            Cuttlefish
// @Tg group          https://t.me/ddgksf2013
// @WechatID          公众号墨鱼手记
// @UpdateTime        20201008
// @Appreciation      觉得不错👏去公众号菜单栏赞助我喝杯🥤
// @OriginURL         https://api.lolicon.app/#/setu
// @Quota             300次/天
// @ScriptURL         https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Conf/Quan_crack.conf
// ==/UserScript==

let userApikey   = '' //请在 Telegram 内使用 @loliconApiBot 申请，
let userR18      = 2 //18禁为1 非为0 2是混合
let userKeyword  = ''//搜索关键字
let userNum      = 1 //一次返回的结果数量，范围为1到10
var request = {
    url:encodeURI("https://api.lolicon.app/setu?apikey=" + userApikey + "&r18=" + userR18 + "&keyword=" + userKeyword),
    header:{  
     "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1"
    },
}
$task.fetch(request).then(response => {
	let obj = JSON.parse(response.body);
	if(obj.code == 0)
	{
		let pictureURL = encodeURI(obj.data[0].url);
		console.log(pictureURL);
		$notify("每日色图", "", "", {'open-url':pictureURL,'media-url':pictureURL}); // Success
	}
	else
	{
		 $notify("Title", "Subtitle", reason.error); // Error!
	}
}
$done({});
