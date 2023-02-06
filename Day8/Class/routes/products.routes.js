var express=require("express");
const morgan=require("morgan");//module to be installed
const path=require("path");
// logging of the requests -- morgan
const fs=require("fs");




var router=express.Router();

// middleware specific to products route
router.use((request,response,next)=>{
    console.log("Products routes middleware",request.rootDirName);// path to he root folder
    var wStream=fs.createWriteStream(path.join(request.rootDirName,"log","serverLog.txt"),{flags:"a"});
    morgan("short",{stream:wStream})
    wStream.close();
    next();
})

//get request to /products
router.get("/",(request,response,next)=>{
    var res=productController.getProducts();
    if(res)
    {
        response.send(res);
    }
})

router.put("/",(request,response,next)=>{
    
})

router.post("/",(request,response,next)=>{
    
})

router.delete("/",(request,response,next)=>{
    
})

module.exports=router;



