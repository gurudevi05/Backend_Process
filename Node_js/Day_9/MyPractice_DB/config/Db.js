
import mongoose  from "mongoose";

const ConnectDB= async()=>{

try{


 const data= await mongoose.connect(process.env.MONGO_URI)

  console.log(`MongoDB Connected Successfully ${data.connection.host}`);
  


}catch(error){

console.log("Something error",error);


}



}
export default ConnectDB;