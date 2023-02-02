// 2. Clone a directory and its child files
const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname,'answer2'),(err) => {
    if(err) {
        console.log("Error in mkdir", err);
    }
    console.log("Directory created successfully!");
});

function cloneDirectory(myDir) {
    var newDir = myDir + 'Clone';
    fs.mkdir(path.join(newDir),(err) => {
        if(err) {
            console.log("Error in creating the new directory");
        } 
        else {
            console.log("New directory created successfully!");
            fs.cp(myDir, newDir, { recursive: true }, (err) => {
                if(err) {
                    console.log("Error in copying the directory", err);
                }
                else {
                    console.log("Cloned dirctory successfully");
                    return newDir;
                }
            })
        }

    })
}

var createDir = cloneDirectory("./answer2");
console.log(createDir);

