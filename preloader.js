window.onload = function() {
  let preloadElement = document.querySelector('.preload');
  setTimeout(function() {
    preloadElement.style.animation = 'slideUp 1.5s ease forwards';
  }, 2500); 
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

gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach(link => {
  link.addEventListener("click", () => {
    // Turn navs color
    gsap.to(links, {color: "#000000"});
    if (document.activeElement === link) {
      gsap.to(link, {color: "#00000"});
    }
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

function scrollRotate() {
  let image = document.getElementById('star');
  image.style.transform = "rotate(" + window.scrollY/2 + "deg)";
}
