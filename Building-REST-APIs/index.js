const express = require("express");
const fs =  require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;

//middleware

app.use(express.urlencoded({extended : false}));

app.use((req, res, next)=>{
 console.log("Hello from middleware 1");
 fs.appendFile("./Building-REST-APIs/log.txt", `\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`, (err, date)=>{
   next();
 });
 
});

app.use((req, res, next)=>{
 console.log("Hello from middleware 2");
 return res.end("Hey");
});




app.get("/users", (req, res)=>{
  const html =`
  <ul>
   ${users.map((user)=> `<li>${user.first_name}</li>`).join("")} 
  </ul>`;
  res.send(html);
});

app.get("/api/users", (req, res)=>{
  return res.json(users);

});

app.route("/api/users/:id").get((req, res)=>{
const id = Number(req.params.id);
const user = users.find((user)=> user.id===id);
return res.json(user);
})
.patch((req, res)=>{
 response.json({status: "Pending"});
})
.delete((req, res)=>{
response.json({status: "Pending"});
});

app.post("/api/users", (req, res)=>{
 const body = req.body;
 users.push({...body, id: users.length + 1});
 fs.writeFile("./Building-REST-APIs/MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
  return res.json({ststus: "pending"});
  });  
 
});


app.listen(PORT, ()=> console.log("Server Started"));

