$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        responsiveClass: true,
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 1,
                rows: 2,
                nav: true
            },
            600: {
                items: 3,
                rows: 2,
                nav: true
            },
            1000: {
                items: 3,
                rows: 2,
                nav: true,
                loop: false
            }
        },
        nav: true
    });
});