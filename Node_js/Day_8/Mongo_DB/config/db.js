
import mongoose from 'mongoose'

const connectionDB=async()=>{

try{

const data=await mongoose.connect(process.env.MONGO_URI)
console.log(` MongoDB connection sucessfylly created${data.connection.host} `);

}catch(error){

    console.log("something error",error);
    console.log(error);
    process.exit(1)
    
    
}


}

export default connectionDB;