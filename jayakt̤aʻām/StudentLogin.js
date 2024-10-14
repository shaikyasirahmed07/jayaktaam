function validateForm(event) {
    // Get the username and password input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Username validation: at least 10 characters with at least one number
    var usernamePattern = /^(?=.*[0-9])[a-zA-Z0-9]{10,}$/;
    if (!usernamePattern.test(username)) {
        alert("Username must be at least 10 characters long and include at least one number.");
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Password validation: at least 15 characters, at least one number and one special character
    var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{15,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 15 characters long and include at least one number and one special character.");
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // If both are valid, the form will be submitted
    return true;
}