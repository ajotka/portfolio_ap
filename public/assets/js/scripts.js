(function(){
   var hamburger = document.getElementById('hamburger');

   hamburger.addEventListener('click', function(e) {
       this.classList.toggle("change");
       // console.log(document.getElementsByClassName('menu__nav')[0]);
        document.getElementsByClassName('menu__nav')[0].classList.toggle("is-open");
   });
})()