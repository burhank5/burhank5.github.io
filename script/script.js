
// menu.js
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = mobileNav.querySelectorAll('.nav-link, .login-button');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');         // Toggle hamburger-X
    mobileNav.classList.toggle('show');           // Toggle mobile nav visibility

    if (mobileNav.classList.contains('show')) {
      navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          link.style.opacity = '1';
          link.style.transform = 'translateY(0)';
        }, 100 * index);
      });
    }
  });

  //Gallery Toggle
  const buttons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('.gallery-item');

  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      // Activate selected button
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      items.forEach((item, index) => {
        const category = item.getAttribute('data-category');

        // Always reset position first
        item.classList.remove('hide');
        item.style.display = 'block';

        // Use delay for staggered animation
        setTimeout(() => {
          if (filter === 'all' || category === filter) {
            item.classList.remove('hide');
            item.style.display = 'block';
          } else {
            item.classList.add('hide');
            // Wait for animation before hiding completely
            setTimeout(() => item.style.display = 'none', 400);
          }
        }, index * 100); // stagger by 100ms
      });
    });
  });
});
