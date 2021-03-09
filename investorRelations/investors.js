import * as data from './data.js'; 
var minorNavbar = document.getElementById("minorNavBar");
var setAndUnsetStickyNavbar = () =>{
    if (window.pageYOffset >= minorNavbar.offsetTop) {
        minorNavbar.classList.add("sticky")
      } else {
        minorNavbar.classList.remove("sticky");
      }
}
window.onscroll = function() {setAndUnsetStickyNavbar()};
 