// NAV-BAR

var softMenu = document.getElementById("software-nav");//proMenu--softMenu
var resMenu = document.getElementById("res-nav");
var softMenu1 = document.getElementById("software-nav-1");
var softMenu2 = document.getElementById("software-nav-2");

var resMenu1 = document.getElementById("res-nav-1");
var resMenu2 = document.getElementById("res-nav-2");




var proMenuShow = true;
var soft = document.getElementById("software");//pro
var res = document.getElementById("res");//sol
var price = document.getElementById("price");//ent
var signUpBtn = document.querySelector("nav > ul > li > button");
function showMenu(event) {
    resMenu.style.display = "none";
    res.style.color = "rgb(65, 64, 64)";
    var oldI = res.querySelector("i");
    oldI.style.transform = "";
    oldI.style.transition = ".2s";
    var i = event.target.querySelector("i");
    // i.style.transform = "rotate(0.5turn)";
    i.style.transition = "1s";
    // event.target.style.color = "none";
    softMenu.style.display = "flex";
    // softMenu.style.border = "1px solid rgb(229, 236, 245)";
    softMenu1.style.display = "grid";
    softMenu2.style.display = "grid";

}
function hideMenu(event) {
    var i = soft.querySelector("i");
    i.style.transform = "";
    i.style.transition = "1s";

    softMenu.style.display = "none";
    soft.style.color = "rgb(65, 64, 64)";

}
function hideSolMenu(event) {
    var i = res.querySelector("i");
    i.style.transform = "";
    i.style.transition = "1s";
    resMenu.style.display = "none";
    res.style.color = "rgb(65, 64, 64)";
}
function showSolMenu() {
    softMenu.style.display = "none";
    soft.style.color = "rgb(65, 64, 64)";
    var oldI = soft.querySelector("i");
    oldI.style.transform = "";
    oldI.style.transition = "1s";
    var i = event.target.querySelector("i");
    // i.style.transform = "rotate(0.5turn)";
    i.style.transition = "1s";
    event.target.style.color = "none";
    resMenu.style.display = "flex";
    resMenu1.style.display = "grid";
    resMenu2.style.display = "grid";
}
function hideAllMenu() {
    resMenu.style.display = "none";
    res.style.color = "rgb(65, 64, 64)";
    var oldI = res.querySelector("i");
    oldI.style.transform = "";
    oldI.style.transition = "1s";
}
function goToSignUp() {
    window.location.href = "#";
}



soft.addEventListener("mouseenter", showMenu);
softMenu.addEventListener("mouseleave", hideMenu);
res.addEventListener("mouseenter", showSolMenu);
resMenu.addEventListener("mouseleave", hideSolMenu);
price.addEventListener("mouseenter", hideAllMenu);

signUpBtn.addEventListener("click", goToSignUp);


/////////////////////////////////////////////////////////////

var aboutUsMenu = document.getElementById("aboutUs-option-nav");

var aboutUs = document.getElementById("top-nav-about-Us");

function showAboutUs(event) {
    // resMenu.style.display = "none";
    aboutUs.style.color = "rgb(65, 64, 64)";
    var oldI = res.querySelector("i");
    oldI.style.transform = "";
    oldI.style.transition = ".5s";
    var i = event.target.querySelector("i");
    i.style.transform = "rotate(0.5turn)";
    i.style.transition = ".5s";
    // event.target.style.color = "none";
    aboutUsMenu.style.display = "grid";

    // aboutUsMenu.style.border = "1px solid red";


}

function hideaboutUs(event) {
    var i = aboutUs.querySelector("i");
    i.style.transform = "";
    i.style.transition = "0.5s";

    aboutUsMenu.style.display = "none";
    aboutUs.style.color = "rgb(65, 64, 64)";

}

aboutUs.addEventListener("mouseenter", showAboutUs);
aboutUsMenu.addEventListener("mouseleave", hideaboutUs);