const http = require("http");

const server = http.createServer(function(request, response) {
  response.writeHead(200, {
    "Set-Cookie": "server=servercookie;httponly;secure"
  });
  response.end("success");
});

server.listen(3000);
