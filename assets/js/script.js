// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria-expanded attribute
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle active class on nav
      mainNav.classList.toggle('active');
      
      // Toggle active class on button for animation
      menuToggle.classList.toggle('active');
    });
    
    // Close menu when a nav link is clicked
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
