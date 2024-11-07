const express = require("express");
const app = express();
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://8harrisl:<sEhdTocw5M08w5YN>@cluster0.0yjao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

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
