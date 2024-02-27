document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById("mode-toggle");

    modeToggle.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");
    });
});
