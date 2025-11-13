
import mongoose from 'mongoose'

const developerschema=new mongoose.Schema({

developerName:{type:String,required:true},
developerAddress:String,
developerProcess:String,
developerNumber:Number
 

})


const developerModel= mongoose.model("newDB",developerschema)

export default developerModel;