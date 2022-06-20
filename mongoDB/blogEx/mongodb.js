const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "blog";

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log(error);
  }
  console.log("connect correctly");

  const db = client.db(databaseName);
  //   db.collection("users").insertMany([
  //     { name: "Benny", email: "be@gmail.com", posts: [] },
  //     { name: "Denna", email: "dana@gmail.com", posts: [] },
  //   ]);
  //   db.collection("users").findOne({ _id: ObjectId("62b0398f5a8ba93a346ca55d") }, (e, u) => {

  //     db.collection("posts").insertOne({
  //       postTitle: "Second blog post",
  //       hostId: ObjectId("62b0398f5a8ba93a346ca55d"),
  //       hostName: u.name,
  //       commentsId: [],
  //     });
  //   });

  //   db.collection("comments").insertMany([
  //     {
  //       postId: ObjectId("62b03e6872d5f84738c07af2"),
  //       userId: ObjectId("62b03a378369ce46ec7ebe36"),
  //       message: "Amazing blog post",
  //       time: new Date(),
  //     },
  //   ]);

  db.collection("comments").findOne({ _id: ObjectId("62b03f4b1cbd321524670fbb") }, (e, u) => {
    db.collection("posts").updateOne({ _id: ObjectId("62b03e6872d5f84738c07af2") }, { $push: { commentsId: u._id } });
  });
  //   db.collection("users").drop();
  //   db.collection("posts").drop();
  //   db.collection("comments").drop();
});
