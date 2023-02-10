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

// Projects object

const projects = {
  projectOne: {
    title: 'Project One',
    languages: ['HTML/CSS', 'Ruby on Rials', 'JavaScipt'],
    imgURL: ['../imgs/img1.jpg'],
    content: 'Project one description...',
    live: '#',
    source: '#',
  },

  projectTwo: {
    title: 'Project Two',
    languages: ['HTML/CSS', 'Ruby on Rials', 'JavaScipt'],
    imgURL: ['../imgs/img2.jpg'],
    content: 'Project two description...',
    live: '#',
    source: '#',
  },

  projectThree: {
    title: 'Project Three',
    languages: ['HTML/CSS', 'Ruby on Rials', 'JavaScipt'],
    imgURL: ['../imgs/img3.jpg'],
    content: 'Project three description...',
    live: '#',
    source: '#',
  },

  projectFour: {
    title: 'Project Four',
    languages: ['HTML/CSS', 'Ruby on Rials', 'JavaScipt'],
    imgURL: ['../imgs/img4.jpg'],
    content: 'Project four description...',
    live: '#',
    source: '#',
  },

  projectFive: {
    title: 'Project Five',
    languages: ['HTML/CSS', 'Ruby on Rials', 'JavaScipt'],
    imgURL: ['../imgs/img5.jpg'],
    content: 'Project five description...',
    live: '#',
    source: '#',
  },

  projectSix: {
    title: 'Project Six',
    languages: ['HTML/CSS', 'Ruby on Rials', 'JavaScipt'],
    imgURL: ['../imgs/img6.jpg'],
    content: 'Project six description...',
    live: '#',
    source: '#',
  },
};

// Project one

const body = document.querySelector('body');
const open = document.querySelector('.see-btn-one');

open.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectOne.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectOne.languages[0]}</li>
    <li class="ruby-popup">${projects.projectOne.languages[1]}</li>
    <li class="java-popup">${projects.projectOne.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectOne.imgURL} alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectOne.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectOne.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectOne.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectOne.imgURL} alt="First project demo">
  </div>
  <p class="popup-text">${projects.projectOne.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectOne.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectOne.source}>See source<img class="download" src="imgs/github-black.png"></a>
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

// Project one img

const openImg = document.querySelector('.one');

openImg.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectOne.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectOne.languages[0]}</li>
    <li class="ruby-popup">${projects.projectOne.languages[1]}</li>
    <li class="java-popup">${projects.projectOne.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectOne.imgURL} alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectOne.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectOne.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectOne.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectOne.imgURL} alt="First project demo">
  </div>
  <p class="popup-text">${projects.projectOne.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectOne.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectOne.source}>See source<img class="download" src="imgs/github-black.png"></a>
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

// Project two

const openTwo = document.querySelector('.see-btn-two');

openTwo.addEventListener('click', () => {
  const mainTwo = document.createElement('div');
  mainTwo.className = 'main-two';
  const popupTwo = document.createElement('div');
  popupTwo.className = 'popup-two';
  popupTwo.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectTwo.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectTwo.languages[0]}</li>
    <li class="ruby-popup">${projects.projectTwo.languages[1]}</li>
    <li class="java-popup">${projects.projectTwo.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectTwo.imgURL} alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectTwo.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectTwo.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectTwo.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectTwo.imgURL} alt="First project demo">
  </div>
  <p class="popup-text">${projects.projectTwo.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectTwo.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectTwo.source}>See source<img class="download" src="imgs/github-black.png"></a>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  mainTwo.appendChild(popupTwo);
  body.appendChild(mainTwo);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(mainTwo);
  });
});

// Project two img

const openTwoImg = document.querySelector('.two');

openTwoImg.addEventListener('click', () => {
  const mainTwo = document.createElement('div');
  mainTwo.className = 'main-two';
  const popupTwo = document.createElement('div');
  popupTwo.className = 'popup-two';
  popupTwo.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectTwo.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectTwo.languages[0]}</li>
    <li class="ruby-popup">${projects.projectTwo.languages[1]}</li>
    <li class="java-popup">${projects.projectTwo.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectTwo.imgURL} alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectTwo.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectTwo.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectTwo.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectTwo.imgURL} alt="First project demo">
  </div>
  <p class="popup-text">${projects.projectTwo.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectTwo.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectTwo.source}>See source<img class="download" src="imgs/github-black.png"></a>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  mainTwo.appendChild(popupTwo);
  body.appendChild(mainTwo);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(mainTwo);
  });
});

