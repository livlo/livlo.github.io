$(document).ready(() => {
    // $.each($('#navbar').find('li'), function() {
    //     $(this).toggleClass('active', 
    //         window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    // }); 
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        // mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 560,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });
    
    $('.slider-2').slick({
        // centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        // mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 560,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });

    
});