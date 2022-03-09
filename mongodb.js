const { MongoClient } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to MongoDB");
    }

    const db = client.db("task-manager");
    db.collection("users")
      .insertMany([
        { name: "Maryam", age: 50 },
        { name: "Asghar", age: 60 },
      ])
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
