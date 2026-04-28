

// script.js
window.onload = function () {
    const loginPopup = document.getElementById("login-popup");
    const closePopupButton = document.getElementById("close-popup");

    // Display the popup
    loginPopup.style.display = "flex";

    // Close the popup when the close button is clicked
    closePopupButton.addEventListener("click", function () {
        loginPopup.style.display = "none";
    });
};
