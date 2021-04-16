const sidebarMenu = document.getElementById("siteNavMobile");
const siteNavButton = document.getElementById("siteNavButton");
var toggle = false;
const body = document.getElementsByTagName('body')[0];

function toggleNav() {
    sidebarMenu.classList.toggle("is-open");
    body.classList.toggle("overflow-y-hidden")

    if (toggle === true) {
        siteNavButton.src = 'src/assets/images/icon-hamburger.svg';

    } else {
        siteNavButton.src = 'src/assets/images/icon-close.svg';
    }
    toggle = !toggle;
}