const root = document.getElementById("root");

const fetchProducts = (query = "") => {
  const url = query
    ? `https://dummyjson.com/products/search?q=${query}`
    : "https://dummyjson.com/products";
  return fetch(url).then((result) => {
      const convertData = result.json();
      convertData
        .then(rederUI)
        .catch((e) => alert("error in converting into json data"));
    })
    .catch((error) => alert(error));
};

const rederUI = (data) => {
  root.innerHTML = "";
  const products = data.products;
  for (let i = 0; i < products.length; i++) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <image src="${products[i].thumbnail}" height="200px" width ="200px">
        <h3 class="product-title">${products[i].title}</h3>
    
        <p>Rating: ${products[i].rating}</p>
        <p>${products[i].returnPolicy}</p>
        <h1>${products[i].price}</h1>
        
        `;
    root.appendChild(card);
  }
};

fetchProducts().then(rederUI);

const searchProducts = () => {
  const query = document.getElementById("search-input").value;
  fetchProducts(query).then(rederUI);
};
