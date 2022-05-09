const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Benny" },
          { id: 2, username: "Shira" },
        ],
        "/user/1": {
          id: 1,
          username: "Benny",
          upvotes: 360,
          city: "Ashkelon",
          topPostId: "45321",
        },
        "/user/2": {
          id: 2,
          username: "Shira",
          upvotes: 369,
          city: "Eilat",
          topPostId: "82141",
        },
      };
    }, 1000);
  });
};
