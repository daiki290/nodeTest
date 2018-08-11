var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var url_parse = url.parse(req.url, true);
  console.log(url_parse);
  res.end();
})
server.listen(8080, function() {
  // 起動したことを表すメッセージを追加。
  console.log('Server started, listening on : 8080');
});
