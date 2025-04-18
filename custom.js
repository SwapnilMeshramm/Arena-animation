$(document).ready(function () {
    $('.partners-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 4000,
        cssEase: 'linear',
        slidesToShow: 5,
        pauseOnHover: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.testimonials-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
    $('.toggle').click(function () {
        $('.menu').slideToggle();
    });
    $('.course-slider-head').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

});

$(document).ready(function () {
    $("#coursesHov").click(function (event) {
        event.stopPropagation();
        $(".coursesDrop").toggle();
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('.coursesDrop').length) {
            if ($(".coursesDrop").is(":visible")) {
                $(".coursesDrop").hide();
            }
        }
    });
});

// Mobile Menu Toggle
$(document).ready(function() {
    // Toggle mobile menu
    $('.mobile-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    // Close menu when clicking outside
    $(document).on('click', function(e) {
        if ($(e.target).closest('.menu, .mobile-toggle').length === 0 && $('.menu').hasClass('active')) {
            $('.mobile-toggle').removeClass('active');
            $('.menu').removeClass('active');
            $('body').removeClass('menu-open');
            $('.dropdown').removeClass('active');
        }
    });

    // Handle dropdown menus in mobile view
    $('.dropdown > a').on('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            $(this).parent().toggleClass('active');
        }
    });

    // Handle course links in dropdown
    $('.dropdown-menu li a').on('click', function() {
        if (window.innerWidth <= 768) {
            $('.mobile-toggle').removeClass('active');
            $('.menu').removeClass('active');
            $('body').removeClass('menu-open');
            $('.dropdown').removeClass('active');
        }
    });

    // Close menu when clicking other nav links
    $('.nav-links li:not(.dropdown) a').on('click', function() {
        if (window.innerWidth <= 768) {
            $('.mobile-toggle').removeClass('active');
            $('.menu').removeClass('active');
            $('body').removeClass('menu-open');
            $('.dropdown').removeClass('active');
        }
    });
});