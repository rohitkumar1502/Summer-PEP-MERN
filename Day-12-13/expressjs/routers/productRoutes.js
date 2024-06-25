const express = require("express");
const productRoute = express.Router();

const {
  getProducts,
  replaceProducts,
  deleteProducts,
  updateProduct,
  patchProduct,
  validateForTitleAndPage,
  getDataMiddleware,
  validateID
} = require("../controllers/productController.js");

productRoute.use(getDataMiddleware)

productRoute.route("/")
.get(getProducts).
post(validateForTitleAndPage, replaceProducts);
productRoute.route("/:id")
.put(validateID,validateForTitleAndPage, updateProduct)
.delete(validateID,deleteProducts)
.patch(validateID,patchProduct);



module.exports = productRoute;
