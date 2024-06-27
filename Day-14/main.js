require("dotenv").config();
const { insertProduct,getProduct } = require("./controllers/getProducts.js");


const express = require("express");
const app = express();
app.use(express.json());
app.get("/products",getProduct )

app.post("/products", insertProduct)

app.listen(process.env.PORT, ()=>console.log("........Servers startd at 3000"));
