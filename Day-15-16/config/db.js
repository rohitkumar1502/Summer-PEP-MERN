// const { MongoClient , ServerApiVersion} = require("mongodb");
const mongoose = require("mongoose");
const uri =
 // "mongodb+srv://<usename>:<password>@cluster0.xlrkbeu.mongodb.net/<dbname>?appName=Cluster0";
 "mongodb+srv://<usename>:<password>@myatlasclusteredu.cnvw2mx.mongodb.net/<dbname>?appName=myAtlasClusterEDU";
let m_uri = uri;
m_uri = m_uri.replace("<usename>", process.env.DB_USERNAME);
m_uri = m_uri.replace("<password>", process.env.DB_PASSWORD);
m_uri = m_uri.replace("<dbname>", process.env.DB_NAME);

/*
const client = new MongoClient(m_uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

const database = client.db(process.env.DB_NAME);
const productCollection = database.collection(process.env.COLLECTION_NAME);

module.exports = {
  productCollection,
};
*/

mongoose
  .connect(m_uri)
  .then(() => console.log("------------DB conected--------"))
  .catch((err) => {
    console.log("Error in DB");
    console.log(err);
  });
