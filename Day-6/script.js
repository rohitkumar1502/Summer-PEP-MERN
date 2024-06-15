function validateForm() {
    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("ageError").innerText = "";

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    let isValid = true;

    // Validate name
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    // Validate age
    if (age <= 0) {
        document.getElementById("ageError").innerText = "Age must be a positive number.";
        isValid = false;
    }

    if (isValid) {
        // Store data in an object
        const userData = {
            name: name,
            email: email,
            age: age
        };

        // Hide the form and display the card
        document.getElementById("userForm").style.display = "none";
        document.getElementById("userCard").style.display = "block";
        
        // Populate the card with user data
        document.getElementById("userName").innerText = `Name: ${userData.name}`;
        document.getElementById("userEmail").innerText = `Email: ${userData.email}`;
        document.getElementById("userAge").innerText = `Age: ${userData.age}`;
    }

    return false; // Prevent form submission
}