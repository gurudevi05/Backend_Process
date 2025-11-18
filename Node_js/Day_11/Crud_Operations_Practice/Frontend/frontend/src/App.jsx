import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [formdatas, setFormDatas] = useState({
    PlanetName: "",
    PlanetID: "",
  });

  const [planetData, setPlanetData] = useState([]);

  const [editid, setEditId] = useState(null);

  const handleChange = (e) => {
    setFormDatas({ ...formdatas, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const AddPlanet = await axios.post(
      "http://localhost:3000/api/auth/CreateDatas",
      formdatas
    );

    alert(AddPlanet.data.msg);

    setFormDatas({ PlanetName: "", PlanetID: "" });

    getPlanetDatasForm(); // refresh table
  };

  const getPlanetDatasForm = async () => {
    const getPlanet = await axios.get(
      "http://localhost:3000/api/auth/GetDatas"
    );

    setPlanetData(getPlanet.data.getPlanetDatas);
  };

  useEffect(() => {
    getPlanetDatasForm();
  }, [planetData]);

  const editDatas = async (id) => {
    const edit = await axios.get(
      `http://localhost:3000/api/auth/EditDatas/${id}`
    );

    setFormDatas(edit.data.EditPlanetDatas);
    setEditId(id);
  };

  const UpdateDatas = async () => {
    const UpdateNew = await axios.put(
      `http://localhost:3000/api/auth/UpdateDatas/${editid}`,
      formdatas
    );

    alert(UpdateNew.data.msg);

    setFormDatas({ PlanetName: "", PlanetID: "" });
    setEditId(null);
    getPlanetDatasForm();
  };


  const DeleteDatas= async(id)=>{

 const deletedata=await axios.delete(`http://localhost:3000/api/auth/DeleteDatas/${id}`)

  alert(deletedata.data.msg)

  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={formdatas.PlanetName}
            type="text"
            name="PlanetName"
            placeholder="Enter the PlanetName"
          />
          <input
            onChange={handleChange}
            value={formdatas.PlanetID}
            type="text"
            name="PlanetID"
            placeholder="Enter the PlanetID"
          />

          {editid ? (
            <button type="button" onClick={UpdateDatas}>
              Update
            </button>
          ) : (
            <button type="submit">Register</button>
          )}
        </form>

        <div>
          <table>
            <thead>
              <tr>
                <th>PlanetName</th>
                <th>PlanetID</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {planetData.map((e) => (
                <tr key={e._id}>
                  <td>{e.PlanetName}</td>
                  <td>{e.PlanetID}</td>
                  <td>
                    <button onClick={() => editDatas(e._id)}>Edit</button>||<button onClick={()=>DeleteDatas(e._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
