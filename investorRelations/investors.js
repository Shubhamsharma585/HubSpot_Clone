import * as data from './data.js'; 

var minorNavbar = document.getElementById("minorNavBar");
var setAndUnsetStickyNavbar = () => {
    if (window.pageYOffset >= minorNavbar.offsetTop) {
        minorNavbar.classList.add("sticky")
      } else {
        minorNavbar.classList.remove("sticky");
      }
}

window.onscroll = function() {setAndUnsetStickyNavbar()};

function redirectToEvents() {
  window.location = 'https://ir.hubspot.com/events';
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
  <div><h5 style = "font-size : 15px; text-align : center; margin: 0;">NYSE | HUBS</h5>
  <h2 style = "font-size : 70px; font-weight : bolder;text-align : center; margin: 0;">$XXX.XX</h2>
  <p style = "font-size : 20px; text-align : center; color : #00A38D; margin: 0;">+x.xx(x.xx %)</p></div>
  <div 
  style = "border : 1px solid rgb(153, 172, 194); width : 50%; height : 100px; margin-top : 3%; margin-left : 23%;
  background-color : white; padding : 1%;">
  <div><p  style = "float : left; text-align : center; font-weight : bold;">Today's Open <br/> 467</p><div>
  <div><span  style = "float : left; margin : 1%; font-size : 50px; color : rgb(153, 172, 194); font-weight : 10;">|</span><div>
  <div><p style = "float : left; text-align : center;">Previous Close<br/>452</p><div>
  <div><span  style = "float : left; margin : 1%; font-size : 50px; color : rgb(153, 172, 194); font-weight : 10;">|</span><div>
  <div><p style = "float : left; text-align : center;">Intraday<br/>High 342 | Low 231</p><div>  
  <div><span  style = "float : left; margin : 1%; font-size : 50px; color : rgb(153, 172, 194); font-weight : 10;">|</span><div>
  <div><p  style = "float : left; text-align : center;">52 Week<br/>High 342 | Low 231</p><div>
  </div>
  </div>`;
  console.log('here');
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
 }
 document.getElementById('investorOverview').addEventListener("click", addInvestorOverview);
 document.getElementById("news").addEventListener("click", addNews);
 document.getElementById("eventUpdate").addEventListener("click", updateEvent);
 document.getElementById("leadershipDetails").addEventListener("click", updateLeadershipDetails);
 document.getElementById("faq").addEventListener("click", showFaq);
 window.onload = addInvestorOverview();