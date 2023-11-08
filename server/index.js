const { log } = require('console');
const http = require('http');

const PORT = 3000;

const HOSTNAME = 'localhost';

const server = http.createServer((req,res) => {
    if(req.url=='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("server is created by Shiavnk Tyagi")
    }
    else if(req.url=='/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("ABout");
    }else if(req.url=='/product'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("<h1>Product</h1>")
    }
});
    

server.listen( PORT,() =>{
    console.log(`Server runnint at ${HOSTNAME}:${PORT}`);
})