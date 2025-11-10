
export const AuthController=(req,res)=>{

console.log(req.body);

const{name}=req.body;
if(name=="devi"){

    res.status(200).json({msg:"welcome devi"})
}else{

     res.status(404).json({msg:"Error not Found"})
}


}


export const reverseController=(req,res)=>{

    console.log(req.body);
    const {numbers}=req.body;

 const responseArray= numbers.reverse();
 console.log(responseArray);
 res.status(200).json({result:responseArray})
 
    

}

export const addNumber=(req,res)=>{

 console.log(req.body);

 const {a,b}= req.body;

 const addition= a+b;
 console.log(addition);
 res.status(200).json({result:addition})
 

}


 