const menu = document.querySelector('.menu');
const navSec = document.querySelectorAll('.nav-sec');
const contactNav = document.querySelectorAll('.contact-nav');
const hamBtn = document.querySelector('.ham-btn');
const closeBtn = document.querySelector('.close-btn');
const menuBtn = document.querySelector('.menu-btn');

function toggleMenu() {
  if (menu.classList.contains('showMenu') && window.innerWidth <= 768) {
    menu.classList.remove('showMenu');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeBtn.style.display = 'block';
    menuBtn.style.display = 'none';
  }
}

hamBtn.addEventListener('click', toggleMenu);
navSec.forEach(
  (navSec) => {
    navSec.addEventListener('click', toggleMenu);
  },
);

contactNav.forEach(
  (contactNav) => {
    contactNav.addEventListener('click', toggleMenu);
  },
);

const sections = document.querySelectorAll('section[id]');

function navHighlighter() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionsId = current.getAttribute('id');

    if (
      scrollY > sectionTop
      && scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector(`.navbar a[href*=${sectionsId}]`).classList.add('active');
    } else {
      document.querySelector(`.navbar a[href*=${sectionsId}]`).classList.remove('active');
    }
  });
}

window.addEventListener('scroll', navHighlighter);