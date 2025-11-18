import { useEffect, useState } from "react";
import axios from "axios";

const CollegeDatasForm = () => {
  const [collegedatahandling, setCollegeDataHandling] = useState({
    CollegeName: "",
    CollegeLocation: "",
    StudentID: "",
    StudentNumber: "",
    StudentCourse: "",
  });

  const [getform,setGetForm]=useState([])

  const [savecollegedata, setSaveCollegeData] = useState({});

  const handleChange = (e) => {
    setCollegeDataHandling({
      ...collegedatahandling,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/CollegeDatas",
        collegedatahandling
      );

      alert(res.data.msg);

      setSaveCollegeData(res.data.CollegeData);
    } catch (error) {
      console.log("Something Error", error);
    }
  };


   const GetCollegeDatasForm = async()=>{

     const  getCollege= await axios.get("http://localhost:3000/api/auth/GetCollegeDatas")

      setGetForm(getCollege.data.getdata)


   }

   useEffect(() => {
  GetCollegeDatasForm();
}, []);


  return (
    <>
      <div className="bg-amber-300 text-black flex flex-col items-center justify-center p-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <h1 className="text-xl font-bold">College Datas Form</h1>

          <input
            onChange={handleChange}
            type="text"
            name="CollegeName"
            placeholder="Enter Your College Name"
          />
          <input
            onChange={handleChange}
            type="text"
            name="CollegeLocation"
            placeholder="Enter Your College Location"
          />
          <input
            onChange={handleChange}
            type="text"
            name="StudentID"
            placeholder="Enter Your StudentID"
          />
          <input
            onChange={handleChange}
            type="text"
            name="StudentNumber"
            placeholder="Enter Your StudentNumber"
          />
          <input
            onChange={handleChange}
            type="text"
            name="StudentCourse"
            placeholder="Enter Your StudentCourse"
          />

          <input
            type="submit"
            value="Register"
            className="bg-black text-white p-2 cursor-pointer"
          />
        </form>

        {savecollegedata && savecollegedata.CollegeName && (
          <table className="mt-6 border-collapse border border-black bg-white text-black">
            <thead>
              <tr>
                <th className="border border-black p-2">CollegeName</th>
                <th className="border border-black p-2">CollegeLocation</th>
                <th className="border border-black p-2">StudentID</th>
                <th className="border border-black p-2">StudentNumber</th>
                <th className="border border-black p-2">StudentCourse</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-black p-2">
                  {savecollegedata.CollegeName}
                </td>
                <td className="border border-black p-2">
                  {savecollegedata.CollegeLocation}
                </td>
                <td className="border border-black p-2">
                  {savecollegedata.StudentID}
                </td>
                <td className="border border-black p-2">
                  {savecollegedata.StudentNumber}
                </td>
                <td className="border border-black p-2">
                  {savecollegedata.StudentCourse}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default CollegeDatasForm;
