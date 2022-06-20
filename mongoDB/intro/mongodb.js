// CRUD Create Read Update Delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database");
  }
  console.log("connect correctly");

  const db = client.db(databaseName);

  // deleteOne and deleteMany
  db.collection("users").deleteMany({
    age: { $gt: 25 },
  });

  // updatemany
  //   db.collection("task")
  //     .updateMany({ completed: false }, { $set: { completed: true } })
  //     .then((res) => {
  //       console.log("complete");
  //     })
  //     .catch((e) => console.log(e));

  //   db.collection("users")
  //     .find({ age: { $gte: 22 } })
  //     .toArray((e, u) => {
  //       if (error) {
  //         console.log(error);
  //       }
  //       console.log(u);
  //     });

  // update
  //   const updatePromise = db
  //     .collection("users")
  //     .updateOne({ _id: ObjectID("62b01912c6b029468ca13489") }, { $inc: { age: 1 } });
  // .updateOne({ _id: ObjectID("62b01912c6b029468ca13489") }, { $set: { name: "Snir" } });
  //   updatePromise
  //     .then((res) => {
  //       console.log("This is the res:", res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   db.collection("users").findOne({ name: "Shira" }, (e, u) => {
  //   db.collection("users").findOne({ _id: new ObjectID("62af8dddc0a25b43e8d0c6de") }, (e, u) => {
  //     if (e) {
  //       console.log(e);
  //     }
  //     console.log(u);
  //   });

  //   db.collection("users").findOne({ age: 27 }, (e, u) => {
  //     if (e) {
  //       console.log(e);
  //     }
  //     console.log(u);
  //   });
  //   db.collection("users").insertOne(
  //     {
  //       name: "Benny",
  //       age: 27,
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log("unable to insert user");
  //       }
  //       console.log(result.ops);
  //     }
  //   );
  //   db.collection("users").insertMany(
  //     [
  //       {
  //         name: "Shira",
  //         age: 23,
  //       },
  //       {
  //         name: "Dana",
  //         age: 20,
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("unable to insert user");
  //       }
  //       console.log(result.ops);
  //     }
  //   );
  //   db.collection("task").insertMany(
  //     [
  //       { dec: "clean", completed: true },
  //       { dec: "shower", completed: false },
  //       { dec: "sleep", completed: false },
  //     ],
  //     (error, result) => {
  //       if (error) return console.log(error);
  //       console.log(result.ops);
  //     }
  //   );
});
