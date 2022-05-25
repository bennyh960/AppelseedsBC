import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./componenets/app";
// import AppEx from "./EX20Products/componenents/appEx";
import AppLec from "./DraftLecture/componenents/appLecture";
import AppCrud from "./crud/todo";

// in this project we install react router libary

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<App />);
// root.render(<AppEx />);
// root.render(<AppLec />);
root.render(<AppCrud />);
