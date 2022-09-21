const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Hello World from Divyank </h1>');
})
app.get('/Home',(req,res)=>{
    res.send('<h1>Home</h1>');
})
app.get('/About',(req,res)=>{
    res.send('<h1>About</h1>');
})
app.listen(3000,()=>{
    console.log('Server started http/localhost:3000');
})