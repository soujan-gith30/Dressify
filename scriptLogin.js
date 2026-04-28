// script.js
window.onload = function () {
    const loginPopup = document.getElementById("login-popup");
    loginPopup.style.display = "block";
};

 function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
	const successMessage = document.getElementById("success-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Both username and password are required.";
        return false;
    }

    // Add your authentication logic here (typically, you'd make a server request to verify credentials)

    // For this example, let's use hardcoded credentials for demonstration
    const validUsername = "user@1234";
    const validPassword = "ab7810";

    if (username === validUsername && password === validPassword) {
        errorMessage.textContent = "";
        alert("Login successful!"); // You can redirect the user to another page here
        return true;
    } else {
        errorMessage.textContent = "Invalid username or password.";
        return false;
    }
}
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