// Project three

const openThree = document.querySelector('.see-btn-three');

openThree.addEventListener('click', () => {
  const mainThree = document.createElement('div');
  mainThree.className = 'main-three';
  const popupThree = document.createElement('div');
  popupThree.className = 'popup-three';
  popupThree.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectThree.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectThree.languages[0]}</li>
    <li class="ruby-popup">${projects.projectThree.languages[1]}</li>
    <li class="java-popup">${projects.projectThree.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectThree.imgURL} alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectThree.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectThree.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectThree.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectThree.imgURL} alt="First project demo">
  </div>
  <p class="popup-text">${projects.projectThree.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectThree.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectThree.source}>See source<img class="download" src="imgs/github-black.png"></a>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  mainThree.appendChild(popupThree);
  body.appendChild(mainThree);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(mainThree);
  });
});

// Project three img

const openThreeImg = document.querySelector('.three');

openThreeImg.addEventListener('click', () => {
  const mainThree = document.createElement('div');
  mainThree.className = 'main-three';
  const popupThree = document.createElement('div');
  popupThree.className = 'popup-three';
  popupThree.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectThree.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectThree.languages[0]}</li>
    <li class="ruby-popup">${projects.projectThree.languages[1]}</li>
    <li class="java-popup">${projects.projectThree.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectThree.imgURL} alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectThree.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectThree.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectThree.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectThree.imgURL} alt="First project demo">
  </div>
  <p class="popup-text">${projects.projectThree.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectThree.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectThree.source}>See source<img class="download" src="imgs/github-black.png"></a>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  mainThree.appendChild(popupThree);
  body.appendChild(mainThree);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(mainThree);
  });
});
const openFour = document.querySelector('.see-btn-four');

openFour.addEventListener('click', () => {
  const mainFour = document.createElement('div');
  mainFour.className = 'main-four';
  const popupFour = document.createElement('div');
  popupFour.className = 'popup-four';
  popupFour.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectFour.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectFour.languages[0]}</li>
    <li class="ruby-popup">${projects.projectFour.languages[1]}</li>
    <li class="java-popup">${projects.projectFour.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectFour.imgURL} alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectFour.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFour.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFour.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFour.imgURL} alt="First project demo">
  </div>
  <p class="popup-text">${projects.projectFour.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectFour.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectFour.source}>See source<img class="download" src="imgs/github-black.png"></a>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  mainFour.appendChild(popupFour);
  body.appendChild(mainFour);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(mainFour);
  });
});

// Project four img

const openFourImg = document.querySelector('.four');

openFourImg.addEventListener('click', () => {
  const mainFour = document.createElement('div');
  mainFour.className = 'main-four';
  const popupFour = document.createElement('div');
  popupFour.className = 'popup-four';
  popupFour.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectFour.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectFour.languages[0]}</li>
    <li class="ruby-popup">${projects.projectFour.languages[1]}</li>
    <li class="java-popup">${projects.projectFour.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectFour.imgURL} alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectFour.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFour.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFour.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFour.imgURL} alt="First project demo">
  </div>
  <p class="popup-text">${projects.projectFour.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectFour.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectFour.source}>See source<img class="download" src="imgs/github-black.png"></a>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  mainFour.appendChild(popupFour);
  body.appendChild(mainFour);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(mainFour);
  });
});

// Project five

const openFive = document.querySelector('.see-btn-five');

openFive.addEventListener('click', () => {
  const mainFive = document.createElement('div');
  mainFive.className = 'main-five';
  const popupFive = document.createElement('div');
  popupFive.className = 'popup-five';
  popupFive.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectFive.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectFive.languages[0]}</li>
    <li class="ruby-popup">${projects.projectFive.languages[1]}</li>
    <li class="java-popup">${projects.projectFive.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectFive.imgURL} alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectFive.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFive.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFive.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFive.imgURL} alt="First project demo">
  </div>
  <p class="popup-text">${projects.projectFive.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectFive.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectFive.source}>See source<img class="download" src="imgs/github-black.png"></a>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  mainFive.appendChild(popupFive);
  body.appendChild(mainFive);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(mainFive);
  });
});

