const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://tasin2043:mongodb%40t2aos4i3n@cluster0.dvbfkfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const productCollection = client.db("sample_mflix").collection("comments");

    app.get("/products", async (req, res) => {
      const data = await productCollection.find().toArray();
      res.send(data);
    });

    app.listen(5000, () => {
      console.log("The server is running...");
    });
  } finally {
  }
}
run().catch(console.dir);
