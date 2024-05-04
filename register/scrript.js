function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const eventSelection = document.getElementById("eventSelection").value;

   

    // Example: Display registration details in console
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Selected Event:", eventSelection);


    window.location.href = "index.html";
    alert("registration succesfull!")

    // Here we can send the registration details to a backend server for processing, store in a database, etc.
    // You may need to use AJAX or fetch API for this purpose
    
}