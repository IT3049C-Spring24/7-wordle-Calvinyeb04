// Get a reference to the mode-toggle span
const modeToggleSpan = document.getElementById('mode-toggle');

// Add an event listener to the mode-toggle span
modeToggleSpan.addEventListener('click', function() {
    // Toggle the light-mode class on the body tag
    document.body.classList.toggle('light-mode');
});
