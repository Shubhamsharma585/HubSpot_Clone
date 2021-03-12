
//Signup page JS file
function signUp(){
    var formData ={
    firstname :document.getElementById("signup_firstname").value,
    lastname :document.getElementById("signup_lastname").value,
    email :document.getElementById("signup_email").value,
    password :document.getElementById("signup_password").value

};
formData =JSON.stringify(formData);
console.log(formData);

localStorage.setItem("Data",formData)

window.location.href =`signup_success.html`
}