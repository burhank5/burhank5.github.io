
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
        //setTimeout(() => {
          if (filter === 'all' || category === filter) {
            item.classList.remove('hide');
            item.style.display = 'block';
          } else {
            item.classList.add('hide');
            item.style.display = 'none'
            // Wait for animation before hiding completely
            //setTimeout(() => item.style.display = 'none', 400);
          }
        //}, index * 100); // stagger by 100ms
      });
    });
  });

  //Testimonial carousel
  // const cards = document.querySelectorAll(".testimonial-item");
  // let startIndex = 0;

  // function showCards(index) {
  //   cards.forEach((card, i) => {
  //     card.classList.add("d-none");
  //     if (i >= index && i < index + 3) {
  //       card.classList.remove("d-none");
  //     }
  //   });
  // }

  // document.getElementById("prevBtn").addEventListener("click", () => {
  //   startIndex = (startIndex - 1 + cards.length) % cards.length;
  //   showCards(startIndex);
  // });

  // document.getElementById("nextBtn").addEventListener("click", () => {
  //   startIndex = (startIndex + 1) % cards.length;
  //   showCards(startIndex);
  // });

  // // Initialize
  // showCards(startIndex);

  const cards = document.querySelectorAll(".testimonial-item");
  let startIndex = 0;

  // Function to detect how many cards should be shown based on screen width
  function getCardsPerView() {
    return window.innerWidth < 768 ? 1 : 3; // 1 card on mobile, 3 on desktop
  }

  function showCards(index) {
    const cardsPerView = getCardsPerView();
    cards.forEach((card, i) => {
      card.classList.add("d-none");
      if (i >= index && i < index + cardsPerView) {
        card.classList.remove("d-none");
      }
    });
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    const cardsPerView = getCardsPerView();
    startIndex = (startIndex - cardsPerView + cards.length) % cards.length;
    showCards(startIndex);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    const cardsPerView = getCardsPerView();
    startIndex = (startIndex + cardsPerView) % cards.length;
    showCards(startIndex);
  });

  // Handle resizing to update card layout
  window.addEventListener("resize", () => {
    showCards(startIndex);
  });

  // Initial display
  showCards(startIndex);


  // function scrollCarousel(direction) {
  //   const carousel = document.querySelector('.testimonial-carousel');
  //   const scrollAmount = carousel.offsetWidth * 0.33; // scroll 1 card width
  //   carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  // }
});
