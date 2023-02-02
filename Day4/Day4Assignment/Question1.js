const fs = require("fs");

fs.readFile("text1.txt", function(err,data) {
    if(err) {
        console.log("Error in reading text1.txt", err);
    }
    else {
        console.log("text1.txt --> " + data);
    }
})

fs.copyFile( "text1.txt", "return1.txt", 0 , (err) => {
    if(err) {
        console.log("Error in coping file", err);
    }
    else {
        console.log("Copied successfully");
    }
} )