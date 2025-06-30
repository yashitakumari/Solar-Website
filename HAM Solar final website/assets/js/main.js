/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Hide menu on scroll */
window.addEventListener('scroll', () => {
    navMenu.classList.remove('show-menu');
});

/* Hide menu when clicking outside */
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        navMenu.classList.remove('show-menu');
    }
});


  // Handle main dropdown toggle on mobile
  document.querySelectorAll('.dropdown > .dropdown__toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle('show');
    });
  });

  // Handle sub-dropdown toggle on mobile
  document.querySelectorAll('.sub-dropdown').forEach(sub => {
    const parent = sub.parentElement;
    const link = parent.querySelector('.dropdown__toggle');
    if (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        sub.classList.toggle('show');
      });
    }
  });

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
                  const header = document.getElementById('header')
                  // Add a class if the bottom offset is greater than 50 of the viewport
                  this.scrollY >= 50 ? header.classList.add('bg-header') 
                                     : header.classList.remove('bg-header')
              }
              window.addEventListener('scroll', bgHeader)
bgHeader()


function scrollProjects(direction) {
    const container = document.getElementById('projects-scroll');
    const cardWidth = container.querySelector('.projects__card').offsetWidth + 16; // +gap
    container.scrollLeft += direction * cardWidth;
  }


/*=============== SWIPER JS ===============*/
// Initialize Swiper for Services Section
var swiper = new Swiper(".services__swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: "1", // Auto adjusts slides per view

    autoplay: {
        delay: 1200, // Slower transition for better readability
        disableOnInteraction: false, // Keeps autoplay running after user interacts
    },

    speed: 1000, // Smooth scrolling speed

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true, // Allows clicking on navigation buttons
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: { 
        480: { slidesPerView: 1 }, // 1 slide for small screens
        768: { slidesPerView: 2 }, // 2 slides for tablets
        1024: { slidesPerView: 2 } // 3 slides for larger screens
    }
});



  var swiper = new Swiper(".project__swiper", {
    loop: false,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
scrollUp()

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
 origin: 'top',
 distance: '100px',
 duration: 2500,
 delay: 400,
                  
 // reset: true, // Animations repeat
 })
                  
sr.reveal(`.home__content, .services__data, .services__swiper, footer__container`)
sr.reveal(`.home__images`, {origin: 'bottom', delay: 1000}) 
sr.reveal(`.about__images, .contact__img`, {origin: 'left'})
sr.reveal(`.about__data, contact__data`, {origin: 'right'})
sr.reveal(`.projects__card`, {interval: 100})





document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownToggle = dropdown.querySelector(".dropdown__toggle");

    // Toggle dropdown on click
    dropdownToggle.addEventListener("click", function (e) {
        e.preventDefault();
        dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });

    // Hide dropdown when scrolling
    window.addEventListener("scroll", function () {
        dropdown.classList.remove("active");
    });
});















