
export const AuthController=(req,res)=>{

    console.log(req.body);
    
 const {Username}=req.body;
 if(Username=="devi"){

    res.status(200).json({msg:"Welcome devi "})

 }else{

    res.status(404).json({msg:"Error not Found"})
 }


}