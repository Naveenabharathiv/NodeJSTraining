var fs=require("fs");

var writeStreamRef=fs.createWriteStream("text6.txt");
// default chunk size -- 64kb
writeStreamRef.write("Nodejs is a server size language");
// 1. write the chunk of data to the write stream

writeStreamRef.write("Nodejs is running on chrome v8 engine");

writeStreamRef.end();//have finished writing to the stream, stream will be closed. Further writes will throw error

writeStreamRef.on("error",(err)=>{
    console.log("Error occurred",err)
})

//Error scenario
var fs=require("fs");

var chunkCounter=0;
var rStream=fs.createReadStream("text3.txt");
// chunks of 64kb(initial deafult value but can be configured)
// will get 32 chunks

rStream.on("data",(chunks)=>{
    chunkCounter++;
    /* if(chunkCounter ==1)
    {
        console.log(chunks.toString());
    } */
   
})
rStream.on("end",()=>{
    console.log("Number of chunks read : " + chunkCounter);//32
})

/*
1.createRead Stream will first read the new chunk of size 64kb.
2.Once completed, it will trigger an event "data";
3.chunkCounter++; go back to step 1(read the next chunk of size <=64kb)
4. Once the entire data is read, it will trigger an event "end"

*/
