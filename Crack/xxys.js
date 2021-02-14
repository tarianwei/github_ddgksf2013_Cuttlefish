
// ==UserScript==
// @Name              小小影视 unlock Vip&免广告
// @Author            Cuttlefish
// @TgChannel         https://t.me/ddgksf2021
// @WechatID          公众号墨鱼手记
// @UpdateTime        20210214      
// ==/UserScript==

const path1 = "/ucp/index";
const path2 = "init";
const ad = "getGlobalData";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.data.uinfo["down_daily_remainders"] = "678";
 	obj.data.uinfo["play_daily_remainders"] = "876";
	obj.data.uinfo["curr_group"] = "5";
	obj.data.user["isvip"] = "1";
 	obj.data.user["goldcoin"] = "666";
}
if ($request.url.indexOf(path2) != -1){
 	obj.data.user["isvip"] = "1";
 	obj.data.user["goldcoin"] = "766";
}
if ($request.url.indexOf(ad) != -1) {
	delete obj.data.iOS_adgroups;
	delete obj.data.Android_adgroups;
	delete obj.data.sdkrows_iOS;
	delete obj.data.sdkrows_Android;
	obj.data.app_launch_times_adshow=-1;
}
$done({body: JSON.stringify(obj)});
