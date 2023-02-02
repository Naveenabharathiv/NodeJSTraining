// 3. Function to Check for existence of a file
// doesFileExist(pathtothefile); return a boolean value

const fs = require("fs");

// function doesFileExists(pathToTheFile) {
    fs.stat("./sample.txt",(err,data) => {
        if(err) {
            console.log("Stat: Required file does not exists")
            return false;
        }
        else {
            console.log("Stat: File exists", data.isFile())
            return data.isFile();
        }
    })
// }
// var fileExists = doesFileExists("./sample.txt");
// console.log(fileExists);



//using access
//function fileExistsUsingAccess (filepath) {
    fs.access("accessSample.txt",(err,data) => {
        if(err) {
            console.log("Access: Required file does not exists")
            return false;
        }
        else {
            console.log("Access: File exists", data)
            return data;
        }
    })
// }
//  var accessFileExists = fileExistsUsingAccess("./accessSample.txt");
//  console.log(accessFileExists);
