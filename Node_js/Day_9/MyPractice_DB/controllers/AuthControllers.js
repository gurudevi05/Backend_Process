import StudentModel from "../models/StudentsData.js";

export const CreateStudentDatas= async (req,res)=>{

    console.log(req.body);

try{

    const {StudentName,StudentId,StudentCourse,StudentMobileNumber,StuentEmail,StudentStatus}=req.body
    
    const CreateData=  await StudentModel.create({StudentName,StudentId,StudentCourse,StudentMobileNumber,StuentEmail,StudentStatus})

    res.status(200).json({msg:`Successfully Created StudentData ${CreateData}`});
    
    

}catch(error){

     res.status(400).json({msg:"Something Wrong"})


}

    
}

export const GetStudentDatas=async(req,res)=>{

    console.log(req.params);
try{

    const GetData= await StudentModel.find()
    
    res.status(200).json({msg:"Successfully Created"})

}catch(error){

    res.status(404).json({msg:"Error not Found"})

}
    

    
    
}
