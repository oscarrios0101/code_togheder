const cartIcon = document.querySelector("#shopping-cart");
const cart = document.querySelector(".cart");
//agregar event listener al carrito
cartIcon.addEventListener("click", () => {
  console.log("cart clicked");
  cart.classList.toggle("show");
});

//agregar event lisener al icono de x
const closeCart = document.querySelector("#cerrar-carrito");
closeCart.addEventListener("click", () => {
  cart.classList.toggle("show");
});

const product1 = {
  id: 1,
  name: "Camisa negra bonita",
  price: 555,
  image: "img/black_shirt.jpg",
  quantity: 1,
};
