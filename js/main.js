(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    //Header Scroll Sticky
    document.addEventListener('DOMContentLoaded',()=>{
        const fixed=(element, padding)=>{
            const fixedBlock=document.querySelector(element);
            const sticky =fixedBlock.offsetTop;
            if(window.pageYOffset>sticky){
                fixedBlock.classList.add('fixed');
            }else{
                fixedBlock.classList.remove('fixed');
            }
        }
        window.addEventListener('scroll', ()=>{
            fixed('.p-0',true);
        })
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Additional Script for Popup Image
    document.querySelectorAll('.timeline img').forEach(image => {
        image.onclick = () => {

            // Hide the navbar when an image is clicked
            document.querySelector('.p-0').classList.remove('fixed');

            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        }
    });
    
    document.querySelector('.popup-image span').onclick = () => {
        // Show the navbar when the popup image is closed
        document.querySelector('.p-0').classList.add('fixed');
        
        document.querySelector('.popup-image').style.display = 'none';
    };

  
    
})(jQuery);

