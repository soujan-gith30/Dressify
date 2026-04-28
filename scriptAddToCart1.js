// script.js
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let cart = [];

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Get product details
        const product = {
            name: "Product " + (index + 1),
            price: 20.00,
        };

        // Add the product to the cart
        cart.push(product);

        // Update the cart items and total
        updateCart();
    });
});

function updateCart() {
    // Clear existing cart items
    cartItemsList.innerHTML = '';

    // Initialize cart total
    let total = 0;

    // Populate the cart items
    cart.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);

        // Update the total
        total += product.price;
    });

    // Update the cart total
    cartTotal.textContent = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', () => {
    // Implement the checkout logic here (e.g., redirect to a checkout page)
});
