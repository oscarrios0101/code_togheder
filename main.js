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
    price: 555,
    image: "img/black_shirt.jpg",
    quantity: 1,
    stock: 10,
  },
  {
    id: 2,
    name: "hoodie cafe",
    price: 555,
    image: "/img/brown_hoddie.jpg",
    quantity: 1,
    stock: 10,
  },
  {
    id: 3,
    name: "Camisa ramen bonita",
    price: 555,
    image: "/img/ramen_shirt.jpg",
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
    const productId =
      event.target.parentElement.getAttribute("data-product-id");
    console.log("product id", productId);
    //     const product = products.find((product) => product.id === productId);
    //     console.log(product);
    //     cartItems.push(product);
    //     console.log(cartItems);

    //   }
  }
});

console.log(productsSection);

// Loop through the products and create articles
products.forEach(createProductArticle);
console.log(products);

//function to add an event listener to each button products
