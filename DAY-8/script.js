const root = document.getElementById("root");

fetch("https://dummyjson.com/products")
  .then(res => res.json().then(data => createUI(data)))
  .catch(err => console.log("Error Occured", err));

function createUI(data) {
    root.innerHTML = "";
    const products = data.products;

    for(let i = 0; i < products.length; i++){
        
        const newCard = document.createElement('div');
        // const title = document.createElement('h3');
        // title.innerText = products[i].title;
        // newCard.appendChild(title);

        // const img = document.createElement('img');
        // img.setAttribute('src', products[i].thumbnail);
        // newCard.appendChild(img);

        // const price = document.createElement('p');
        // price.innerText = products[i].price;
        // newCard.appendChild(price);
        
        newCard.innerHTML = `
        <div>
         <h3>${products[i].title}</h3>
         <p>${products[i].price}</p>
         <img src="${products[i].thumbnail}">
        </div>
        
        `


        root.appendChild(newCard);
        
    }
}

function searchProduct(e){
    const serchText = e.target.value;
    const pr = fetch(`https://dummyjson.com/products/search?q=${serchText}`);
   
    pr.then((res)=>{
        const pr2 = res.json();
        pr2.then((data) =>{
            createUI(data);
        })
    })
}