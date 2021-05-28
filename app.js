// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';

//this is the span that will hold the power powerWords
const powerWordSpan = document.getElementById('powerWords');
const powerWords = ['Elegant', 'Professional', 'Sharp', 'Sensual', 'Fun', 'Classic'];

//image box images grouped into an array
const unsplash1 = document.getElementById('unsplash1');
const unsplash2 = document.getElementById('unsplash2');
const unsplash3 = document.getElementById('unsplash3');
const unsplash4 = document.getElementById('unsplash4');
const unsplash5 = document.getElementById('unsplash5');
const unsplash6 = document.getElementById('unsplash6');
const centerImages = [unsplash1, unsplash2, unsplash3, unsplash4, unsplash5, unsplash6];

//this function will set the z-index of one of the centerImages above to 1
//and start a timer that will call this again to set the next one in sequence
function setImage(n) {
  centerImages[n].style.zIndex = 1;
  powerWordSpan.innerHTML = powerWords[n];
  setTimeout( () => {
    powerWordSpan.innerHTML = '';
  }, 1990);
  if (n === centerImages.length - 1) {
    setTimeout ( () => {
      setImage(0);
      centerImages[n].style.zIndex = 0;
    }, 10990);
  } else {
    setTimeout ( () => {
      setImage(n+1);
      centerImages[n].style.zIndex = 0;
    }, 10990);
  }
};

window.onload = setTimeout( () => {
  setImage(0);
}, 2000
);