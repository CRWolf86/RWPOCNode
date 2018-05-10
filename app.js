var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if (req.url==='/' || req.url ==='/home' || req.url==='/index') {
        res.writeHead(200,{'Content-Type':'text/html'});        
        fs.createReadStream(__dirname+'/website/index.html').pipe(res);
    }else if(req.url==='form'){
        res.writeHead(200,{'Content-Type':'text/html'});        
        fs.createReadStream(__dirname+'/website/form.html').pipe(res);
    }else if (req.url === '/api/ninjas'){
        var ninjas = [{name: 'Ryu', age: 29},{name: 'Yoshi', age: 32}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/website/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
