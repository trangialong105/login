document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate validation logic (replace this with your actual validation)
        const correctUsername = "user@example.com";
        const correctPassword = "password123";

        if (username === correctUsername && password === correctPassword) {
            // Correct credentials, proceed with form submission
            // For example, you can redirect to another page
            window.location.href = '/dashboard';  // Change the URL to your dashboard or appropriate page
        } else {
            // Incorrect credentials, show popup
            alert('Incorrect username or password. Please try again.');
        }
    });
});
