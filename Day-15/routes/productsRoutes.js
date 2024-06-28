const express = require("express");
const {
  getProducts,
  createProduct,
  replaceProduct,
  checkId,
  updateProduct,
  deleteProducts,
} = require("../controllers/productControllers");
const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(createProduct);
productRouter
  .route("/:id")
  .put(checkId, replaceProduct)
  .patch(checkId, updateProduct)
  .delete(checkId, deleteProducts);

module.exports = productRouter;
