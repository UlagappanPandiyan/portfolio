$(document).ready(function () {
    // Add initial animation on load for hero content
    setTimeout(function () {
        $('.hero-content').addClass('fade-in');
    }, 200);
});

// Sticky navbar on scroll
$(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();

    $('section').each(function () {
        if ($(this).offset().top <= scrollPosition + 100) {
            var sectionID = $(this).attr('id');
            $('.vertical-nav a').removeClass('active');
            $('.vertical-nav a[href="#' + sectionID + '"]').addClass('active');
        }
    });
});
$(document).ready(function () {
    // Add slide-in effect to each navbar item on load
    $('.vertical-nav ul li').each(function (index) {
        $(this).delay(100 * index).animate({ opacity: 1, transform: 'translateX(0)' }, 500);
    });
});
$(document).ready(function () {
    // Sequentially add the "show" class to each navbar item for slide-in effect
    $('.vertical-nav ul li').each(function (index) {
        $(this).delay(150 * index).queue(function(next) {
            $(this).addClass('show');
            next();
        });
    });
});
