$(document).ready(() => {
    $('#hamburger-menu').click(() => {
       $('#hamburger-menu').toggleClass('active') 
        $('#nav-menu').toggleClass('active') 
    })
    
// setting owl carousel

let navtext = ["<i class='bx bx-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"];

$('#hero-carousel').owlCarousel({
    items:1,
    dots: false,
    loop: true,
    nav:true,
    navText: navtext,
    autoplay: true,
    autoplayHoverPause: true
});
  
    $('#top-movies-slide').owlCarousel({
    items: 6,
    dots: false,
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
 }) 
 
   
})

// HERO SLIDER DATA
const heroSlides = [
  {
    title: "IRON HEART",
    description: "Every hero needs an origin — hers could change the Marvel universe forever.",
    background: "images/download 5.jpg"
  },
  {
    title: "Captain America - Brave New World",
    description: "He carries the shield, but can he carry the weight of a fractured world?",
    background: "images/Screenshot 2025-08-19 130137.png"
  },
  
  
];

let currentSlide = 0;

// SELECT ELEMENTS
const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero-title");
const heroDescription = document.querySelector(".hero-description");
const leftArrow = document.querySelector(".hero-arrow.left");
const rightArrow = document.querySelector(".hero-arrow.right");

// UPDATE HERO CONTENT
function showSlide(index) {
  const slide = heroSlides[index];
  hero.style.backgroundImage = `url('${slide.background}')`;
  heroTitle.textContent = slide.title;
  heroDescription.textContent = slide.description;
}

// ARROW CLICK EVENTS
rightArrow.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  showSlide(currentSlide);
});

leftArrow.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  showSlide(currentSlide);
});

// INITIAL DISPLAY
showSlide(currentSlide);
