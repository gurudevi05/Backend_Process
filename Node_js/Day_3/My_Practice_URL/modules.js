
import fs from "fs";

const Modules = `

 console.log("Welcome to Node_Modules");

`

fs.writeFile("Node_Modules.js",Modules,(err)=>{


    if(err) console.log(err);
    else console.log("File created");
    
    
});

fs.readFile("Node_Modules.js",(err)=>{

    if(err) console.log(err);
    else console.log("File readed");
    
    
})

fs.unlink("Node_Modules.js",(err)=>{

    if(err) console.log(err);
    else console.log("File deleted");
    
    
})

const os=`console.log("This is Os Module File")`

fs.writeFile("Os_Module.js",os,(err)=>{

    if(err) console.log(err);

    else console.log("File created");
    
    
})