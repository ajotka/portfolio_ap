/* nav hamburger menu */
(function(){
   var hamburger = document.getElementById('hamburger');

   hamburger.addEventListener('click', function() {
       this.classList.toggle("change");
       // console.log(document.getElementsByClassName('menu__nav')[0]);
        document.getElementsByClassName('menu__nav')[0].classList.toggle("is-open");
   });
})()


(function(){
    var projectHover = document.getElementsByClassName('project');
    projectHover.addEventListener('mouseenter', function() {
        document.getElementsByClassName('project__btn').classList.toggle(":hover");
        console.log(projectHover);
    })
})()