const express = require('express');
var app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/register',(req,res,next)=>{
var username = req.body.username
var password = req.body.password
console.log(username,password);
})



app.get('/',(req,res,next)=>{
  res.json('Home')
})




app.listen(3000,()=>{
  console.log(`Server started on port`);
});
