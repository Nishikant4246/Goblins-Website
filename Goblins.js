let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

const effect = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

effect.reveal('.hero-text', {delay:200, origin:'top'});
effect.reveal('.hero-img', {delay:450, origin:'top'});
effect.reveal('.icons', {delay:500, origin:'left'});