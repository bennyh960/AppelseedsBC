import axios from "axios";

// const searchImages = ()=>{

// }

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID lhLi1LNu0ZOEL0YooFvWzCxXN_TSIH-2rN2kUb502yg",
  },
});
