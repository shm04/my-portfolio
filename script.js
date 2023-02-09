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

const body = document.querySelector('body');
const open = document.querySelector('.see-btn');

open.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">Project name goes here</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">HTML/CSS</li>
    <li class="ruby-popup">Ruby on Rails</li>
    <li class="java-popup">JavaScript</li>
  </ul>
  <img class="p-img-popup one" src="imgs/img1.jpg" alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src="imgs/img1.jpg" alt="First project demo">
  <img class="p-img-popup-mini one" src="imgs/img1.jpg" alt="First project demo">
  <img class="p-img-popup-mini one" src="imgs/img1.jpg" alt="First project demo">
  <img class="p-img-popup-mini one" src="imgs/img1.jpg" alt="First project demo">
  </div>
  <p class="popup-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
  </p>
  <div class="buttons">
  <button class="see-live" type="button">See live<img class="download" src="imgs/ic_link.png"></button>
  <button class="see-src" type="button">See source<img class="download" src="imgs/github-black.png"></button>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });
});