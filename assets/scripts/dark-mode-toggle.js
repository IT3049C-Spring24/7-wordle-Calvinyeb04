// Get a reference to the mode-toggle span
const modeToggle = document.getElementById('mode-toggle');

// Add event listener to the mode-toggle span
modeToggle.addEventListener('click', () => {
    console.log('Mode toggle clicked');
    
    // Toggle the body class property
    document.body.classList.toggle('light-mode');
});
