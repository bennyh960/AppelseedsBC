import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

function App() {
  const [selecedFile, setSelectedFile] = useState({});
  const [img, setImage] = useState("");

  const fileSelectedHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const getFile = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("http://localhost:5000/");
    // console.log(data.img.data.data);
    // const base64String = new Buffer.from(data.img.data.data).toString("base64");
    // const base64String = new Buffer.from(data.img.data.data).toString("base64");
    // const base64String = new Buffer.from(data.img.data.data);
    // const base64String = data.img.data.data;
    const byteArray = new Uint8Array(data.img.data.data);
    const charArray = Array.from(byteArray, (byte) => String.fromCharCode(byte));
    const binaryString = charArray.join("");
    const theImage = btoa(binaryString);
    console.log(theImage);
    setImage(binaryString);
    // console.log(base64String);
  };

  const fileUploadHandler = async (e) => {
    // console.log(selecedFile);
    const fd = new FormData();
    fd.append("image", selecedFile, selecedFile.name);
    axios.post("http://localhost:5000/", fd).then((res) => {});
  };
  return (
    <div>
      <form encType="multipart/form-data">
        <input type="file" onChange={fileSelectedHandler} name="myImage" />
        <button onClick={fileUploadHandler}>Upload</button>
        <button onClick={getFile}>Get</button>
      </form>
      <img src={img} alt="" />
    </div>
  );
}

export default App;
