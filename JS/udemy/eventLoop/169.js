const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "bobo" },
          { id: 2, username: "bibi" },
        ],
        "/about": "this is the about page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log("Status code:", res.status);
    console.log("data code:", res.data);
    console.log("REQUEST WORK");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILD: PAGE NOT FOUND");
  });

fakeRequest("/user2")
  .then((res) => {
    console.log("Status code:", res.status);
    console.log("data code:", res.data);
    console.log("REQUEST WORK");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILD: PAGE NOT FOUND");
  });
