window.onload = function() {
  window.scrollTo(0, 0);
};

// Rul til toppen af siden, når der refresher
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});
// Preloader
document.body.style.overflow = "hidden";
setTimeout(function() {
  document.body.style.overflow = "";
}, 2500); 

window.onload = function() {
  let preloadElement = document.querySelector('.preload');
  setTimeout(function() {
    preloadElement.style.animation = 'slideUp 1s ease forwards';
  }, 2000); 
};
// Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px")
})
document.addEventListener('click', () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 300)
})

// Nav menu
gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach(link => {
  link.addEventListener('click', e => {
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1,
      ease: "elastic.out(1,0.5)",
      absolute: true,
    });
  });
});

window.onscroll = function() {
  scrollRotate();
};

// Rotate star
function scrollRotate() {
  let images = document.querySelectorAll('.star');
  images.forEach(function(image) {
    image.style.transform = "rotate(" + window.scrollY/4 + "deg)";
  });
}


// ScrollReveal
ScrollReveal().reveal('.nav-links', { delay: 2800 });
ScrollReveal().reveal('#herobanner', { delay: 2500 });


(function () {
  var words = ["Designer","UI/UX udvikler", "Frontend udvikler"],
  i = 0;
  setInterval(function(){ $('#words').fadeOut(function(){
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    }); }, 2000)
})();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); /* Rul til toppen med en glat overgang */
}

