import axios from "axios";
import { useState } from "react";

const MovieDatas=()=>{

    const[moviehandlingdatas,setMovieHandlingDatas]=useState({MovieName:"",Hero:"",Heroine:"",ReleaseYear:""})

     const[savemoviedatas,setSaveMovieDatas]=useState({});

     const handleChange=(e)=>{

        setMovieHandlingDatas({...moviehandlingdatas,[e.target.name]: e.target.value})
     }

      
     const handleSubmit=async(e)=>{

        e.preventDefault()

 
        try{

            const  res=await axios.post ("http://localhost:3000/api/auth/MovieDatas",moviehandlingdatas)

           alert(res.data.msg)

           setSaveMovieDatas(res.data.MovieData)
            
            

        }catch(error){

                  console.log("Something error",error);
                  
        }
         

     }
      
return(

<>

<div className="bg-amber-200 flex flex-col items-center justify-center">

 <form onSubmit={handleSubmit}>

    <h1 className="text-black text-lg">Welcome To MovieDatas</h1>

    <input onChange={handleChange} type="text" name="MovieName" placeholder="Enter Your Favoruite Movie Name" className="bg-amber-950 text-white rounded-2xl"/>

    <br></br>


    <input onChange={handleChange} type="text" name="Hero" placeholder="Enter the Movie Hero" className="bg-amber-950 text-white rounded-2xl"/>
 
  <br></br>

      <input onChange={handleChange} type="text"name="Heroine"  placeholder="Enter the Movie Heroine " className="bg-amber-950 text-white  rounded-2xl" />

      <br></br>

     <input onChange={handleChange} type="Number" name="ReleaseYear" placeholder="Enter the ReleaseYear " className=" bg-amber-950 text-white rounded-2xl"/>

     <br></br>

     <input type="submit" value="Register"/>
</form>
     
      <div className="bg-pink-400 text-black flex flex-col items-center justify-center">

        <h1>{savemoviedatas.MovieName}</h1>
        <h1>{savemoviedatas.Hero}</h1>
        <h1>{savemoviedatas.Heroine}</h1>
        <h1>{savemoviedatas.ReleaseYear}</h1>



      </div>

</div>

</>


)


}

export default MovieDatas;