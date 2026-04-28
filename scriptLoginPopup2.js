// script.js
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting (for demonstration purposes)
 // Check the user's credentials (replace with your authentication logic)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "your_username" && password === "your_password") {
        // Redirect to the target page after successful login
        window.location.href = 'target-page.html'; // Replace with your desired page's URL
    } else {
         errorMessage.textContent = "Invalid username or password. Please try again.";
        return false;
    }
});

 function validateForm() {
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting (for demonstration purposes)
 // Check the user's credentials (replace with your authentication logic)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "your_username" && password === "your_password") {
        // Redirect to the target page after successful login
        window.location.href = 'target-page.html'; // Replace with your desired page's URL
    } else {
         alert('Login Successful.')
    }
});

    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
	

    if (username === "" || password === "") {
        errorMessage.textContent = "Both username and password are required.";
        return false;
    }

    // Add your authentication logic here (typically, you'd make a server request to verify credentials)

    // For this example, let's use hardcoded credentials for demonstration
    const validUsername = "user@1234";
    const validPassword = "ab7810";

    if (username === validUsername && password === validPassword) {
        alert('Login Successful.')
        window.location.href = 'file:///C:/Users/susmi/OneDrive/Desktop/TICKETMOVIE/html5thSemtable/dressifywNew3.html'; // Replace with your desired page's URL
	 
	 // You can redirect the user to another page here
        return true;
    } else {
        errorMessage.textContent = "Invalid username or password.Try Again.";
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




