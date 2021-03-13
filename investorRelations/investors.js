import * as data from './data.js'; 

var minorNavbar = document.getElementById("minorNavBar");
var setAndUnsetStickyNavbar = () => {
    if (window.pageYOffset >= minorNavbar.offsetTop) {
        minorNavbar.classList.add("sticky")
      } else {
        minorNavbar.classList.remove("sticky");
      }
}
window.onscroll = function() {setAndUnsetStickyNavbar()}
/*allignImgOnScroll()*/

function redirectToEvents() {
  window.location = 'https://ir.hubspot.com/events';
}

var todayOpen;
var previousClose;
var intradayLow;
var intradayHigh;
var diff;
var percentVariation;

function fetchStockValues(){
  var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=HUBS&apikey= CTUHMWIT73THMIDJ';
  let count = 0;
fetch(url)
.then(function (response) {
  response.json().then(function (res) {
      console.log(res);
      let key;
      for(key in res['Time Series (Daily)']){
          count++;
          if(count == 1) {
              todayOpen = Math.round((Number(res['Time Series (Daily)'][key]['1. open']) * 100))/100;
              previousClose = Math.round((Number(res['Time Series (Daily)'][key]['4. close']) * 100))/100;
              intradayLow = Math.round((Number(res['Time Series (Daily)'][key]['3. low']) * 100))/100;
              intradayHigh = Math.round((Number(res['Time Series (Daily)'][key]['2. high']) * 100))/100;
              diff = Math.round((previousClose - intradayLow) * 100) / 100;
              percentVariation = Math.round((((diff) / intradayLow) * (10 ** 6))/100)/100;
              console.log("today", todayOpen, "previous close", previousClose, "intraday Low", 
              intradayLow, "intraday high", intradayHigh, "percent variation", percentVariation);
          }
          if(count == 2) {
              console.log("yesterday", res['Time Series (Daily)'][key]);
          }
      }
      addInvestorOverview();
  })
})
}
function printSplitPages(buttonNumber) {
  let paginationDiv = document.getElementById('pagination');
  paginationDiv.innerHTML = '';
  buttonNumber = Number(buttonNumber);
  let start = buttonNumber * 5 - 5;
  let stop = buttonNumber * 5 - 1;
  for(var k = start; k <= stop; k++) {
    paginationDiv.innerHTML += `<tr><td>${data.secFillingUpdateContents[k][0]}</td> <td> ${data.secFillingUpdateContents[k][1]}</td>
    <td>${data.secFillingUpdateContents[k][2]}</td><td><a href = "https://wtcfns.hubspot.com/wt-ir-api/get-sec-doc-types?id=${data.secFillingUpdateContents[k][3]}&docType=DOC">DOC</a></td>
    <td><a href = "https://wtcfns.hubspot.com/wt-ir-api/get-sec-doc-types?id=${data.secFillingUpdateContents[k][3]}&docType=PDF">PDF</a></td>
    <td><a href = "https://wtcfns.hubspot.com/wt-ir-api/get-sec-doc-types?id=${data.secFillingUpdateContents[k][3]}&docType=HTML">HTML</a></td>
    <td><a href = "https://wtcfns.hubspot.com/wt-ir-api/get-sec-doc-types?id=${data.secFillingUpdateContents[k][3]}&docType=XLS">XLS</a></td></tr>
    <tr><td colspan = "7"><hr/><td></tr>`
}
}
var reorder = () => {
  let num = event.target.id;
  printSplitPages(Number(num));
  console.log('reorder here', num);
}
function printButtons() {
    let buttonCount = data.secFillingUpdateContents.length / 5;
    document.getElementById('paginationButtons').innerHTML = '';
    for(let j = 1; j <= buttonCount; j++){
      let buttonId = j;
      let button = document.createElement('button');
      button.setAttribute('id', buttonId);
      button.onclick = reorder;
      button.innerHTML = buttonId;
      document.getElementById('paginationButtons').appendChild(button);
      //document.getElementById('paginationButtons').innerHTML += `<button id = "${buttonId}" onclick = 'reorder()'>${j}</button>`;
      //document.getElementById(buttonId).addEventListener("click", reorder);
    }
    //console.log(methodArr[3]);
  }
