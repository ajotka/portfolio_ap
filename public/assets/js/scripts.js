/* menu toggle */
function myFunction(x) {
    x.classList.toggle("change");
}

function toggleMenu() {
    document.getElementsByClassName('menu__nav is-open').classList.remove('is-open');
}



// document.getElementsByClassName('menu__nav-bar').addEventListener('clock', function() {
//     document.getElementsByClassName('menu__nav')[0].classList.toggle('change');
// });

// document.getElementsByClassName( 'menu__nav-bar' ).addEventListener( 'click', function () {
//
//     document.getElementsByClassName( 'menu__nav' ).toggleClass( 'hide' );
//
// }, false );
//
// Element.prototype.toggleClass = function ( className ) {
//
//     if( this.className.split( ' ' ).indexOf( className ) == -1 ) {
//
//         this.className = ( this.className + ' ' + className ).trim();
//
//     } else {
//
//         this.className = this.className.replace( new RegExp( '(\\s|^)' + className + '(\\s|$)' ), ' ' ).trim();
//
//     };
//
// };
//

 // let rwd = document.getElementsByClassName('menu__nav-bar');
 //
 // rwd.addEventListener('click', function(e) {
 //     e.remove('is-open') {
 //         else {
 //             e.add('is-open');
 //         }
 //     }
 // })

// let rwd = document.getElementsByClassName('menu__nav-bar');
//
// rwd.addEventListener('click', function(){
//
// });

// myFunction () {
//     document.getElementsByClassName('menu__nav-bar').classList.toggle('change');
// };
//
// document.getElementsByClassName('menu__nav-bar').addEventListener('click', function (){
//    if (this.classList.contains('change')) {
//        this.classList.remove('change');
//
//    }else{
//        this.classList.add('change');
//    }
// });
