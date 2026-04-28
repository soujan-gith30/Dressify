// script.js
const loginPopup = document.getElementById("login-popup");
const closePopupButton = document.getElementById("close-popup");
const loginButton = document.getElementById("login-button");
const loginForm = document.getElementById("login-form");

// Open the login popup when the login button is clicked
loginButton.addEventListener("click", function () {
    loginPopup.style.display = "block";
});

// Close the login popup when the close button is clicked
closePopupButton.addEventListener("click", function () {
    loginPopup.style.display = "none";
});

// Close the login popup when the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = "none";
    }
});

// Prevent the form from submitting (you can add your login logic here)
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Add your login logic here
});
