const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

async function main() {
  // things later

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
}
main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
