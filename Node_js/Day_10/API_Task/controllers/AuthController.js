import mongoose from "mongoose";
import {CollegeModel,  EmployeeModel,  MovieModel, UserModel} from "../models/DataHandling.js";

export const CreateDatas=async(req,res)=>{



try{

console.log(req.body);

     const {UserName,UserMobile}=req.body;

      const AuthData= await UserModel.create({UserName,UserMobile})

      res.status(201).json({msg:"Data Saved Successfully",AuthData})
      console.log("Database Connected");
      

}catch(error){


 res.status(400).json({msg:"Something Wrong Check it ",error})
 console.log("Database not Connected");
 

}


}


export const MovieDatas=async(req,res)=>{

try{

console.log(req.body);

const {MovieName,Hero,Heroine,ReleaseYear}=req.body;

const MovieData = await MovieModel.create({MovieName,Hero,Heroine,ReleaseYear})

res.status(201).json({msg:"Movie Details Stored",MovieData})

console.log("Database Connected");



}catch(error){

res.status(400).json({msg:"Something Error",error})
console.log(error);


}


}

export const CollegeDatas=async(req,res)=>{

try{

      console.log(req.body);
 const{CollegeName,University,CollegeLocation,Pincode}=req.body;

      const CollegeData = await CollegeModel.create({CollegeName,University,CollegeLocation,Pincode})

      res.status(201).json({msg:"College Data Stored",CollegeData})

      console.log("Database successfully Connected");
      
      

}catch(error){


       res.status(401).json({msg:"Something Went Wrong",error:error})

}

}


export const EmployeeDatas=async(req,res)=>{

 try{

       console.log(req.body);

       const {EmployeeName,EmployeeID,EmployeeEmail}=req.body;

       const EmployeeData = await EmployeeModel.create({EmployeeName,EmployeeID,EmployeeEmail});

        res.status(201).json({msg:"Employee Details Stored",EmployeeData})
        console.log("Database Connected");
        
       

 }catch(error){

  res.status(401).json({msg:"Something error"})
  console.log("error",error);
  

 }


}

export const TableDatas=async(req,res)=>{

try{

      

      const data=await  CollegeModel.find()

      res.status(200).json({table:data})
      
}catch(error){

      console.log(error);

      res.staus(400).json({msg:"Something error",error})
      
}

}