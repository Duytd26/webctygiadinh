// Toggle menu mobile
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("active");
});

// Load sản phẩm từ products.json
async function loadProducts() {
  try {
    const res = await fetch("products.json");
    const products = await res.json();
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(p => {
      const item = document.createElement("div");
      item.className = "product";
      item.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
        <button class="btn-cart"><i class="fas fa-cart-plus"></i> Thêm vào giỏ</button>
      `;
      productList.appendChild(item);
    });
  } catch (error) {
    console.error("Lỗi khi load products.json:", error);
  }
}
loadProducts();

// SwiperJS slider
const swiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: { delay: 4000 },
  pagination: { el: ".swiper-pagination", clickable: true }
});
