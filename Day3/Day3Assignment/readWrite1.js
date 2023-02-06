// Read the contents from File1, File2, File3 and write in Result1
var fs=require("fs");
var myData1=myData2=myData3="";
var file1Data=fs.readFile("File1.txt",function(err,fileContent){

    if(err)
    {
        console.log("Error while reading the file1 ",err)
         
    }
    else
    {
        console.log("File1 read successfully");
         myData1=fileContent;
         fs.appendFile("Result1.txt",myData1,(err)=>{
            if(err)
            {
                console.log("Error writing in the file1",err)
            }
            else
            {
                console.log("File1 data written successfully");
            }
        })
        
    }
})

var file2Data=fs.readFile("File2.txt",function(err,fileContent2){

    if(err)
    {
        console.log("Error while reading the file2 ",err)
         
    }
    else
    {
        console.log("File2 read successfully");
         myData2=fileContent2;
         fs.appendFile("Result1.txt",myData2,(err)=>{
            if(err)
            {
                console.log("Error writing in the file2",err)
            }
            else
            {
                console.log("File2 data written successfully");
            }
        })
        
    }
})

var file3Data=fs.readFile("File3.txt",function(err,fileContent3){

    if(err)
    {
        console.log("Error while reading the file3 ",err)
         
    }
    else
    {
        console.log("File3 read successfully");
         myData3=fileContent3;
         fs.appendFile("Result1.txt",myData3,(err)=>{
            if(err)
            {
                console.log("Error writing in the file3",err)
            }
            else
            {
                console.log("File3 data written successfully");
            }
        })
        
    }
})