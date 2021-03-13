function showMeetingData() {
    var first_name = document.getElementById("first-nam").value
    var last_name = document.getElementById("last-nam").value
    var email_id = document.getElementById("mail-id").value
    var phone_number = document.getElementById("phone-no").value
    var company_name = document.getElementById("company-nam").value
    var web_url = document.getElementById("website-url").value
    var employee_number = document.getElementById("employee-size").value
    var country_names = document.getElementById("country_dropdown").value
    var meeting_query = document.getElementById("feedback").value


    if (first_name === "" || last_name === "" || email_id === "" || phone_number === "" || company_name === "" || web_url === "" || employee_number === "" || country_names === "" || meeting_query === "") {

        alert("Please Fill all the mandetory details.");

        // returnToPreviousPage();
        // window.history.back();
        return false;
    }
    else {
        var Users = {
            First_Name: first_name,
            Last_Name: last_name,
            Email: email_id,
            Phone_Number: phone_number,
            Company_Name: company_name,
            Website: web_url,
            Employees: employee_number,
            Country: country_names,
            Meeting_Query: meeting_query
        }

        Users = JSON.stringify(Users)
        localStorage.setItem("User data for Meeting", Users)

        alert("Checking for meeting slot !!");
        window.location = "meeting_index.html"
        return true;
    }





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







