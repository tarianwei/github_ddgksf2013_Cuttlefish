
// ==UserScript==
// @Name              小小影视 unlock Vip&免广告
// @Author            Cuttlefish
// @TgChannel         https://t.me/ddgksf2021
// @WechatID          公众号墨鱼手记
// @UpdateTime        20210214      
// ==/UserScript==

const path1 = "/ucp/index";
const path2 = "init";
const path3 = "/vod/reqplay/";
const path4 = "getGlobalData";
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
 	obj.data.user["goldcoin"] = "999";
}
if ($request.url.indexOf(path3) != -1){
	//obj.data="APgAAAHQADwAAA12HgAR+gAAAABVnOUNAAAJ3iQ+aPQXAAAAAAcvAQNXdFQ7BhIBYVV3UlEDOAUiVWhSHQcIU2EET1UYVgAAdlBnWh4BNwdxVyRWeVEDUwJaDABHVgMBZFI0AHMHbwdQBzQHXgd+B34HVAdBB20HUgdVB1AHdQdRB2MHawczB08HZgdzB1UHRgdsB0kHcwdNB2gHUwdSBzUHfQdAB1QHNQdNB3IHRgcyB1UHUAdWBywHbwdyB1UHVwdGB2YHNQcyB2wHMQdDB3MHPgcsB0sHVgdfB08HPgdIB2YHMQdLB3YHcwdOB14HZAdfB3UHbAd1BzEHcgdkBzUHPwc3B2sHYAdLBzAHXgdJB2AHYAdzBygHYAc6VzRSfAViBmFTSVFBA2BVSgI+V2EDAwRTBQNQTFUyAVdVYlsfUyZSFQE5WxpbFVUlAkEAU1A/WjMFc1RlUjECelduV2NXIlcHVw1XNFcHVwNXfFczVxJXJVcGVwVXNlcAVxhXP1ccVz1XEVcQV2BXMFcYVy5XblcZVxNXBVcHVx1XIVclVyJXblcuVxBXJFcOVyFXeFcgVyJXFFcDVxVXIlcYVx5XZld8VztXYVcVVxlXHVcTVzNXOVcwVxpXOVc1VydXMVckVwBXHlcEV2JXGFcRVy1XIFcZVxxXJVcyV2BXHlc4VxRXOlduVxVXYFcBVzpXZFcZVwJXDVctV29XGldlVyRXHFcDVxpXLlcPVxVXNFczV2FXNVchVxhXZVc4VzpXIFd4VwdXE1cGV25XO1c5VwNXOFcWVzFXPFckV2dXYldmVxtXElc/VyVXJ1duVzNXFlduVxFXL1cvV2FXJVdgVw9XIVcfVyNXYlcEVxJXLldmVwZXA1c5VzJXJVcyV2RXHVcbVw1XO1cBVyJXZ1cgVyFXZlcPVzFXHVcDV2JXYlcHVz5XH1dkVx1XFFcnVxZXGVchVz9XZldjV2FXYFcfV2ZXPlcUVy5XMFdqV2pT5VWfA/wG51CQAv1R4QDhAedR6gLwAIcAslCbAogA7FTrVdIF4lLpB6AF4lvgVfgA5lPcAJAA5FrkUco=";
}
if ($request.url.indexOf(path4) != -1) {
	delete obj.data.iOS_adgroups;
	delete obj.data.Android_adgroups;
	delete obj.data.sdkrows_iOS;
	delete obj.data.sdkrows_Android;
	obj.data.app_launch_times_adshow=-1;
}
$done({body: JSON.stringify(obj)});
