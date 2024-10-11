// script.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic form validation
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email address.');
            emailInput.focus();
            return;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            messageInput.focus();
            return;
        }

        // If all validations pass, you can proceed with form submission or other actions
        // For example, you might send the form data to a backend service via fetch or XMLHttpRequest
        // This is a basic example, adjust it according to your needs
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };

        // Example of sending form data to a backend endpoint
        // Replace with your actual endpoint URL and HTTP method (POST, GET, etc.)
        fetch('https://example.com/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Form submission successful:', data);
            alert('Your message has been sent successfully!');
            contactForm.reset(); // Reset the form after successful submission
        })
        .catch(error => {
            console.error('Error during form submission:', error);
            alert('An error occurred while sending your message. Please try again later.');
        });
    });
});
