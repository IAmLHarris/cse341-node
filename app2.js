const express = require("express");
const app = express();
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0yjao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

await client.connect();

await listDatabases(client);

try {
  await client.connect();

  await listDatabases(client);
} catch (e) {
  console.error(e);
} finally {
  await client.close();
}

main().catch(console.error);

router.get("/home", (req, res) => {
  res.send("Hello World, This is home router");
});

router.get("/profile", (req, res) => {
  res.send("Hello World, This is profile router");
});

router.get("/login", (req, res) => {
  res.send("Hello World, This is login router");
});

router.get("/logout", (req, res) => {
  res.send("Hello World, This is logout router");
});

app.use("/", router);

app.listen(process.env.PORT || 3000, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || 3000));
});
