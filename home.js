const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navbar = document.querySelector('.navbar');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    navbar.classList.toggle('menu-open');
})


const banner = document.querySelector('#announcement-banner');
const bannerClose = document.querySelector('#announcement-close');

if (bannerClose) {
  bannerClose.addEventListener('click', function () {
    banner.style.display = 'none';
  });
}


function switchTab(num) {
  document.querySelectorAll('.class-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.class-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.class-panel[data-panel="' + num + '"]').classList.add('active');
  document.querySelector('.class-tab[data-class="' + num + '"]').classList.add('active');
}

