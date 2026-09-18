const productsContainer = document.querySelector("#products");

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json();

  console.log(data);

  data.forEach((product) => {
    productsContainer.innerHTML += `
      <div>
        <h2>${product.title}</h2>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
        <img src="${product.image}" width="150">
      </div>
    `;
  });
}

getProducts();