
import mongoose from "mongoose";

const StudentSchema=new mongoose.Schema({


 StudentName: String,
 StudentId:Number,
 StudentCourse:String,
 StudentMobileNo:Number,
 StudentEmail:String,
 StudentStatus:String


})

const StudentModel= mongoose.model("newDB",StudentSchema)

export default StudentModel;
