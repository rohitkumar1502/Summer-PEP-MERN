// const { productCollection } = require("../config/db")
const productModel = require("../models/productModels");

const checkId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) {
      res.status(404).json({
        status: "fail",
        message: "product ID not found",
      });
      return;
    }
    next();
  } catch (err) {
    if (err.name == "CastError") {
      res.status(400).json({
        status: "Fail",
        message: "Invailed product id",
      });
    }
    res.status(500).json({
      status: "fail",
      err: "Internal Server Error",
    });
  }
};
const getProducts = async (req, res) => {
  // const products = await productCollection.find().toArray();
  const products = await productModel.find({}).limit(10);

  res.send({
    status: "success",
    data: {
      // products : products
      products,
    },
  });
};

const createProduct = async (req, res) => {
  try {
    const body = req.body;
    console.log("....", body);
    // const newProduc = await productCollection.insertOne(body);
    const newProduc = await productModel.create(body);

    res.json({
      status: "sucess",
      products: newProduc,
    });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({
      status: "failed",
      message: "Internal server Error",
    });
  }
};

const replaceProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const replace = await productModel.findOneAndReplace({ _id: id }, body, {
      new: true,
    });

    res.send({
      status: "success",
      data: {
        products: replace,
      },
    });
  } catch (err) {
    console.log(err);
    console.log("Internal error in repalace product");
    console.log(Error.message);
    res.status(500).json({
      succuss: false,
      message: "Internal server error",
      info: err,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    body.updatedAt = Date.now();
    const updatedproducts = await productModel.findOneAndUpdate(
      { _id: id },
      body,
      { new: true }
    );
    res.status(200).json({
      status: true,
      data: updatedproducts,
    });
  } catch (err) {
    console.log(err);
    console.log("Internal error in updating product");
    console.log(Error.message);
    res.status(500).json({
      succuss: false,
      message: "Internal server error",
      info: err,
    });
  }
};
const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    await productModel.findOneAndDelete({ _id: id });
    res.status(204).json({
      status: true,
      data: null,
    });
  } catch (err) {
    console.log(err);
    console.log("Internal error in updating product");
    console.log(Error.message);
    res.status(500).json({
      succuss: false,
      message: "Internal server error",
      info: err,
    });
  }
};

const listProducts = async (req, res) => {
  try {
      const { limit = 10, q = "", fields = "", sort = "price", page = 1, ...filters } = req.query;
      const selectionFields = fields.split("_").join(" ");
      const sortFields = sort.split("_").join(" ");
      let productsQuery = productModel.find(filters);
      // searching functionality
      productsQuery = productsQuery.where("title").regex(q);
      // reduce response size and select specific fields
      productsQuery = productsQuery.select(selectionFields);

      // count the total of result documents
      const countQuery = productsQuery.clone();
      const totalData = await countQuery.countDocuments();

      // sorting
      productsQuery = productsQuery.sort(sortFields);

      // pagination
      productsQuery = productsQuery.skip((page - 1) * limit);
      productsQuery = await productsQuery.limit(limit);

      res.json({
          status: "success",
          results: productsQuery.length,
          totalData: totalData,
          data: {
              pizzas: productsQuery,
          },
      });
  } catch (err) {
      res.status(500);
      res.json({
          status: "fail",
          message: "Internal Server Error",
      });
  }
};
module.exports = {
  getProducts,
  createProduct,
  replaceProduct,
  checkId,
  updateProduct,
  deleteProducts,
  listProduct,
};
