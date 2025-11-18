import axios from "axios";
import { useEffect, useState } from "react"

const GetFormData=()=>{

    const[details,setDetails]=useState([])

const datafetch=async()=>{


    const res=await axios.get("http://localhost:3000/api/auth/TableDatas")
    console.log(res.data.table);
    

    setDetails(res.data.table);
    

}

 useEffect(()=>{

    ( async ()=>{
       await datafetch()
    }) ()

    
 },[])

return(


    <>
    
    <div>
 
 <table className="bg-blue-500 text-white">

 <thead>
<tr>
    <th className="border p-2">CollegeName</th>
    <th className="border p-2">University</th>
    <th className="border p-2">CollegeLocation</th>
    <th className="border p-2">Pincode</th>


</tr>
 </thead>
  <tbody>

    {details.map((e)=>(

  <tr key={e._id}>
 <td>{e.CollegeName}</td>
 <td>{e.University}</td>
 <td>{e.CollegeLocation}</td>
 <td>{e.Pincode}</td>




  </tr>

    )) }

  </tbody>

 </table>

    </div>
    
    </>
)


}
export default GetFormData;