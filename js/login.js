// function start(){

// var button = document.getElementById("submit");
// button.addEventListener("click", validate);

// }

// function validate(){
//     var username = document.forms["myForm"]["username"].value;
//     var password = document.forms["myForm"]["password"].value;
//     if ( username == "marc" && password == "marc123"){
//     alert ("Login successfully");
//     window.location = "signup.html"; // Redirecting to other page.
//     return false;
//     }

// window.addEventListener("load", start ,false);


function validateForm() {
  var x = document.forms["myForm"]["username"].value;
  var y = document.forms["myForm"]["password"].value;

  if (x == "marc" && y == "1234") {
    alert("Login successful");
    window.location = "index.html"
    return false;
  }
  else if (x == "jessica" && y == "1234") {
    alert("Login successful");
    window.location = "councelor.html"
    return false;
  }
}