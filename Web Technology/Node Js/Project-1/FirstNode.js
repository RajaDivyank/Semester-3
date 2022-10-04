const http = require('http');

server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-type","text/plain");
    res.end("hello world");
})
server.listen(3000,()=>{
    console.log("Server started");
})