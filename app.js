//this script will initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    html: true,
    container: "body",
    placement: "top"
  })
});

//this script will initialize popovers
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
const popoverList = popoverTriggerList.map((popoverTriggerEl) => {
  return new bootstrap.Popover(popoverTriggerEl, {
    html: true,
    container: "body",
    placement: "top"
  })
});

//the two event listeners below toggle increased navbar size on collapse
//so the links don't spill out over the page content
const collapsible = document.querySelector("#top-nav-links");
const navbar = document.querySelector(".navbar");
collapsible.addEventListener('show.bs.collapse', () => {
  navbar.classList.add("expanded");
})

collapsible.addEventListener('hide.bs.collapse', () => {
  navbar.classList.remove("expanded");
})