const express = require("express");
require("dotenv").config();
require("./config/db.js")
const app = express();
app.use(express.json());
const productRouter = require("./routes/productsRoutes");
app.use("/api/v1/products",productRouter);
app.listen(process.env.PORT, ()=>{
    console.log(`----------Server Started at ${process.env.PORT}----------`)
}) 