var http = require("http");//core inbuilt module
var fs = require("fs");//core inbuilt module
var path = require("path");//core inbuilt module
var url=require("url");//core inbuilt module
var qs=require("querystring");//core inbuilt module

const port = 3000;
var postsArr=[];

var server = http.createServer((request,response) => {
    if(request.url === "/posts") {
        if(request.method === "GET") {
            //select query
            response.end(JSON.stringify(postsArr));
            return;
        }
        if(request.method === "POST") {
            //data is coming in the 
            //insert a new record
        }

    }
})

server.listen(port,()=>{
    console.log(`Server has started at the port ${port}`)
})

