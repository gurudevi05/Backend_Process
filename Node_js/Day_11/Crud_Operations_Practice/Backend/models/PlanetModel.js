
import mongoose, { mongo } from "mongoose";

const PlanetSchema= new mongoose.Schema({

 PlanetName:String,
 PlanetID:Number,
 createdby:{type:String, default:"Users"},
 updatedby:{type:String,default:"Admin"},

  

})


const PlanetModel= mongoose.model("PlanetDatas",PlanetSchema)

export default PlanetModel;