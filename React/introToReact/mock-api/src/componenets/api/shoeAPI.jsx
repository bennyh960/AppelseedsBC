import axios from "axios";

const shoeAPI = axios.create({
  baseURL: "https://628e3408368687f3e712634b.mockapi.io/shopme/",
});

export default shoeAPI;
