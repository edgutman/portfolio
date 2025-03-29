// Core JS

// const header = document.getElementById("page-header");
// const intercept = document.createElement("div");

// intercept.setAttribute("data-observer-intercept", "");
// header.before(intercept);

// const observer = new IntersectionObserver(([entry]) => {
//   header.classList.toggle("active", !entry.isIntersecting);
// });

// observer.observe(intercept);

document.querySelector('.hamburger').addEventListener('click', function() {
  var overlayMenu = document.getElementById('overlay-menu');
  if (overlayMenu.style.display === 'none') {
    overlayMenu.style.display = 'flex';
  } else {
    overlayMenu.style.display = 'none';
  }
});