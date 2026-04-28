// script.js
const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
const wishlistItemsList = document.getElementById('wishlist-items');
let wishlist = [];

addToWishlistButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Get product details
        const product = {
            name: "Product " + (index + 1),
            price: 20.00,
        };

        // Add the product to the wishlist
        wishlist.push(product);

        // Update the wishlist items
        updateWishlist();
    });
});

function updateWishlist() {
    // Clear existing wishlist items
    wishlistItemsList.innerHTML = '';

    // Populate the wishlist items
    wishlist.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        wishlistItemsList.appendChild(listItem);

        // Add a remove button for each wishlist item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            // Remove the item from the wishlist
            wishlist = wishlist.filter((item) => item !== product);
            updateWishlist();
        });
        listItem.appendChild(removeButton);
    });
}
