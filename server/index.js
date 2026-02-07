const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res)=>{
    console.log(req.headers);
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (error,data)=>{
        switch(req.url){
            case  "/":
            res.end("Homepage");
            break;
             case  "/about":
            res.end("My name is Pratham");
            break;
             default:
            res.end("404 Not Found");

        }
        
    })

})

myServer.listen(8000, ()=> console.log("Server Started"));
