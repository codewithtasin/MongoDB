const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello!");
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

    const productCollection = client.db("Test").collection("Product");
    app.get("/products", async (req, res) => {
      const id = req.query.id;
      const filter = { _id: new ObjectId(id) };
      const data = await productCollection.findOne(filter);
      res.send(data);
    });

    app.listen("2043", () => {
      console.log("The Server is Runnning....");
    });
  } finally {
  }
}
run().catch(console.dir);
