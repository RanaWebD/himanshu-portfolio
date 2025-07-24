// Smooth scroll for navigation links

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.navbar a');
  for (const link of links) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      }
    });
  }
}); 