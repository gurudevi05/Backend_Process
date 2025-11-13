
import mongoose from 'mongoose'

const connectionDB=async()=>{

try{

const data=await mongoose.connect(process.env.MONGO_URI)
console.log(`MongDB connection successfully created ${data.connection.host}`);

}catch(error){

     console.log("something error",error);

}

}
export default connectionDB;




