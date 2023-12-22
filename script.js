// Function to check if the username follows a valid email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to check if the password meets the specified criteria
function isValidPassword(password) {
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;
    return passwordRegex.test(password);
}

// Function to handle form submission
function submitForm() {
    // Retrieve input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate email format for username
    if (!isValidEmail(username)) {
        alert('Please enter a valid email address for the username.');
        return;
    }

    // Validate password format
    if (!isValidPassword(password)) {
        alert('Password must contain at least one uppercase letter, one number, and only the @ special character is allowed.');
        return;
    }

    if(password==="SmartServTest@123"){
         alert('Login successful!');
         window.location.href = 'dashboard.html';
    }
    else {
        // Display an error message for incorrect password
        alert('Incorrect password. Please try again');
    }
    // Perform other login logic if needed

}

// Add input event listeners for dynamic validation
document.getElementById('username').addEventListener('input', function () {
    var username = this.value;
    var isValid = isValidEmail(username);

    if (!isValid) {
        this.setCustomValidity('Please enter a valid email address.');
    } else {
        this.setCustomValidity('');
    }
});

document.getElementById('password').addEventListener('input', function () {
    var password = this.value;
    var isValid = isValidPassword(password);

    if (!isValid) {
        this.setCustomValidity('Password must contain at least one uppercase letter, one number, and only the @ special character is allowed.');
    } else {
        this.setCustomValidity('');
    }
});
