function submitForm() {
    // Get all the form elements
    const fullname = document.getElementById("fullname").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();
    const program = document.getElementById("program").value.trim();
    const year = document.getElementById("year").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Check if all fields are filled
    if (!fullname || !dob || !gender || !contact || !email || !program || !year || !roll || !username || !password || !confirmPassword) {
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