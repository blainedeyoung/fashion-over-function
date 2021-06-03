/*
I could comment out the the script referencing the bootstrap bundle in
index.html and only import the bootstrap js that I need, but then I'd
have to install popper.js separately.  That would complicate my setup, and
it just doesn't seem worth it for this kind of site.
*/
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

//this script will initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
  return new bootstrap.Tooltip(tooltipTriggerEl, {html: true, container: "body", placement: "top"})
});

//this script will initialize popovers
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
const popoverList = popoverTriggerList.map((popoverTriggerEl) => {
  return new bootstrap.Popover(popoverTriggerEl, {html: true, container: "body", placement: "top"})
});

//the two event listeners below toggle increased navbar size on collapse
//so the links don't spill out over the page content
const collapsible = document.querySelector("#topNavLinks");
const navbar = document.querySelector(".navbar");
collapsible.addEventListener('show.bs.collapse', () => {
  navbar.classList.add("expanded");
})

collapsible.addEventListener('hide.bs.collapse', () => {
  navbar.classList.remove("expanded");
})
