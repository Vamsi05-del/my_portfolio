// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#hamburger');
  const navLinks  = document.querySelector('#nav-links');

  if (!hamburger || !navLinks) return;

  // Helpers to show/hide using inline style (works even if CSS isn't applied)
  const showMenu = () => {
    navLinks.classList.add('active');
    navLinks.style.display = 'flex';      // force visible on mobile
  };
  const hideMenu = () => {
    navLinks.classList.remove('active');
    navLinks.style.display = '';          // let CSS control on desktop
  };

  // ✅ Toggle hamburger menu on mobile
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navLinks.classList.contains('active')) {
      hideMenu();
    } else {
      showMenu();
    }
  });

  // ✅ Close when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && e.target !== hamburger) {
      hideMenu();
    }
  });

  // ✅ Close after clicking a nav link
  navLinks.addEventListener('click', (e) => {
    if (e.target.matches('a')) hideMenu();
  });

  // ✅ Keep things tidy when resizing
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.style.display = '';
      navLinks.classList.remove('active');
    }
  });

  // ✅ Smooth scroll for navbar links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.slice(1);
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;

      e.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop - 70, // offset for fixed navbar
        behavior: 'smooth'
      });
    });
  });
});

// contact us

 document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submit
    window.location.href = "thankyou.html"; // Redirect after "submit"
  });