// JavaScript code to handle the cart functionality
let cart = [];
let total = 0;

function addToCart(productName) {
    const quantity = parseInt(document.getElementById('quantity').value);
    const size = document.getElementById('size').value;
    const price = 10.00; // Set the price based on your product

    const itemTotal = price * quantity;
    total += itemTotal;

    // Check if the item with the same name and size already exists in the cart
    const existingItem = cart.find(item => item.productName === productName && item.size === size);

    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.total += itemTotal;
    } else {
        cart.push({
            productName: productName,
            quantity: quantity,
            size: size,
            total: itemTotal,
        });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');

    // Clear the existing cart display
    cartItemsList.innerHTML = '';

    // Display the updated cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} (Size: ${item.size}) x${item.quantity} - $${item.total.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });

    cartTotalDisplay.textContent = total.toFixed(2);
}
