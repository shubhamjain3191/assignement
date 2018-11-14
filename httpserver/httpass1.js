var http = require("http");
var urlpkg = require('url');
var qs=require('querystring');
http.createServer(function (request, response) {
  
  if (request.method == 'GET') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    var q = urlpkg.parse(request.url, true).query;
    response.end("method: " + request.method + "\n" + q.year + " " + q.month);
  }
  else if (request.method == 'POST' || request.method == 'PUT' || request.method == 'DELETE') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.end(JSON.stringify(qs.parse(body)));
      // at this point, `body` has the entire request body stored in it as a string
    });
  }
  else {
    response.writeHead(400, { 'content-type': 'text/plain' });
    response.end('Invalid Method');
  }
}).listen(8085);
console.log("server running at http://127.0.0.1:8085");



