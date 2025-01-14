// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effect for buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)";
      button.style.transition = "transform 0.3s ease";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });

  // Add hover effect for navbar links
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "#1fb6ff";
      link.style.borderBottom = "2px solid #1fb6ff";
      link.style.transition = "color 0.3s ease, border-bottom 0.3s ease";
    });

    link.addEventListener("mouseleave", () => {
      link.style.color = "#fff";
      link.style.borderBottom = "none";
    });
  });
});


// Hero Section Animation
document.addEventListener('DOMContentLoaded', function() {
  const heroText = document.querySelector('.hero-text h1');
  const subtitle = document.querySelector('.subtitle p');
  const buttons = document.querySelector('.buttons');

  heroText.style.opacity = 0;
  heroText.style.transform = 'translateY(20px)';
  subtitle.style.opacity = 0;
  subtitle.style.transform = 'translateY(20px)';
  buttons.style.opacity = 0;
  buttons.style.transform = 'translateY(20px)';

  setTimeout(() => {
    heroText.style.transition = 'opacity 0.5s, transform 0.5s';
    heroText.style.opacity = 1;
    heroText.style.transform = 'translateY(0)';
  }, 500);

  setTimeout(() => {
    subtitle.style.transition = 'opacity 0.5s, transform 0.5s';
    subtitle.style.opacity = 1;
    subtitle.style.transform = 'translateY(0)';
  }, 1000);

  setTimeout(() => {
    buttons.style.transition = 'opacity 0.5s, transform 0.5s';
    buttons.style.opacity = 1;
    buttons.style.transform = 'translateY(0)';
  }, 1500);
});

// Footer Section Animation
document.addEventListener('DOMContentLoaded', function() {
  const footerLogo = document.querySelector('.footer-logo');
  const footerLinks = document.querySelectorAll('.footer-links a');
  const footerSocial = document.querySelectorAll('.footer-social a');
  const footerP = document.querySelector('.footer-copyright');

  footerLogo.style.opacity = 0;
  footerLogo.style.transform = 'translateY(20px)';
  footerLinks.forEach(link => {
    link.style.opacity = 0;
    link.style.transform = 'translateY(20px)';
  });
  footerSocial.forEach(social => {
    social.style.opacity = 0;
    social.style.transform = 'translateY(20px)';
  });
  footerP.style.opacity = 0;
  footerP.style.transform = 'translateY(20px)';

  setTimeout(() => {
    footerLogo.style.transition = 'opacity 0.5s, transform 0.5s';
    footerLogo.style.opacity = 1;
    footerLogo.style.transform = 'translateY(0)';
  }, 500);

  setTimeout(() => {
    footerLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.transition = 'opacity 0.5s, transform 0.5s';
        link.style.opacity = 1;
        link.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 1000);

  setTimeout(() => {
    footerSocial.forEach((social, index) => {
      setTimeout(() => {
        social.style.transition = 'opacity 0.5s, transform 0.5s';
        social.style.opacity = 1;
        social.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 1500);

  setTimeout(() => {
    footerP.style.transition = 'opacity 0.5s, transform 0.5s';
    footerP.style.opacity = 1;
    footerP.style.transform = 'translateY(0)';
  }, 2000);
});