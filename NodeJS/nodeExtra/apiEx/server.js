// const https = require("https");
// const axios = require("axios");
const request = require("request");
const fs = require("fs");

//* with axios
// const fetchData = async () => {
//   try {
//     const data = await axios.get("https://dog.ceo/api/breeds/list/all");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData();

//* with built in - most complicated
// https.get("https://dog.ceo/api/breeds/list/all", (response) => {
//   let data = "";
//   response.on("data", (chunk) => {
//     data += chunk;
//   });

//   response
//     .on("end", () => {
//       console.log(data);
//     })
//     .on("error", (error) => {
//       console.log(error);
//     });
// });

// * 3nd methode
// request({},()=>{})
// request({ url: "https://dog.ceo/api/breeds/list/all", json: true }, (error, { body }) => {
//   if (error) {
//     console.log(error);
//   } else if (body.error) {
//     console.log("unable to find location");
//   } else {
//     console.log(JSON.stringify(body, undefined, 4));
//   }
// });

// * 4 with udemy methode
const https = require("https");
const url = "https://dog.ceo/api/breeds/list/all";

const request2 = https.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    // console.log(chunk.toString()[0]);
    data += chunk.toString();
    // createFile(chunk.message.toString());
  });
  response.on("end", () => {
    // console.log(data);
    const body = JSON.parse(data);
    console.log(body);
  });
  response.on("error", (err) => {
    // console.log(data);

    console.log("an error ", err);
  });
});
request2.end();

// const createFile = (data) => {
//   const dataJSON = JSON.stringify(data);
//   fs.writeFileSync("dogs.json", dataJSON);
// };
