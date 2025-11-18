import PlanetModel from "../models/PlanetModel.js";

export const CreateDatas=async(req,res)=>{

console.log(req.body);

try{

 const{PlanetName,PlanetID}=req.body

 const datas= await PlanetModel.create({PlanetName,PlanetID})

 res.status(201).json({msg:"Added Successfully to the Collection"});

}catch(error){

    console.log("Something Error",error);

    res.status(401).json({msg:"Error"})
    
}


}


export const GetDatas=async(req,res)=>{

try{

     const getPlanetDatas= await PlanetModel.find()
     res.status(200).json({getPlanetDatas})

}catch(error){

    console.log("Something Error",error);
    


}

}


export const EditDatas=async(req,res)=>{

 try{

     const{id}=req.params;

 const EditPlanetDatas = await PlanetModel.findById(id)

  res.status(200).json({EditPlanetDatas})
   


 }catch(error){

 console.log("Something Error",error);
 

 }

}


export const UpdateDatas=async(req,res)=>{

  const UpdatePlanet = await PlanetModel.findByIdAndUpdate(req.params.id,req.body,{new:true})

  res.status(200).json({msg:"Successfully Updated"})

}


export const DeleteDatas=async(req,res)=>{

 const DeleteDataPlanet= await PlanetModel.findByIdAndDelete(req.params.id,{new:true})


  res.status(200).json({msg:"Successfully Deleted"})

}