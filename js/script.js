$(document).ready(function() {
    $('.hamburger').on("click", function() {
        $(".nav-grid").toggleClass("open");
    });
});

function myFunction(x) {
  x.classList.toggle("change");
}