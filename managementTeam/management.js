import * as data from './dataSet.js';

var minorNavbar = document.getElementById("minorNavBar");
var setAndUnsetStickyNavbar = () => {
    if (window.pageYOffset >= minorNavbar.offsetTop) {
        minorNavbar.classList.add("sticky")
      } else {
        minorNavbar.classList.remove("sticky");
      }
}

window.onscroll = function() {setAndUnsetStickyNavbar()}

let defineManagementTeam = () => {
    console.log('Management Team');
    document.getElementById('titleDisplay').innerHTML = `<div style="text-align : center; width : 50%; margin-left : 21%;"><h2>${data.contentDisplay[0][0]}</h2>
    <p style = "font-size : 18px;">${data.contentDisplay[0][1]}</p></div>`;
    document.getElementById('contentDisplay').innerHTML = `<div id = 'photoBox' style = 'width : 80%; height : 100%; margin: auto;'></div>`;
    for(let i = 0; i < data.managementTeamMembers.length; i++) {
        let paraId = i;
        document.getElementById('photoBox').innerHTML += `<div class = 'photoframe'>
        <div class="container">
    <img src="${data.managementTeamMembers[i].imageUrl}" alt= "${data.managementTeamMembers[i].name}" class="image">
    <div class="overlay">
      <div class="text"><p id = '${paraId}' style = "font-size : 12px;"><span class="material-icons md-48"
      style = "color : orange;">
      person
      </span><br/><br/><a href = ${data.managementTeamMembers[i].aboutLink}><span class = 'aboutLink'>ABOUT</span></a><br/><br/>
      </p></div>
    </div>
  </div>
  <p style = "margin-top : 97%; text-align : center;"><span style = "color : #ff7a59; font-weight : bold; font-size : 25px;">${data.managementTeamMembers[i].name}</span><br/>
  <br/><span style = "font-size : 20px;">${data.managementTeamMembers[i].role}</span></p>
  <div>`;
    }
}
let makeAdvisoryBoard = () => {
  console.log('Advisory Board');
  document.getElementById('titleDisplay').innerHTML = `<div style="text-align : center; width : 50%; margin-left : 21%;"><h2>${data.contentDisplay[2][0]}</h2>
  <p style = "font-size : 18px;">${data.contentDisplay[2][1]}</p></div>`;
  document.getElementById('contentDisplay').innerHTML = `<div id = 'photoBox' style = 'width : 80%; height : 100%; margin: auto;'></div>`;
  for(let i = 0; i < data.advisoryBoardMembers.length; i++) {
      let paraId = i;
      document.getElementById('photoBox').innerHTML += `<div class = 'photoframe'>
      <div class="container">
  <img src="${data.advisoryBoardMembers[i].imageUrl}" alt= "${data.advisoryBoardMembers[i].name}" class="image">
  <div class="overlay">
    <div class="text"><p id = '${paraId}' style = "font-size : 12px;"><span class="material-icons md-48"
    style = "color : orange;">
    person
    </span><br/><br/><a href = ${data.advisoryBoardMembers[i].aboutLink}><span class = 'aboutLink'>ABOUT</span></a><br/><br/>
    </p></div>
  </div>
</div>
<p style = "margin-top : 97%; text-align : center;"><span style = "color : #ff7a59; font-weight : bold; font-size : 25px;">${data.managementTeamMembers[i].name}</span><br/>
<br/><span style = "font-size : 20px;">${data.advisoryBoardMembers[i].role}</span></p>
<div>`;
  }
}
let makeDirectorBoard = () => {
  console.log('Director Board');
  document.getElementById('titleDisplay').innerHTML = `<div style="text-align : center; width : 50%; margin-left : 21%;"><h2>${data.contentDisplay[1][0]}</h2>
  <p style = "font-size : 18px;">${data.contentDisplay[1][1]}</p></div>`;
  document.getElementById('contentDisplay').innerHTML = `<div id = 'photoBox' style = 'width : 80%; height : 100%; margin: auto;'></div>`;
  for(let i = 0; i < data.boardOfDirectorsMembers.length; i++) {
      let paraId = i;
      document.getElementById('photoBox').innerHTML += `<div class = 'photoframe'>
      <div class="container">
  <img src="${data.boardOfDirectorsMembers[i].imageUrl}" alt= "${data.boardOfDirectorsMembers[i].name}" class="image">
  <div class="overlay">
    <div class="text"><p id = '${paraId}' style = "font-size : 12px;"><span class="material-icons md-48"
    style = "color : orange;">
    person
    </span><br/><br/><a href = ${data.boardOfDirectorsMembers[i].aboutLink}><span class = 'aboutLink'>ABOUT</span></a><br/><br/>
    </p></div>
  </div>
</div>
<p style = "margin-top : 97%; text-align : center;"><span style = "color : #ff7a59; font-weight : bold; font-size : 25px;">${data.managementTeamMembers[i].name}</span><br/>
<br/><span style = "font-size : 20px;">${data.boardOfDirectorsMembers[i].role}</span></p>
<div>`;
  }
}
document.getElementById('management').addEventListener("click", defineManagementTeam);
document.getElementById('advisoryBoard').addEventListener("click", makeAdvisoryBoard);
document.getElementById('directorBoard').addEventListener("click", makeDirectorBoard);
window.onload = defineManagementTeam();

//Adding contents from another HTML file to my page
 function includefooterHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("footer-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
includefooterHTML();