let renderModal = () => {
  let index = Number(event.target.id);
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  document.getElementById('writeUp').innerHTML = `<img src ='${data.leadershipTeam[index].imageUrl}' 
  style = "width: 130px;
  height: 140px;">
  <span><h3>${data.leadershipTeam[index].name}</h3>${data.leadershipTeam[index].position}
  <br/><br/>${data.leadershipTeam[index].bio}</span>`
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

let addInvestorOverview = () => {
  var url = ["https://ir.hubspot.com/news/hubspot-reports-q4-and-full-year-2020-results",
  "https://event.on24.com/eventRegistration/EventLobbyServlet?target=reg20.jsp&referrer=https%3A%2F%2Fir.hubspot.com%2F&eventid=2944718&sessionid=1&key=5135E09BE311B16FD07FA8CC10D25020&regTag=&V2=false&sourcepage=register",
  "https://ir.hubspot.com/hubfs/Q4%202020%20Earnings%20Call_Corrected%20Transcript_2021-02-11-20-36-05.pdf",
  "https://ir.hubspot.com/events",
  "https://ir.hubspot.com/news/hubspots-ceo-brian-halligan-injured-in-accident-expected-to-make-a-full-and-complete-recovery",
  "https://f.hubspotusercontent20.net/hubfs/421676/Investor%20Presentation%20Q420.pdf",
  "https://ir.hubspot.com/#ir-stock"
];
  document.getElementById('titleDisplay').innerHTML = `<div  style = "float : left;
  width : 50%; margin-left : 10%;"><h1 style = "text-align : left;
  font-size : 36px; font-weight : bold;">${data.titleAndContent.investorOverview[0]}</h1>
  <p style = "text-align : left; font-size : 18px;">
  ${data.titleAndContent.investorOverview[1]}</p></div>
  <div style = "float : left;"><img src = '../imgs/investorrelationsClipart.png' 
  style = "margin-left : 200px;"/></div>`

  document.getElementById('contentDisplay').innerHTML = `<div>
  <div style = "background-color : rgb(245, 248, 250); width : 275px; height: 240px; border : 1px solid  gainsboro; margin : auto; margin-top : 70px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); float : left; margin-left :25%;">
  <h3 style = "color : #33475b; font-size : 25px; margin-left : 15%;">Latest Earnings</h3>
  <a href = ${url[0]} style = "font-weight: bold; font-size: 20px; margin-left : 15%">Earnings Release</a><br/><br/>
  <a href = ${url[1]} style = "font-weight: bold; font-size: 20px; margin-left : 15%">Earnings Call Webcast</a><br/><br/>
  <a href = ${url[2]} style = "font-weight: bold; font-size: 20px; margin-left : 15%">Earnings Call Transcript</a>
  </div>
  <div style = "background-color : rgb(245, 248, 250); width : 275px; height: 240px; border : 1px solid  gainsboro; margin : auto; margin-top : 70px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); float : left; margin-left :3%;">
  <h3 style = "color : #33475b; font-size : 25px; margin-left : 15%;">Popular Links</h3>
  <a href = ${url[3]} style = "font-weight: bold; font-size: 20px; margin-left : 15%">Analyst Day 2020</a><br/><br/>
  <a href = ${url[4]} style = "font-weight: bold; font-size: 20px; margin-left : 15%">Latest Press Release</a><br/><br/>
  <a href = ${url[5]} style = "font-weight: bold; font-size: 18px; margin-left : 15%">Latest Investor Presentation</a><br/><br/>
  <a href = ${url[6]} style = "font-weight: bold; font-size: 20px; margin-left : 15%">Stock Information</a><br/>
  <br/> <br/> <br/>
  </div>
  </div>
  <div style = "margin-top : 30%; margin-left : 26%; clear : left; font-size : 20px;">
  <br/><br/><br/><br/>
  <h3>Upcoming Events</h3>
  <p>There's nothing upcoming. Please check back later!</p>
  <button id = "orangeButton">View all events</button>
  </div>`;
  document.getElementById("orangeButton").addEventListener("click", redirectToEvents);
  document.getElementById('contentDisplay').innerHTML += `<div 
  style = "width: 100%; background-color: rgb(245, 248, 250); height: 50%; padding-top : 5%; padding-bottom : 5%; margin-top: 5%;">
  <div><h5 style = "font-size : 15px; text-align : center; margin: 0px;">NYSE | HUBS</h5>
  <h2 style = "font-size : 70px; font-weight : bolder;text-align : center; margin: 0;">$${previousClose}</h2>
  <p style = "font-size : 20px; text-align : center; color : #00A38D; margin: 0;">+${diff} (${percentVariation} %)</p></div>
  <div 
  style = "border : 1px solid rgb(153, 172, 194); width : 50%; height : 100px; margin-top : 3%; margin-left : 23%;
  background-color : white; ">
  <div style = "margin-top : 1%;">
  <div style = "margin-left : 9%;"><p  style = "float : left; text-align : center; font-weight : bold;">Today's Open <br/> <span style ="font-weight : lighter;">${todayOpen}</span></p><div>
  <div><span  style = "float : left; margin : 1%; font-size : 50px; color : rgb(153, 172, 194); font-weight : 10;">|</span><div>
  <div><p style = "float : left; text-align : center; font-weight : bold;">Previous Close<br/> <span style ="font-weight : lighter;">${previousClose}</span></p><div>
  <div><span  style = "float : left; margin : 1%; font-size : 50px; color : rgb(153, 172, 194); font-weight : 10;">|</span><div>
  <div><p style = "float : left; text-align : center; font-weight : bold;">Intraday<br/><span style ="font-weight : lighter;">High ${intradayHigh} | Low ${intradayLow}</span></p><div>  
  <div><span  style = "float : left; margin : 1%; font-size : 50px; color : rgb(153, 172, 194); font-weight : 10;">|</span><div>
  <div><p  style = "float : left; text-align : center; font-weight : bold;">52 Week<br/><span style ="font-weight : lighter;">High 342 | Low 231</span></p><div>
  </div>
  </div>
  </div>`;
  document.getElementById('contentDisplay').innerHTML += `<div style = "margin-top : 8%;
   margin-left : 28%; width: 45%"; padding: 5%;">
  <h3 style = "font-size : 23px;">SEC Filing</h3>
  <hr/>
  <table id = "pagination"></table>
  <div style = 'margin-left : 40%;' id = "paginationButtons"></div>
  <br/><br/>
  </div>`;
  printSplitPages(1);
  printButtons();
}
 
let addNews = () => {
  document.getElementById('titleDisplay').innerHTML = `<div style = "text-align : center; margin-top : 75px;"><h4>${data.titleAndContent.news[0]}</h4>
  <h1>${data.titleAndContent.news[1]}</h1>`;
  document.getElementById('contentDisplay').innerHTML = '';
  document.getElementById('contentDisplay').innerHTML = `<div id = "newsDisp" style = "width : 45%; margin-left : 25%;margin-top : 5%;"></div>`;
  document.getElementById('newsDisp').innerHTML = '';
  for(let i = 0; i < data.newsHeaderDateAndRedirectLink.length; i++) {
    document.getElementById('newsDisp').innerHTML += `<h3 style = "font-weight : bolder;">${data.newsHeaderDateAndRedirectLink[i][0]}</h6>
    <p style = "font-size : 15px;">${data.newsHeaderDateAndRedirectLink[i][1]}</p>
    <a href = "${data.newsHeaderDateAndRedirectLink[i][2]}" style = "font-weight : bolder;">Read more</a>
    <br/><br/>`;
  }
 }
let updateEvent = () => {
  document.getElementById('titleDisplay').innerHTML = `<div style = "text-align : center; margin-top : 75px;"><h4>${data.titleAndContent.eventsAndPresentations[0]}</h4>
  <h1>${data.titleAndContent.eventsAndPresentations[1]}</h1>`;
  document.getElementById('contentDisplay').innerHTML = '';
  document.getElementById('contentDisplay').innerHTML = `<div>
  <div style = "background-color : rgb(245, 248, 250); width : 275px; height: 240px; border : 1px solid  gainsboro; margin : auto; margin-top : 70px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); float : left; margin-left :25%;">
  <h3 style = "color : #33475b; font-size : 20px; margin-left : 15%; ">Investor Presentation</h3>
  <p style = "text-align : center; font-size: 24px; margin-left : 4%;"> Fourth Quarter 2020 
  Investor Marketing Presentation<br/></p>
  <a style = "text-align : center; font-size: 24px; margin-left : 25%;" href = "https://f.hubspotusercontent20.net/hubfs/421676/Investor%20Presentation%20Q420.pdf">View slides</a>
  </div>
  <div style = "background-color : rgb(245, 248, 250); width : 275px; height: 240px; border : 1px solid  gainsboro; margin : auto; margin-top : 70px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); float : left; margin-left :3%;">
  <h3 style = "color : #33475b; font-size : 25px; margin-left : 5%;">HubSpot Analyst Day</h3>
  <p href style = "text-align : center; font-weight: bold; font-size: 20px; margin-left : 4%;">2020 Analyst Day</p>
  <p style = "font-size: 17px; margin-left : 20%;"> September 22, 2020</p><br/>
  <p style = "font-weight: bold; font-size: 18px; margin-left : 5%;"><a href = "https://www.youtube.com/playlist?list=PLlw9qxNtFom36T7YLgMnfrVntYYAp5E1q">View webcast</a> |
  <a href = "https://f.hubspotusercontent00.net/hubfs/53/Analyst%20Day%202020%20Presentations/Analyst%20Day%202020%20Presentations.pdf">View slides</a></p><br/><br/><br/>
  <br/> <br/> <br/>
  </div>
  </div>
  <div style = "margin-top : 30%; margin-left : 26%; clear : left; font-size : 20px;">
  <br/><br/><br/><br/>
  <h3>Upcoming Events</h3>
  <p>There's nothing upcoming. Please check back later!</p>
  </div>`;
  document.getElementById('contentDisplay').innerHTML += `<div id = 'pastEvents' style = "margin-top : 5%; margin-left : 26%; clear : left; font-size : 20px;">
  <h3>Past Events & Presentation</h3>
  </div>`
  for(let i = 0; i < data.pastEvents.length; i++) {
    document.getElementById("pastEvents").innerHTML += `<p>${data.pastEvents[i].title}<br/><span style = "font-size : 15px;">${data.pastEvents[i].date}</span>
    <br/>${data.pastEvents[i].links}</p>`;
  }
 }

let updateLeadershipDetails = () => {
  document.getElementById('titleDisplay').innerHTML = `<div style = "text-align : center; margin-top : 75px;"><h4>${data.titleAndContent.leadershipAndGovernance[0]}</h4>
  <h1>${data.titleAndContent.leadershipAndGovernance[1]}</h1>`;
  document.getElementById('contentDisplay').innerHTML = '<div id = "teamView" style = " margin-left: 25%; margin-top : 10%; width : 50%;"><h3 style = "font-size : 20px;">Leadership Team</h3></div>';
  document.getElementById('contentDisplay').innerHTML += `<div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <p id = 'writeUp'></p>
    </div>
  </div>`
  for(let i = 0; i < data.leadershipTeam.length; i++) {
    let paraId = "person_" + i;
    document.getElementById('teamView').innerHTML += `<div class="container">
    <img src="${data.leadershipTeam[i].imageUrl}" alt= "${data.leadershipTeam[i].name}" class="image">
    <div class="overlay">
      <div class="text"><p id = '${paraId}' style = "font-size : 12px;">${data.leadershipTeam[i].name}<br/><br/>${data.leadershipTeam[i].position}<br/><br/>
      </p></div>
    </div>
  </div>`;
  }
  for(let i = 0; i < data.leadershipTeam.length; i++) {
    let paraId = "person_" + i;
    let link = document.createElement('span');
    link.setAttribute('class', 'cursorShift');
    link.setAttribute('id', i);
    link.onclick = renderModal;
    link.innerHTML = 'Read bio';
    document.getElementById(paraId).appendChild(link);
  }

 }

let showFaq = () => {
  document.getElementById('titleDisplay').innerHTML = `<div style = "text-align : center; margin-top : 75px;"><h4>${data.titleAndContent.faq[0]}</h4>
  <h1>${data.titleAndContent.faq[1]}</h1>`;
  document.getElementById('contentDisplay').innerHTML = '';
  document.getElementById('contentDisplay').innerHTML = `<div style = "font-size: 18px; width : 40%; margin-top:10%; margin-left:25%;"><p>Want to know more about HubSpot? Here are answers
   to the most commonly asked questions about our company.</p></div>`;
  for(let i = 0; i < data.faqs.length; i++) {
    document.getElementById('contentDisplay').innerHTML += `<button class = "faq" ><i id = "button_${i}" class = "arrow right"></i>${data.faqs[i][0]}</button>
    <div class = "responsePanel"><p>${data.faqs[i][1]}</p></div>`;
  }
  var faqStyle = document.getElementsByClassName("faq");
  var iTag = [];
for (let i = 0; i < faqStyle.length; i++) {
  iTag[i] = document.getElementById(`button_${i}`);
  faqStyle[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      iTag[i].classList.remove("down");
      iTag[i].classList.add("right");
      faqStyle[i].style.border = "0";
    } else {
      panel.style.display = "block";
      iTag[i].classList.remove("right");
      iTag[i].classList.add("down");
      faqStyle[i].style.border = "2px solid rgb(0, 164, 189)";
    }
  });
}
}

 document.getElementById('investorOverview').addEventListener("click", addInvestorOverview);
 document.getElementById("news").addEventListener("click", addNews);
 document.getElementById("eventUpdate").addEventListener("click", updateEvent);
 document.getElementById("leadershipDetails").addEventListener("click", updateLeadershipDetails);
 document.getElementById("faq").addEventListener("click", showFaq);
 window.onload = fetchStockValues();

 //Adding contents from another HTML file to my page
 function includefooterHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("footer-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includefooterHTML();