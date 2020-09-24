/*
Unlocks by Cuttlefish 公众号：墨鱼手记
*/
var body = $response.body.replace(/Membership":false/g, 'Membership":true')
$done({ body });
