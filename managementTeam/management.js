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
      <div class="text"><p id = '${paraId}' style = "font-size : 12px;">${data.managementTeamMembers[i].name}<br/><br/>${data.managementTeamMembers[i].role}<br/><br/>
      </p></div>
    </div>
  </div>
  <div>`;
    }
}
document.getElementById('management').addEventListener("click", defineManagementTeam);
//document.getElementById('advisoryBoard').addEventListener("click", makeAdvisoryBoard);
//document.getElementById('directorBoard').addEventListener("click", makeDirectorBoard);