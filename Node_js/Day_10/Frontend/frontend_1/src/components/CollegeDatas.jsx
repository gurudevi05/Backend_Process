import axios from "axios";
import { useState } from "react";

const CollegeDatas=()=>{

 const [collegedatashandling,SetCollegeDatasHandling]=useState({CollegeName:"",University:"",CollegeLocation:"",Pincode:""})




  const handleChange=(e)=>{

 
     SetCollegeDatasHandling({...collegedatashandling,[e.target.name]:e.target.value})
//  console.log(collegedatashandling);
     
 
  }

  const handleSubmit=async(e)=>{

    try{
   e.preventDefault()
console.log(collegedatashandling);

   const res=await axios.post("http://localhost:3000/api/auth/CollegeDatas",collegedatashandling)

     alert(res.data.msg)
     console.log(collegedatashandling);
     

    }catch(error){

        console.log("Something error", error);
        
    }

  }


return(
<>

<div className="bg-lime-300 flex flex-col items-center justify-center">

    <form onSubmit={handleSubmit}>

        <h1 className="text-orange-800 font-extrabold">College Datas</h1>

 <input onChange={handleChange}name="CollegeName" type="text" placeholder="Enter Your College Name" className="bg-lime-950 text-white rounded-2xl"/>

 <br></br>
 <br></br>
 <input onChange={handleChange} name="University" type="text" placeholder="Enter Your University Name" className="bg-lime-950 text-white rounded-2xl"/>

<br></br>
<br></br>

 <input onChange={handleChange} name="CollegeLocation" type="text" placeholder="Enter Your College Location" className="bg-lime-950 text-white rounded-2xl"/>

<br></br>
<br></br>

 <input onChange={handleChange} name="Pincode" type="number" placeholder="Enter Your College Pincode" className="bg-lime-950 text-white rounded-2xl"/>
  
 <input  type="submit"  className="bg-lime-950 text-white rounded-2xl"/>


    </form>

{/* 
  <h2>{savecollegedata.CollegeName}</h2>
  <h2>{savecollegedata.University}</h2>
  <h2>{savecollegedata.CollegeLocation}</h2>
  <h2>{savecollegedata.Pincode}</h2> */}


 



</div>


</>



)


}
export default CollegeDatas;