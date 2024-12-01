// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {
    // Show an alert when the button is clicked
    const showAlertButton = document.getElementById("showAlert");
    showAlertButton.addEventListener("click", () => {
        alert("Hello! This is an interactive button.");
    });

    // Handle form submission
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload
        formFeedback.classList.remove("hidden");
        contactForm.reset(); // Clear form fields
    });
});