// Function to validate the user's login information
function validateLogin() {
    // Get the username and password entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform basic validation (you can add more sophisticated validation as needed)
    if (username === "prakhar" && password === "12345678") {
        // If username and password are correct, show success message and redirect to main webpage
        alert("Login successful! Welcome, " + username + "!");
        // Redirect to the main webpage
        window.location.href = "main.html"; // Replace "main.html" with the actual URL of your main webpage
    } else {
        // If username or password is incorrect, show error message
        alert("Invalid username or password. Please try again.");
    }
}

// Event listener for form submission
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    validateLogin(); // Call the function to validate login information
});
