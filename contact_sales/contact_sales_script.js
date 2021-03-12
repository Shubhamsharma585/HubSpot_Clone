function showMeetingData() {
    window.location = "meeting_index.html"
}
var meeting_btn = document.querySelector("#contact-sales-btn3")
meeting_btn.addEventListener("click", showMeetingData)




var modal = document.getElementById("myModal");

var calling_btn = document.querySelector("#contact-nos")




var span = document.getElementsByClassName("close")[0];


calling_btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







