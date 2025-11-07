
// Import http module 

import http from "http";

// create a server 

const server=http.createServer((req,res)=>{

    // req-->request(from client)
    // res-->response(we send back)


// set response header (text/plain means normal text)

res.writeHead(200,{"content-type":"text/plain"});

// send response to client 

res.end("Hello Guru! Welcome to my first Node.js server")

});

// server listens on port 3000


server.listen(3000,()=>{

    console.log("server is running at http://localhost:3000");
    
});