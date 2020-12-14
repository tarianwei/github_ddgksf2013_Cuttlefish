var body = $response.body.replace(/AdId":"[^"]*"/g, 'AdId":""');
$done({ body });
