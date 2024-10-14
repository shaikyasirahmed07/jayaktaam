function submitForm() {
    // Get the values from the input fields
    const emailOrUsername = document.getElementById("email-username").value.trim();
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if all fields are filled
    if (!emailOrUsername || !newPassword || !confirmPassword) {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    // Here, you can implement the logic for password reset (e.g., send a request to the server)

    // Redirect or show a success message
    alert("Password has been reset successfully!");
    // For demo purpose, we prevent actual form submission
    return false;
}
