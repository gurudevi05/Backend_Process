
import mongoose from "mongoose";


  const UserSchema= new mongoose.Schema({

  UserName:String,
  UserMobile:Number,
})

 export   const UserModel= mongoose.model("myDB",UserSchema)


const MovieSchema= new mongoose.Schema({

MovieName:String,
Hero:String,
Heroine:String,
ReleaseYear:Number,

})


export const MovieModel=mongoose.model("movieDB",MovieSchema)

const CollegeSchema = new mongoose.Schema({

    CollegeName:String,
    University:String,
    CollegeLocation:String,
    Pincode:Number

})

export const CollegeModel =mongoose.model("collegeDB",CollegeSchema)


const EmployeeSchema=new mongoose.Schema({

 EmployeeName:String,
 EmployeeID:Number,
 EmployeeEmail:String,

})

export  const EmployeeModel= mongoose.model("EmployeeDB",EmployeeSchema)
