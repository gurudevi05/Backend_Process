
import mongoose from "mongoose";

const PlanetDB=async()=>{


 try{

 const planetConnect = await mongoose.connect(process.env.MONGO_URI)
console.log(`Mongo DB Connected Successfully${planetConnect.connection.host}` );


 }catch(error){

 console.log("Something Error",error);
 

 }


}

export default PlanetDB;