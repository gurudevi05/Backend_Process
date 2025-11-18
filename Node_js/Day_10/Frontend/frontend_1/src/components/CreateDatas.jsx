import React, { useState } from 'react'
import axios from 'axios'

const CreateDatas = () => {

  const[formdatas,setFormDatas]=useState({UserName:"",UserMobile:""});

   const[savedata,setSaveData]=useState({})
   const handleChange=(e)=>{

    setFormDatas({...formdatas,[e.target.name]:e.target.value})

   }
 
     const handleSubmit=async(e)=>{

         e.preventDefault()


         try{

         const res= await axios.post("http://localhost:3000/api/auth/CreateDatas",formdatas)

          alert(res.data.msg)
          // console.log(res.data.CreateDatas);

          setSaveData(res.data.AuthData)
          


         }catch(error){

          console.log("something error",error);
          
         }
         

     }



  return (
  <>
  
  <div>

    <form onSubmit={handleSubmit}>

    <input onChange={handleChange} type="text" name='UserName' placeholder='Enter Your Name' className='bg-blue-700 text-amber-50 '/>
<br></br>
    <input onChange={handleChange} type='Number' name='UserMobile' placeholder='Enter Your Mobile Number' className='bg-cyan-950 text-amber-50'/>

     <br></br>
     <input type="submit" value="Register" className='bg-emerald-600 text-black'/>


    </form>

  <h2>{savedata?.UserName}</h2>
       <h2>{savedata?.UserMobile}</h2>
  
 

      



  </div>
  
  
  </>
  )
}

export default CreateDatas;