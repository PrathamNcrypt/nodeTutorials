const express = require("express");

const app = express();

app.get('/', (req, res)=>{
  return res.send("Hello from Homepage")
});

app.get("/about" , ( req, res)=>{
  return res.send("Hello\n" + `${req.query.name}\n`+ "from about page\n");
});

app.listen(8000, ()=> console.log("Server Started"));

