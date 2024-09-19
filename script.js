

// Toggle the navbar menu when the hamburger button is clicked
document.getElementById('navbar-toggle').addEventListener('click', function() {
    var menu = document.getElementById('navbar-menu');
    menu.classList.toggle('active'); // Add or remove the 'active' class
});

// JavaScript to highlight the current active navbar link
document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL path
    var currentPath = window.location.pathname;

    // Get all the navbar links
    var navbarLinks = document.querySelectorAll('.navbar-link');

    // Loop through each link
    navbarLinks.forEach(function(link) {
        // Check if the link href matches the current URL path
        if (link.href.includes(currentPath)) {
            // Add the 'active' class to the matching link
            link.classList.add('active');
        } else {
            // Remove the 'active' class from non-matching links
            link.classList.remove('active');
        }
    });
});
