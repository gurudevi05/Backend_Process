
import mongoose from "mongoose"

 export const CollegeSchema= new  mongoose.Schema({

 
     CollegeName : String,
     CollegeLocation:String,
     StudentID:Number,
     StudentNumber:Number,
     StudentCourse:String,
     createdby:{type:String,default:"users"},
     updatedby:{type:String,default:"Admin"},





})

const CollegeModel= mongoose.model("CrudOperations",CollegeSchema)

export default CollegeModel;


