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

// (function(){
//     var projectHover = document.getElementsByClassName('project');
//     projectHover.addEventListener('mouseenter', function() {
//         document.getElementsByClassName('project__btn').classList.toggle(":hover");
//         console.log(projectHover);
//     })
// })()

/* scroll page */
// function scrollToY(e, t, n) {
//     function o() {
//         var t = (i += 1 / 40) / a,
//             u = c[n](t);
//         t < 1 ? (requestAnimFrame(o), window.scrollTo(0, r + (e - r) * u)) : window.scrollTo(0, e)
//     }
//     var r = window.scrollY || document.documentElement.scrollTop,
//         i = 0;
//     e = e || 0, t = t || 2e3, n = n || "easeOutSine";
//     var a = Math.max(.1, Math.min(Math.abs(r - e) / t, .8)),
//         c = {
//             easeOutSine: function(e) {
//                 return Math.sin(e * (Math.PI / 2))
//             },
//             easeInOutSine: function(e) {
//                 return -.5 * (Math.cos(Math.PI * e) - 1)
//             },
//             easeInOutQuint: function(e) {
//                 return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
//             }
//         };
//     o()
// }
//
//
// function menuControl(e) {
//     for (var t = window.scrollY || document.documentElement.scrollTop, n = e.querySelectorAll('a[href^="#"]'), o = 0; o < n.length; o++) {
//         var r = n[o],
//             i = document.querySelector(r.getAttribute("href"));
//         i.offsetTop <= t && i.offsetTop + i.clientHeight > t ? r.classList.add("active") : r.classList.remove("active")
//     }
// }
//
// function animated(e, t, n) {
//     var o, r = e.querySelectorAll('a[href^="#"]');
//     for (o = 0; o < r.length; o++) r[o].addEventListener("click", function(e) {
//         e.preventDefault(), scrollToY(document.querySelector(this.hash).offsetTop, t, n)
//     })
// }
//
// function scrollSpy(e, t, n) {
//     animated(e, t, n), document.addEventListener("scroll", function() {
//         menuControl(e)
//     })
// }
// window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
//     window.setTimeout(e, 1e3 / 60)
// };
//
//
// // Initialize
// var menu = document.querySelector('.menu__nav');
// scrollSpy(menu, 1);

/* second nav scroll */
// scrollTo = (element) => {
//     window.scroll({
//         behavior: 'smooth',
//         left: 0,
//         top: element.offsetTop
//     });
//     console
// }
//
// document.getElementById("realizations").addEventListener('click', () => {
//     scrollTo(document.getElementsByClassName("cooperation__image"));
// });
//
// document.getElementById("cooperation").addEventListener('click', () => {
//     scrollTo(document.getElementById("cooperation"));
// });
//
// document.getElementById("contact").addEventListener('click', () => {
//     scrollTo(document.getElementById("contact"));
// });

/*third */
// const menuLink = document.getElementsByClassName("menu");
// const destination = document.getElementById("realizations");
//
// menuLink.onclick = function() {
//     destination.scrollIntoView({behavior: 'smooth'});
// };
