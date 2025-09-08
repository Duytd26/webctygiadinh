fetch('products.json')
  .then(response => response.json())
  .then(products => {
    let container = document.getElementById("product-list");
    products.forEach(p => {
      let item = document.createElement("div");
      item.classList.add("product");
      item.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
      `;
      container.appendChild(item);
    });
  })
  .catch(error => console.error("Không load được dữ liệu:", error));
