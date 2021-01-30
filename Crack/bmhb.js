/*
Unlocks by photonmang 公众号：墨鱼手记
*/

let body= $response.body; 
var obj = JSON.parse(body); 
obj.data.is_lifelong_vip = true;
obj.data.wool = 20210130;
obj.profile.nickname = “墨鱼手记”;
$done({body: JSON.stringify(obj)});
