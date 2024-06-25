const fsPromise = require("fs/promises");
const getData = async () => {
  const text = await fsPromise.readFile("./data.json", { encoding: "utf8" });

  let products;
  try {
    products = JSON.parse(text);
  } catch (err) {
    products = [];
  }
  return products;
};

const validateForTitleAndPage = (req, res, next) => {
  const body = req.body;
  // console.log(body);

  if (!body.title || !body.price) {
    res.json({
      status: "fail",
      message: "Title and price is required",
    });
    return;
  }
  next();
};

const getDataMiddleware = async (req, res, next) => {
  const text = await fsPromise.readFile("./data.json", { encoding: "utf8" });

  let products;
  try {
    products = JSON.parse(text);
  } catch (err) {
    products = [];
  }
  req.products = products;
  next();
};

const validateID = (req, res, next) => {
  const params = req.params;

  const products = req.products;
  console.log(params, products);

  let prIdx = products.findIndex((elem) => {
    if (elem.id == params.id) return true;
    return false;
  });
  if (prIdx === -1) {
    res.status(400);
    res.json({
      status: "fail",
      message: "Invailed product id",
    });
  }
  req.prIdx = prIdx;
  next();
};

const getProducts = async (req, res) => {
  const products = req.products;
  res.json({
    status: "success",
    message: "Server is running",
    data: {
      products: products,
    },
  });
};

const replaceProducts = async (req, res) => {
  // console.log(typeof req)
  // console.log(Object.keys(req))
  const body = req.body;
  // console.log(body);

  const products = req.products;
  let lastId = 0;
  if (products.length != 0) {
    lastId = products[products.length - 1].id;
  }
  //   const prLen = products.length;
  //   const lasstIndex = prLen -1;
  //   const lastItem = products[lasstIndex];
  //   const lastId = lastItem.id;

  body.id = lastId + 1;
  products.push(body);
  console.log(products);
  await fsPromise.writeFile("./data.json", JSON.stringify(products));
  res.status(201);
  res.json({
    status: "Success",
    data: {
      products: body,
    },
  });
};

const deleteProducts = async (req, res) => {
  const params = req.params;

  const products = req.products;
  const prIdx = req.prIdx;
  products.splice(prIdx, 1);
  await fsPromise.writeFile("./data.json", JSON.stringify(products));
  res.status(204);
  res.send({
    status: "success",
    data: {
      products: null,
    },
  });
};

const updateProduct = async (req, res) => {
  const params = req.params;
  console.log(params);
  const body = req.body;

  const products = req.products;
  const prIdx = req.prIdx;
  body.id = products[prIdx].id;
  products[prIdx] = body;
  await fsPromise.writeFile("./data.json", JSON.stringify(products));

  //save file
  res.send({
    status: "succes",
    product: products[prIdx],
  });
};

const patchProduct = async (req, res) => {
  const params = req.params;
  const body = req.body;
  const products = req.products;

  const prIdx = req.prIdx;
  const newObj = {
    ...products[prIdx],
    ...body,
  };
  products[prIdx] = newObj;

  await fsPromise.writeFile("./data.json", JSON.stringify(products));
  res.status(204);
  res.send({
    status: "success",
    data: {
      products: null,
    },
  });
};
module.exports = {
  getProducts,
  replaceProducts,
  deleteProducts,
  updateProduct,
  patchProduct,
  validateForTitleAndPage,
  getDataMiddleware,
  validateID,
};
