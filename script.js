document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var errorMessage = '';

    if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match!';
    } else if (password.length < 6) {
        errorMessage = 'Password must be at least 6 characters!';
    }

    if (errorMessage) {
        document.getElementById('error-message').innerText = errorMessage;
    } else {
        document.getElementById('error-message').innerText = '';
        alert('Signup successful!');
        // Optionally, submit the form data to a server here
    }
});
