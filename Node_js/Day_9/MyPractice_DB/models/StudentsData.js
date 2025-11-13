
import mongoose from "mongoose";

const StudentSchema={

 StudentName:String,
 StudentID:Number,
 StudentCourse:String,
 StudentMobileNo:Number,
 StudentEmail:String,
 StudentStatus:String



}

const StudentModel= mongoose.model("newDB",StudentSchema)

export default StudentModel;