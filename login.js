
//Login Js file
function doLogin(){
    var login_email =document.getElementById("login_email").value;
    var login_password =document.getElementById("login_password").value;

    console.log(login_email,login_password);

    var stored_data =localStorage.getItem("Data");
    stored_data =JSON.parse(stored_data)
    console.log(stored_data);

    if(login_email == stored_data.email && login_password == stored_data.password){
        window.location.href =`login_success.html`
    }
    else if(login_email != stored_data.email || login_password != stored_data.password){
        window.location.href =`login_unsuccess.html`
    }

}