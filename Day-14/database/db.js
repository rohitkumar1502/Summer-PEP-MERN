const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://<username>:<password>@cluster0.xlrkbeu.mongodb.net/<dbName>?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
let dbUrl = uri;
dbUrl = dbUrl.replace("<username>", process.env.DB_USERNAME);
dbUrl = dbUrl.replace("<password>", process.env.DB_PASSWORD);
dbUrl = dbUrl.replace("<dbName>", process.env.DB_NAME);
const client = new MongoClient(dbUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// async function run() {
//   /*
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//    await client.connect();

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
//     */
//   try {
//     const database = client.db(process.env.DB_NAME);
//     const produects = database.collection("productsimge");
//     const res = await produects.insertOne({
//       name: "Rohit",
//     });
//     console.log("😃😃DB is connetect😃😃😃😃");
//   } catch (err) {
//     console.log(err);
//   }
// }

// run().catch(console.dir);

const database = client.db(process.env.DB_NAME);
const produectsCollection = database.collection("productsimge");

module.exports = {
    database,
    produectsCollection,
};
