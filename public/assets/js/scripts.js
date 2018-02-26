/* nav hamburger menu */
(function(){
   var hamburger = document.getElementById('hamburger');

   hamburger.addEventListener('click', function() {
       this.classList.toggle("change");
       // console.log(document.getElementsByClassName('menu__nav')[0]);
        document.getElementsByClassName('menu__nav')[0].classList.toggle("is-close");
   });
})()
/* end menu */

/* smooth scroll */
function handleLinkClick (e) {
    e.preventDefault();

    document
        .querySelector(e.target.hash)
        .scrollIntoView({ behavior: 'smooth' });
}

var links = document.querySelectorAll('ul.menu__nav li a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', handleLinkClick);
}

/* end smooth scroll */

// Get the container element
var btnContainer = document.getElementsByClassName("menu__nav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.querySelectorAll('link');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}