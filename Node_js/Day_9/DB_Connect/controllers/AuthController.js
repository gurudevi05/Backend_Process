import developerModel from "../models/developer.js";

export const createDatas=async(req,res)=>{

     console.log(req.body);
     

try{

const{developerName,developerAddress,developerProcess,developerNumber}=req.body

const createdata=await developerModel.create({developerName,developerAddress,developerProcess,developerNumber})

 res.status(201).json({msg:"Sucessfully created",datas:createdata})


}catch(error){

     res.status(400).json({msg:"Something error",error:error})
     console.log("error",error);
     

}

}

export const getdatas=async(req,res)=>{

try{

     const getdatas=await developerModel.find()
     res.status(200).json({datas:getdatas})
}catch(error){

     console.log("error",error);
     
}

}