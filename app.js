const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");


mobileMenuButton.addEventListener("click", function () {
    mobileMenuButton.classList.toggle("bx-x")
      mobileMenu.classList.toggle("hidden");
});

const header = document.querySelector("header");
window.addEventListener("scroll", function () {

      if (window.scrollY > 100) {
            header.classList.toggle("sticky", window.scrollY > 0);
            header.style.backgroundColor = 'white';
            header.classList.add("shadow")
        }
        else{
            header.classList.remove("shadow")
        }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          const targetSection = document.querySelector(this.getAttribute('href'));
          const navHeight = document.querySelector('nav').offsetHeight;
          let extraPadding = 0;
          if (window.innerWidth >= 768) {
            extraPadding = 50; 
        }
  
          window.scrollTo({
              top: targetSection.offsetTop - navHeight - extraPadding,
              behavior: 'smooth'
          });

        if (window.location.hash) {
            window.location.replace(window.location.pathname);
        }

      });
  });
  