// const url = "https://api.github.com/users/%7Bbennyh960%7D";
// const url = "https://api.github.com/users/{bennyh960}";
const url = "https://docs.github.com/rest/reference/users#bennyh960";

fetch(url)
  .then((res) => {
    // const data = res.json();
    return res.headers;
  })
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

// async function getUser() {
//   try {
//     const response = await axios.get(url);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getUser();
