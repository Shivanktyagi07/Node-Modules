const http = require('http');

const Server = http.createServer((res,req) => {
    if(req.url='/'){
       res.write('<h1>Hello World</h1>')
    }
      res.end();
      
});
Server.listen(3002);
console.log("server is running at port 3002");

