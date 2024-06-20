const http = require("http");

const fsPromises = require("fs/promises");
const { start } = require("repl");
const app = http.createServer(async (req, res) => {
  // console.log(Object.keys(req));

  // console.log(req.url)
  // res.write("Welcome12");
  // res.setHeader('Content-Type', 'text/plain');
  //res.setHeader('Content-Type','text/plain');
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  const route = req.url;

  switch(route){
    case "/":{
        const stream = await fsPromises.readFile("./pages/homepage.html");
        res.end(stream);
        break;

    }
    case "/products":{
        const stream = await fsPromises.readFile("./pages/products.html");
        res.end(stream);
        break;
    }
    default:{
        res.end("Opps NOT Found");
    }
  }
  //res.end('<html><body><h1>Welcome124</h1></body></html>');
 
});

app.listen(1400, () => {
  console.log("...........Server Started................");
});
