// Scroll to Top
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const readMoreBtn = document.getElementById("readMoreBtn");
  const moreText = document.getElementById("moreText");

  if(readMoreBtn) {
    readMoreBtn.addEventListener("click", function () {
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Read Less ↑";
      } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More ↓";
      }
    });
  }
});

// menu.js
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menuToggle');  // The hamburger menu button
  const mobileNav = document.getElementById('mobileNav'); // The mobile navigation container
  const navLinks = mobileNav.querySelectorAll('.nav-link, .login-button'); // All navigation links + login button

  if (toggleBtn && mobileNav) {
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
  }

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

  // Preview selected file name
  function previewImage(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);

    if (input && preview) {
      input.addEventListener("change", function () {
        preview.innerHTML = ""; // clear old preview
        if (this.files && this.files[0]) {
          const file = this.files[0];
          const reader = new FileReader();
    
          reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.classList.add("img-fluid", "mt-2", "rounded", "shadow");
            img.style.maxHeight = "150px";
            preview.appendChild(img);
          };
    
          reader.readAsDataURL(file);
        }
      });
    }
  }
  
  // Apply preview function to all inputs
  previewImage("passportInput", "passportPreview");
  previewImage("panInput", "panPreview");
  previewImage("photoInput", "photoPreview");

  //Testimonial carousel
  var owl = $("#testimonial-carousel-owl");

  owl.owlCarousel({
    loop: true,
    margin: 20,
    dots: true, // scroll indicators
    nav: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  });

  // arrow events left - right
  $("#prevBtn").click(function(){
    owl.trigger('prev.owl.carousel');
  });
  $("#nextBtn").click(function(){
    owl.trigger('next.owl.carousel');
  });

  //Gallery filter carousel
  const scroller = document.getElementById('filterScroll');
  const prevBtnG  = document.getElementById('filterPrev');
  const nextBtnG  = document.getElementById('filterNext');

  const scrollAmount = 200; // px per click
  if(scroller) {
    prevBtnG.addEventListener('click', function () {
    scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtnG.addEventListener('click', function () {
      scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  const cards = document.querySelectorAll(".testimonial-item");
  let startIndex = 0;

  // Function to detect how many cards should be shown based on screen width
  function getCardsPerView() {
    return window.innerWidth < 768 ? 1 : 3; // 1 card on mobile, 3 on desktop
  }

  //Show/hide gallery cards on filter clicked
  function showCards(index) {
    const cardsPerView = getCardsPerView();
    cards.forEach((card, i) => {
      card.classList.add("d-none");
      if (i >= index && i < index + cardsPerView) {
        card.classList.remove("d-none");
      }
    });
  }

  let prevBtn = document.getElementById("prevBtn");
  if(prevBtn) {
    prevBtn.addEventListener("click", () => {
    const cardsPerView = getCardsPerView();
    startIndex = (startIndex - cardsPerView + cards.length) % cards.length;
    showCards(startIndex);
  });
  }

  let nextBtn = document.getElementById("nextBtn");
  if(nextBtn) {
    nextBtn.addEventListener("click", () => {
    const cardsPerView = getCardsPerView();
    startIndex = (startIndex + cardsPerView) % cards.length;
    showCards(startIndex);
  });
  }

  // Handle resizing to update card layout
  window.addEventListener("resize", () => {
    showCards(startIndex);
  });

  // Initial display
  showCards(startIndex);

});

// Scripting for the map location data
document.addEventListener("DOMContentLoaded", function () {
  const markers = document.querySelectorAll(".map-marker");
  const tooltip = document.getElementById("locationTooltip");
  const tooltipTitle = document.getElementById("tooltipTitle");
  const tooltipContent = document.getElementById("destinationTooltipContent");
  const tooltipClose = document.getElementById("tooltipClose");

  // Add the data for the location here
  const locationData = {
    iraq: `
      <ol class="ps-3">
        <li>About Karbala
          <ul class="list-unstyled ms-3">
            <li><a href="#">Imam Husain As</a></li>
            <li><a href="#">Moulana Abbas As</a></li>
            <li><a href="#">Moulana Ali Akbar & Ali Asgar As</a></li>
            <li><a href="#">Atraaf Ziyarat</a></li>
          </ul>
        </li>
        <li>About Najaf e Ashraf
          <ul class="list-unstyled ms-3">
            <li><a href="#">Moulana Ali As</a></li>
            <li><a href="#">Masjid e Aazam</a></li>
            <li><a href="#">Atraaf Ziyarat</a></li>
          </ul>
        </li>
        <li>About Najaf e Ashraf
          <ul class="list-unstyled ms-3">
            <li><a href="#">Moulana Ali As</a></li>
            <li><a href="#">Masjid e Aazam</a></li>
            <li><a href="#">Atraaf Ziyarat</a></li>
          </ul>
        </li>
        <li>AQA Moula TUS Safar Photos
        </li>
        <li><a href='destination-about-after-login.html#packageContainer'>Packages</a>
        </li>
      </ol>
    `,
    egypt: `<ol class="ps-3">
          <li>About Al Qahera Al Muizziyah
            <ul class="list-unstyled ms-3">
              <li><a href="#">Rasul Imam Husain AS</a></li>
              <li><a href="#">Maulatana Zainab AS</a></li>
              <li><a href="#">Maultana Nafisa AS</a></li>
              <li><a href="#">Maulatana Ruqaiyah AS</a></li>
              <li><a href="#">Jawam e Fatimiyah</a></li>
              <li><a href="#">Maulatana Ruqaiyah AS</a></li>
              <li><a href='destination-about-after-login.html#packageContainer'>Packages</a></li>
            </ul>
          </li>
        </ol>`,
    syria: `<ol class="ps-3">
      <li>About Syria
        <ul class="list-unstyled ms-3">
          <li><a href="#">Maulatana Sakina AS</a></li>
          <li><a href="#">Maulatana Umme Kulsum AS</a></li>
          <li><a href="#">Atraaf Ziyarat</a></li>
          <li><a href='destination-about-after-login.html#packageContainer'>Packages</a></li>
        </ul>
      </li>
    </ol>`,
    jordan:  `<ol class="ps-3">
      <li>About Amman
        <ul class="list-unstyled ms-3">
          <li><a href="#">Akhbar - Maulana Jafar ul Taiyar AS</a></li>
          <li><a href='destination-about-after-login.html#packageContainer'>Packages</a></li>
        </ul>
      </li>
    </ol>`,
    tunisia:  `<ol class="ps-3">
    <li>About Tunisia
      <ul class="list-unstyled ms-3">
        <li><a href="#">Significance of Tunisia (Aimmat Fatimiyeen AS)</a></li>
        <li><a href="#">Syedna Mohammad Burhanuddin RA's historic visit to Tunisia</a></li>
        <li><a href="#">Landmarks and historical sites in Tunisia</a></li>
        <li><a href='destination-about-after-login.html#packageContainer'>Packages</a></li>
      </ul>
    </li>
  </ol>`,
    bait: `<p>Content about Bait al-Muqaddas here.</p>`,
    saudi: `<p>Content about Saudi Arabia here.</p>`,
    yemen:  `<ol class="ps-3">
    <li>About Yemen 
      <ul class="list-unstyled ms-3">
        <li><a href="#">Naqlul Dawat Ila Yemen</a></li>
        <li><a href="#">Maulatana Hurratul Maleka RA</a></li>
        <li><a href="#">Akhbar ul Duat RA</a></li>
          <ol class="ps-3">
            <ul class="list-unstyled ms-3">
              <li><a href="#">Syedna Hatim RA</a></li>
              <li><a href="#">Syedna Ali bin Moula Mohammad Al Walid RA</a></li>
              <li><a href="#">Syedna idris RA</a></li>
            </ul>
          </ol>
        <li><a href='destination-about-after-login.html#packageContainer'>Packages</a></li>
      </ul>
    </li>
  </ol>`,
  };

  // calculates the width/height of the screen on hover and accordingly places the popup in the bottom/top
  markers.forEach(marker => {
    marker.addEventListener("mouseover", function () {
      const rect = marker.getBoundingClientRect();
      const containerRect = marker.closest(".map-container").getBoundingClientRect();
      const location = this.dataset.location;

      tooltipTitle.textContent = this.querySelector("span").textContent;
      tooltipContent.innerHTML = locationData[location] || "<p>No details available.</p>";

      tooltip.style.visibility = "hidden";
      tooltip.style.display = "block";

      const tooltipHeight = tooltip.offsetHeight;
      const tooltipWidth = tooltip.offsetWidth;

      const spaceAbove = rect.top - containerRect.top;
      const spaceBelow = containerRect.height - (rect.bottom - containerRect.top);

      let top, placement;

      if (spaceAbove > tooltipHeight + 20) {
        // fits above
        top = rect.top - containerRect.top - tooltipHeight - 20;
        placement = "top";
      } else if (spaceBelow > tooltipHeight + 20) {
        // fits below
        top = rect.bottom - containerRect.top + 20;
        placement = "bottom";
      } else {
        // force to top of container
        top = 10;
        placement = "bottom"; // arrow still points up
      }

      let left = rect.left - containerRect.left - tooltipWidth / 2 + rect.width / 2;

      if (left + tooltipWidth > containerRect.width) {
        left = containerRect.width - tooltipWidth - 10;
      }
      if (left < 0) left = 10;

      tooltip.classList.remove("top", "bottom");
      tooltip.classList.add(placement);

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;

      // Arrow alignment
      const markerCenterX = rect.left - containerRect.left + rect.width / 2;
      const arrowX = markerCenterX - left;
      tooltip.style.setProperty("--arrow-position", `${arrowX}px`);

      tooltip.style.visibility = "visible";
    });
  });

    if(tooltipClose) {
    tooltipClose.addEventListener("click", () => {
      tooltip.style.display = "none";
    });
  }
});
