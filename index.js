// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')
var check = document.querySelector(".check");
check.addEventListener('click', lenguage);

headerLogoConatiner.addEventListener('click', () => {
  let id=check.checked;
  if (id == true){
    location.href='index_es.html';
  }else{
    location.href='index.html';
  }
})


var check = document.querySelector(".check");
check.addEventListener('click', lenguage);

function lenguage(){
  let id=check.checked;
  const currentURL = window.location.href;
  if (currentURL.includes(".html")) {
    if (id == true){
      const target = currentURL.replace(".html", "_es.html");
      location.href=target;
    }else{
      const target = currentURL.replace("_es", "");
      location.href=target;
    }
  }else{
    location.href='index_es.html';
  }

}