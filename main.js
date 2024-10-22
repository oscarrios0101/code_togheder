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
