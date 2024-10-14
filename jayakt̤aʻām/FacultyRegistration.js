function submitForm() {
    // Get all the form elements
    const fullname = document.getElementById("full-name").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const contact = document.getElementById("contact-number").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const department = document.getElementById("department").value.trim();
    const experience = document.getElementById("experience").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if all fields are filled
    if (!fullname || !dob || !gender || !contact || !email || !subject || !department || !experience || !username || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return; // Prevent form submission
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return; // Prevent form submission
    }

    // Redirect to StudentLogin.html if validation passes
    window.location.href = 'StudentLogin.html'; 
}
