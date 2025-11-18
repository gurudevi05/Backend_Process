
import mongoose  from "mongoose";

const ConnectionDB=async()=>{


    try{


        const data=await mongoose.connect(process.env.MONGO_URI)

         console.log("URL", process.env.MONGO_URI);
         


         console.log(`MongoDB Connection Successfully Created ${data.connection.host}`);

         
         

    }catch(error){

  console.log("Something Error",error);
  


    }

}
export default ConnectionDB;
