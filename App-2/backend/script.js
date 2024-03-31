const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

// Connect with MongoDB

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

    const userCollection = client.db("Test").collection("users");

    app.post("/user", async (req, res) => {
      const data = req.body;
      const response = await userCollection.insertOne(data);

      res.send(response);
    });

    app.listen("2043", () => {
      console.log("The Server is Running....");
    });
  } finally {
  }
}
run().catch(console.dir);
