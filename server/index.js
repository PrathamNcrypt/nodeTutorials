const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
  console.log(req.headers);
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("log.txt", log, (error, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end(`Here are your search results for ${search}`);
      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, ()=> console.log("Server Started"));
