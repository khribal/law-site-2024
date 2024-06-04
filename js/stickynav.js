window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.nav-bottom-cont');
    var bannerHeight = document.querySelector('.nav-top').offsetHeight;

    if (window.pageYOffset > bannerHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});