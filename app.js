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
    title: "Venom - The Last Dance",
    description: "The end is coming, Eddie… but whose side will we be on when the last dance begins?",
    background: "images/venom the.jpg"
  },
  {
    title: "Head Of States",
    description: "One mistake in power… and the whole nation pays the price.",
    background: "images/Heads of state.jpg"
  },
  {
    title: "Dog Man",
    description: "When the line between hero and hound is crossed… the real fight begins.",
    background: "images/Trailer.jpg"
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

function scrollMovies(direction) {
  const row = document.getElementById('top-movies-row');
  const scrollAmount = 300; // adjust how far it scrolls
  row.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}


