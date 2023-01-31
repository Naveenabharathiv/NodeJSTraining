const fs = require('fs');

try{
    const fileData1   = fs.readFileSync('File1.txt', 'utf-8');
    fs.writeFileSync('Result2.txt',fileData1);
    console.log("File1 read and written successfully!");

    const fileData2 = fs.readFileSync('File2.txt', 'utf-8');
    fs.appendFileSync('Result2.txt', fileData2, err => {
        console.log("Error in writing File2", err);
    });    
    console.log("File2 read and written successfully!!");

    const fileData3 = fs.readFileSync('File3.txt', 'utf-8');
    fs.appendFileSync('Result2.txt', fileData3, err=> {
        console.log("Error in writing File3", err)
    });
    console.log("File3 read and written successfully!!!");
}
catch(e) {
    console.log("File1 Error", e);
}

//{ flag: 'a+' } in readFileSync
//fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {});
//a+ This flag opens the file for reading and writing and it also positions the stream at the end of the file