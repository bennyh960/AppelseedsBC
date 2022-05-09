const willGetYouDog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) resolve();
  else reject();
});

willGetYouDog
  .then(() => {
    console.log("YAY WE GOT A DOG");
  })
  .then(() => console.log("hi"));

willGetYouDog.catch(() => {
  console.log("i so sad");
});
