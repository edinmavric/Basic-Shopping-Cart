const items = [
  { name: "apple", price: 10 },
  { name: "banana", price: 20 },
  { name: "peach", price: 30 },
];

let cart = [];

function addToCart(index) {
  cart.push(items[index]);
  displayCart();
}

function displayItems() {
  const itemList = items
    .map((item, index) => {
      return `
      <div style="padding: 20px; border: 1px solid orange;">
      <p>${item.name} - $${item.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
      </div>
      `;
    })
    .join("");
  document.querySelector(".item-list").innerHTML = itemList;
}

function displayCart() {
  const cartList = cart
    .map((item) => {
      return `
    <div>
    <p>${item.name} - $${item.price}</p>
    </div>
    `;
    })
    .join("");
  document.querySelector(".cart-list").innerHTML = cartList;
}

displayItems();
displayCart();

const emptyCartBtn = document.getElementById("empty-cart");
emptyCartBtn.addEventListener("click", () => {
  let confirmEmpty = confirm("Are you sure you want to empty cart?");
  if (confirmEmpty === true) {
    document.querySelector(".cart-list").innerHTML = "";
    cart = [];
  }
});

const checkoutCartBtn = document.getElementById("checkout");
checkoutCartBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Please add items to the cart!");
  } else {
    alert("Succesfull purchase, come back again!");
    document.querySelector(".cart-list").innerHTML = "";
    cart = [];
  }
});
