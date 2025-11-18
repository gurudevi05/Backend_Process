
import mongoose from "mongoose";

const ConnectionDB= async()=>{

    try{

 const data= await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected Successfully ${data.connection.host}`);

    console.log("DB Connected Successfully");
    

    }catch(error){

        console.log("Something Error",error);
        

    }
   
    


}

export default ConnectionDB;