// Sample array of random messages
const randomMessages = [
  "Thank you for adding this item to your cart!",
  "Your choice is great!",
  "This item has been added to your shopping cart.",
  "Happy shopping!",
];

// Function to add an item to the cart
function addToCart() {
  // You can implement your cart logic here, such as adding the item to an array or updating a cart object.
  // For simplicity, we'll just display a message.
  
  // Select a random message from the array
  const randomIndex = Math.floor(Math.random() * randomMessages.length);
  const message = randomMessages[randomIndex];

  // Display the random message
  displayRandomMessage(message);
}

// Function to display a random message
function displayRandomMessage(message) {
  const randomMessageDiv = document.getElementById("randomMessage");
  randomMessageDiv.innerHTML = `<p>${message}</p>`;
}