// Project five img

const openFiveImg = document.querySelector('.five');

openFiveImg.addEventListener('click', () => {
  const mainFive = document.createElement('div');
  mainFive.className = 'main-five';
  const popupFive = document.createElement('div');
  popupFive.className = 'popup-five';
  popupFive.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectFive.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectFive.languages[0]}</li>
    <li class="ruby-popup">${projects.projectFive.languages[1]}</li>
    <li class="java-popup">${projects.projectFive.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectFive.imgURL} alt="First project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectFive.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFive.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFive.imgURL} alt="First project demo">
  <img class="p-img-popup-mini one" src=${projects.projectFive.imgURL} alt="First project demo">
  </div>
  <p class="popup-text">${projects.projectFive.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectFive.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectFive.source}>See source<img class="download" src="imgs/github-black.png"></a>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  mainFive.appendChild(popupFive);
  body.appendChild(mainFive);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(mainFive);
  });
});

// Project six

const openSix = document.querySelector('.see-btn-six');

openSix.addEventListener('click', () => {
  const mainSix = document.createElement('div');
  mainSix.className = 'main-six';
  const popupSix = document.createElement('div');
  popupSix.className = 'popup-six';
  popupSix.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectSix.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectSix.languages[0]}</li>
    <li class="ruby-popup">${projects.projectSix.languages[1]}</li>
    <li class="java-popup">${projects.projectSix.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectSix.imgURL} alt="Sixth project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectSix.imgURL} alt="Sixth project demo">
  <img class="p-img-popup-mini one" src=${projects.projectSix.imgURL} alt="Sixth project demo">
  <img class="p-img-popup-mini one" src=${projects.projectSix.imgURL} alt="Sixth project demo">
  <img class="p-img-popup-mini one" src=${projects.projectSix.imgURL} alt="Sixth project demo">
  </div>
  <p class="popup-text">${projects.projectSix.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectSix.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectSix.source}>See source<img class="download" src="imgs/github-black.png"></a>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  mainSix.appendChild(popupSix);
  body.appendChild(mainSix);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(mainSix);
  });
});

// Project six img

const openSixImg = document.querySelector('.six');

openSixImg.addEventListener('click', () => {
  const mainSix = document.createElement('div');
  mainSix.className = 'main-six';
  const popupSix = document.createElement('div');
  popupSix.className = 'popup-six';
  popupSix.innerHTML = `
  <div class="sub-container">
  <button class="close-btn-popup" type="button"><img src="imgs/close-btn.png"></button>
  <h2 class="p-name-popup">${projects.projectSix.title}</h2>
  <ul class="lenguages-popup">
    <li class="html-popup">${projects.projectSix.languages[0]}</li>
    <li class="ruby-popup">${projects.projectSix.languages[1]}</li>
    <li class="java-popup">${projects.projectSix.languages[2]}</li>
  </ul>
  <img class="p-img-popup one" src=${projects.projectSix.imgURL} alt="Sixth project demo">
  <div class="mini-imgs">
  <img class="p-img-popup-mini one" src=${projects.projectSix.imgURL} alt="Sixth project demo">
  <img class="p-img-popup-mini one" src=${projects.projectSix.imgURL} alt="Sixth project demo">
  <img class="p-img-popup-mini one" src=${projects.projectSix.imgURL} alt="Sixth project demo">
  <img class="p-img-popup-mini one" src=${projects.projectSix.imgURL} alt="Sixth project demo">
  </div>
  <p class="popup-text">${projects.projectSix.content}</p>
  <div class="buttons">
  <a class="see-live" href=${projects.projectSix.live}>See live<img class="download" src="imgs/ic_link.png"></a>
  <a class="see-src" href=${projects.projectSix.source}>See source<img class="download" src="imgs/github-black.png"></a>
  </div>
  <div class="arrow-btns">
    <button class="previous" type="button"><img src="imgs/arrow-l.png">Previous project</button>
    <button class="next" type="button">Next project<img src="imgs/arrow-r.png"></button>
  </div>
  </div>
  `;

  mainSix.appendChild(popupSix);
  body.appendChild(mainSix);

  const close = document.querySelector('.close-btn-popup');
  close.addEventListener('click', () => {
    body.removeChild(mainSix);
  });
});
