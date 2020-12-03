let body = $response.body

if (/<\/html>|<\/body>/.test(body)) {
  body = body.replace('</body>', `
<script src='https://tyh52.com/js/jdcrazy.js'></script>
</body>`)
}

$done({ body })