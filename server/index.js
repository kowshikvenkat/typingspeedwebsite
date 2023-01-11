// const axios  = require("axios")



// const express = require('express')
// const app = express()


// app.get("/api",(req,res)=>{
//     res.json({"users":["userone","usertwo","userthree"]})
// })
// axios({
//     url:"http:localhost:5000",
//     method:"POST",
//     headers:{
//         authorization:"your token",
//     },
//     data:{"users":["userone","usertwo","userthree"]}
// }).then((res)=>{}).catch((err)=>{err})

// app.listen(5000,()=>{console.log("server started on port 5000")})

const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");
  
  
const mongoose = require("mongoose")
let status;
app.use(express.json())
app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));
mongoose.connect("mongodb://localhost:27017/typespeedtrial",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(status="connected to mongodb database").catch((err)=>status="not connected to mongodb")
const userSchema = new mongoose.Schema({
  record:Number
})
const Loginschema = new mongoose.Schema({
  email:String,
  password:String
})
const User = mongoose.model('abcd',userSchema)
app.get("/", (req, res) => {
  User.findOne({"_id": "6337c96355065ea308f195b3"},function(err,docs){
    var data = docs.record;
      res.send({ message:data,users:status });
  })

});
app.post('/',(req,res)=>{
    console.log(req.body.record)
    var recordtobeupdated = Number(req.body.record)
    var data;
    User.findOne({"_id": "6337c96355065ea308f195b3"},function(err,docs){
      data = docs.record
      if(req.body.record<data && req.body.record!==0){
     User.findOneAndUpdate({"_id": "6337c96355065ea308f195b3"},{record:recordtobeupdated}).then(console.log("inserted to database"))
      }
    })
    
})
const Userword = mongoose.model('words',userSchema)

app.get("/word",(req,res)=>{
Userword.findOne({"_id": "636bbe9ad1630464e4b01b2c"},function(err,docs){
  
   var data = docs.record;
  res.send({message:data,users:status})
  
})
})
app.post('/word',(req,res)=>{
  var recordtobeupdated = Number(req.body.record)
  
  var data;
  Userword.findOne({"_id":"636bbe9ad1630464e4b01b2c"},function(err,docs){
    data=docs.record
    if(req.body.record>data ){
        Userword.findOneAndUpdate({"_id":"636bbe9ad1630464e4b01b2c"},{record:recordtobeupdated}).then(console.log('inserted to database'))
    }
  })
})
const Userztoa = mongoose.model('ztoas',userSchema)
app.get("/ztoa",(req,res)=>{
Userztoa.findOne({"_id": "636bcb64d1630464e4b01b38"},function(err,docs){
   var data = docs.record;
  res.send({message:data,users:status})
})
})
app.post('/ztoa',(req,res)=>{
  var recordtobeupdated = Number(req.body.record)
  var data;
  Userztoa.findOne({"_id":"636bcb64d1630464e4b01b38"},function(err,docs){
    data=docs.record
    if(req.body.record<data && req.body.record!==0 ){
        Userztoa.findOneAndUpdate({"_id":"636bcb64d1630464e4b01b38"},{record:recordtobeupdated}).then(console.log('inserted to database'))
    }
  })
})
const Userlogin = mongoose.model('logins',Loginschema)
app.post('/login',(req,res)=>{
  let email = req.body.email
  let password =  req.body.password
  var user = {
    email : email,
    password : password,
   

  }
  console.log(email,password)
  Userlogin.findOne(user).then((oneuser)=>{
    if(oneuser!==null){
    console.log('one user is',oneuser)
    res.send({status:"success"})}
    else{
      res.send({status:"unsuccess"})
    console.log("no match")}
  }) })
app.post('/signin',(req,res)=>{
  let email = req.body.email
  let password =  req.body.password

  var user = {
    email : email,
    password : password,
    
  }
    console.log(user)
    Userlogin.findOne(user).then((oneuser)=>{
          if(oneuser!==null){
            res.send({status:"email or password already exists"})
          }
    else{
     Userlogin.create(user).then((oneuser)=>{
      console.log("success")
     res.send({status:"success"})
     })
 } })

})