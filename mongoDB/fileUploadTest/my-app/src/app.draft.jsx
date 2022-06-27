import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({});

  const onChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value });

  const handleSubmit = (e) => {
    console.log(form);
    // e.preventDefault();
    postData("http://localhost:5000/", form).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  };

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <form method={"POST"} action={"http://localhost:5000"} onSubmit={handleSubmit} encType="multipart/form-data">
      <input onChange={onChange} type="text" name={"firstName"} />
      <input onChange={onChange} type="password" name={"pwd"} />
      <input onChange={onChange} type="email" name={"email"} />
      <input type="file" name={"email"} />
      <button>submit</button>
    </form>
  );
}

export default App;
