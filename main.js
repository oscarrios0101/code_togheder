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

const products = [
  {
    id: 1,
    name: "Camisa negra bonita",
    price: 4,
    image: "img/black_shirt.jpg",
    quantity: 3,
    stock: 10,
  },
  {
    id: 2,
    name: "hoodie cafe",
    price: 2,
    image: "img/brown_hoddie.jpg",
    quantity: 1,
    stock: 10,
  },
  {
    id: 3,
    name: "Camisa ramen bonita",
    price: 1,
    image: "img/ramen_shirt.jpg",
    quantity: 1,
    stock: 10,
  },
];

let cartItems = [];

//create an unique id
function generateShortId() {
  const fullId = crypto.randomUUID();
  // Extract and truncate the ID to 10 digits
  return fullId.slice(0, 20);
}

const productsSection = document.getElementById("products");
const productTemplate = document.getElementById("grid-product");
const cartTemplate = document.getElementById("cart-product-template");
const cartItemsSection = document.getElementById("cart-items");

// Function to create a product article and append it to the products section
function createProductArticle(product) {
  const article = productTemplate.content.cloneNode(true);

  // Set the product details in the article
  article.querySelector(".products__img").src = product.image;
  article.querySelector(".product__title").textContent = product.name;
  article.querySelector(".product__price").textContent = `$${product.price}`;
  product.id = generateShortId();
  article.querySelector("article").setAttribute("data-product-id", product.id);

  productsSection.appendChild(article);
}

//add a event listener to each button products with event delegation
productsSection.addEventListener("click", (event) => {
  if (event.target.id === "add-to-cart-button") {
    console.log("add to cart button clicked");
    const productId = event.target
      .closest("[data-product-id]")
      .getAttribute("data-product-id");
    console.log("product id", productId);
    const product = products.find((product) => product.id === productId);
    console.log(product);
    checkProductInCart(product);
    renderCart();

    console.log(cartItems);
  }
});

//function that creates a template for the cart items
function renderCart() {
  cartItemsSection.innerHTML = "";

  renderBadge();

  calculateTotal();
  cartItems.forEach((product) => {
    const cartItem = cartTemplate.content.cloneNode(true);
    console.log(product);
    cartItem.querySelector(".cart__img").src = product.image;
    cartItem.querySelector("#nombre-producto").innerHTML = `${product.name} |`;
    cartItem.querySelector("#precio-producto").textContent = `${product.price}`;
    cartItem.querySelector(
      "#cantidad-producto"
    ).innerHTML = `cantidad ${product.quantity} |`;

    cartItem.querySelector("#subtotal-producto").innerHTML = `$ subtotal: ${
      product.price * product.quantity
    }`;

    cartItemsSection.appendChild(cartItem);
    cartItemsSection.addEventListener("click", (event) => {
      if (event.target.id === "borrar-producto") {
        console.log("borrar producto");
        // Add code to handle the "borrar producto" action
      } else if (event.target.id === "eliminar-producto") {
        console.log("eliminar producto");
        event.target.closest(".cart__div").remove();
        // Add code to handle the "eliminar producto" action
      } else if (event.target.id === "aumentar-producto") {
        console.log("aumentar producto");
        console.log("");

        // Add code to handle the "aumentar producto" action
      }
    });
    feather.replace();
  });
}

//function that calculates the total price of the cart
function calculateTotal() {
  let total = 0;
  cartItems.forEach((product) => {
    total += product.price * product.quantity;
  });
  const totalElement = document.getElementById("total");
  totalElement.textContent = `${total}`;
  return total;
}

//function that checks if the product is already in the cart
function checkProductInCart(product) {
  if (cartItems.includes(product)) {
    console.log("product already in cart");
    product.quantity++;

    console.log(product.quantity);
    // cartItems.push(product);
  } else {
    console.log("product not in cart");
    cartItems.push(product);
  }
}

// Loop through the products and create articles
products.forEach(createProductArticle);
console.log(products);

//function that renders the badge
function renderBadge() {
  const cartBadge = document.getElementById("cart-badge");
  let cartBadgeLength = 0;
  cartItems.forEach((product) => {
    cartBadgeLength += product.quantity;
  });
  cartBadge.textContent = cartBadgeLength;

  if (cartItems.length === 0) {
    cartBadge.style.display = "none";
  } else {
    cartBadge.style.display = "block";
  }
}
