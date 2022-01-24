var hamburgerMenu = document.querySelector('#hamburger-menu');
var navMenu = document.querySelector('#header-nav');

var open = false;

hamburgerMenu.addEventListener('click', function() {


    if (!open) {
        navMenu.style.height = '216px';

        open = true;
    }

    else {
        navMenu.style.height = '0';

        open = false;
    }
})