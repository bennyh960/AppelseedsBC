const { MongoClient, ObjectID } = require("mongodb");

// just for example - we using mongoose so i think mongodb is not nessacary

const connectionURL = "mongodb://127.0.0.1:27017";
const dataBaseName = "task-manager";

MongoClient.connect(connectionURL, { userNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Error:", error);
  }
  const db = client.db(dataBaseName);
});
