const express = require("express");
const productRoute = require("./routers/productRoutes.js");
const morgan = require("morgan");
const app = express();
// internal midleware
app.use(express.json());

// custom middleware
app.use((req, res, next) => {
  // res.set({"server-time": Data.now()});

  console.log("➣", req.url, req.method);
  next();
});

//external middleware
app.use(morgan("dev"));

app.use("/products", productRoute);

// app.delete("/products/:id",deleteProducts);
// app.patch("/products/:id", patchProduct);

app.listen(3000);
