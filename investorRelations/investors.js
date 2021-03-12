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
  var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=HUBS&apikey=ZKXHU7OG6GYWPLUZ';
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
   margin-left : 28%; border : 1px solid black; width: 45%"; padding: 5%;">
  <h3 style = "font-size : 23px;">SEC Filing</h3>
  <hr/>
  <table id = "pagination"></table>
  <div style = 'margin-left : 40%;' id = "paginationButtons"></div>
  </div>`;
  printSplitPages(1);
  printButtons();
}
 
let addNews = () => {
  document.getElementById('titleDisplay').innerHTML = `<div style = "text-align : center; margin-top : 75px;"><h4>${data.titleAndContent.news[0]}</h4>
  <h1>${data.titleAndContent.news[1]}</h1>`;
  document.getElementById('contentDisplay').innerHTML = '';
 }
let updateEvent = () => {
  document.getElementById('titleDisplay').innerHTML = `<div style = "text-align : center; margin-top : 75px;"><h4>${data.titleAndContent.eventsAndPresentations[0]}</h4>
  <h1>${data.titleAndContent.eventsAndPresentations[1]}</h1>`;
  document.getElementById('contentDisplay').innerHTML = '';
 }
let updateLeadershipDetails = () => {
  document.getElementById('titleDisplay').innerHTML = `<div style = "text-align : center; margin-top : 75px;"><h4>${data.titleAndContent.leadershipAndGovernance[0]}</h4>
  <h1>${data.titleAndContent.leadershipAndGovernance[1]}</h1>`;
  document.getElementById('contentDisplay').innerHTML = '';
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