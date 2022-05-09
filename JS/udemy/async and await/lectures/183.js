//? async
//async functions allwayes return a promise
//if the function return a value, the promise resolve with that value
//if the function throw an exception , the promise will be rejected

//? await
//We can only use await inside of functions declared with async
//await will pause the execution of the function , waiting for  a promise to be resolved

// function getPlanet() {
//   return axios.get("https://swapi.dev/api/planets/?page=2");
// }

// getPlanet().then((res) => {
//   console.log(res.data);
// });

//?easier way for same as above
async function getPlanet() {
  //   const res = await axios.get("https://swapi.dev/api/planets/?page=2");
  const res = await axios.get("https://swapi.dev/api/planetsass/?page=2");
  console.log("first this line be print then res will get data and then it will be print");
  console.log(res.data);
  console.log(res.data.results[0].name);
}
// we can call the func and also catch error
// getPlanet().catch((err) => console.log("Error: ", err.message));

// ====================== try catch block

async function getPlanet() {
  try {
    //   const res = await axios.get("https://swapi.dev/api/planets/?page=2");
    const res = await axios.get("https://swapi.dev/api/planetsass/?page=2");
    console.log("first this line be print then res will get data and then it will be print");
    console.log(res.data);
  } catch (e) {
    console.log("ERROR IN CATCH : ", e);
  }
}
getPlanet();
