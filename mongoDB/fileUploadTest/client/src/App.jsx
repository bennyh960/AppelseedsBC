import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [file, setFile] = useState();
  const [firstName, setFirstName] = useState();
  const [userID, setUserId] = useState("");

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  function handleChange2(event) {
    setFirstName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const url = "http://localhost:5000/users";
    const formData = new FormData();
    // avatar and name must be same as defined in server
    formData.append("avatar", file);
    formData.append("name", firstName);
    // formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  async function handleShowImg() {
    const { data } = await axios.get(`http://localhost:5000/users/byName/${firstName}`);
    setUserId(data);
    console.log(data);
  }
  // },[])
  return (
    <div>
      {/* <form enctype="multipart/form-data"> */}
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={firstName} onChange={handleChange2} />
        <br />
        <label htmlFor="file">File</label>
        <input type="file" id="file" onChange={handleChange} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <button onClick={handleShowImg}>Show img</button>
      {userID && <img src={`http://localhost:5000/users/avatar/${userID}`} width={250} alt="" />}
    </div>
  );
}

export default App;
