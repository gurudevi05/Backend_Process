
import CollegeModel from "../models/DataHandling.js";

export const CollegeDatas =async(req,res)=>{

    try{

        const {CollegeName,  CollegeLocation,StudentID,StudentNumber,StudentCourse}=req.body;

    const CollegeData=await CollegeModel.create({CollegeName,  CollegeLocation,StudentID,StudentNumber,StudentCourse})

    res.status(200).json({msg:"CollegeDatas Added !",CollegeData})

    console.log("Succesfully Added To The Collection");
    

    }catch(error){


         res.status(400).json({msg:"Somehing Error Please, Check it "})

         console.log("Something Error",error);
         

    }
    
}


 export const GetCollegeDatas=async(req,res)=>{


  console.log(req.params);
  
    
  try{

     const getdata= await CollegeModel.find()

      res.status(200).json({msg:getdata})

  }catch(error){

  console.log(error);
   
  res.status(400).json({msg:"Something Error",error})
  
     
  }

 }