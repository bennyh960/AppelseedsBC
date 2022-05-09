const somePromise = new Promise((resolve, reject) => {
  const obj = {
    a: {
      k: "lalalalalalala",
    },
  };
  if (typeof obj.a === "object") resolve(obj);
  else reject("eze basa");
});

somePromise
  .then((data) => {
    return somePromise;
  })
  .then((data2) => {
    console.log(data2.a.k);
  })
  .catch((err) => {
    console.log(err);
  });
