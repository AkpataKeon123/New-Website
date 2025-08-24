// Add this to your existing app.js file
$(document).ready(function(){
    // Initialize the Owl Carousel for related movies
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items: 2
            },
            600:{
                items: 3
            },
            1000:{
                items: 5
            }
        }
    });
});



