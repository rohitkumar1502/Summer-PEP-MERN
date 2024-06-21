const http = require("http");
const fsPromises = require("fs/promises");
const url = require("url");

const fs = require("fs");

const dataText = fs.readFileSync(`${__dirname}/data.json`);
const data = JSON.parse(dataText);

const app = http.createServer(async (req, res) => {
  res.writeHead(200, {
    ContentType: "text/html",
  });
  //  const route = req.url
  const { query, pathname } = url.parse(req.url, true);

  switch (pathname) {
    case "/": {
      const bf = await fsPromises.readFile(`${__dirname}/pages/homepage.html`);
      res.end(bf);
      break;
    }
    case "/products": {
      const bf = await fsPromises.readFile(`${__dirname}/pages/products.html`);
      let text = bf.toString();
      let productDetail = "";
      for (let i = 0; i < data.length; i++) {
        productDetail += `
                <div class="product-page">
                  <h3>${data[i].title}</h3>
                  <img src="${data[i].thumbnail}" alt="Product-Image">
                  <p class="des">${data[i].description}</p>
                  <a href="/view?id=${data[i].id}" class= "button button2">Details</a>
                </div>`;
      }

      text = text.replace("$PRODUCT$", productDetail);
      //console.log(data);
      res.end(text);
      break;
    }
    case "/view": {
      const productId = query.id;
      const result = data.find((data) => data.id === parseInt(productId));
      const bf = await fsPromises.readFile(`${__dirname}/pages/details.html`);
      let text = bf.toString();
      let final =""


      if (result) {
        final = `
                <div class="product-details">
                  <h3>${result.title}</h3>
                  <img src="${result.thumbnail}" alt="Product-Image">
                  <p class="des">${result.description}</p>

                </div>`

        // res.end(`
        //         <div class="product-page">
        //           <h3>${result.title}</h3>
        //           <img src="${result.thumbnail}" alt="Product-Image">
        //           <p class="des">${result.description}</p>

        //         </div>`);
      }
      text = text.replace("$DETAILS$", final);
      res.end(text);
      break;
    }
    default: {
      res.end("<h2>Opps: Page not found");
    }
  }
});

app.listen(1400, () => {
  console.log("...........Server Started at 14000 port no..........");
});
