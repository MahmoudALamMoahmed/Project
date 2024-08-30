let username = $("#username");
let email = $("#email");
let password = $("#password");
let login_btn = $(".login");
let signup_disappear = $(".signup-disappear");
let alertloginusername = $(".alertloginusername");
let alertusernamegood = $(".alertusernamegood");

let usernameget = localStorage.getItem("username");
let Email = localStorage.getItem("email");
let Passwordget = localStorage.getItem("password");
console.log(usernameget);
console.log(Email);
console.log(Passwordget);

$(document).ready(function () {
  login_btn.on("click", function (event) {
    event.preventDefault();
    if (
      username.val().trim() === usernameget &&
      password.val().trim() === Passwordget
    ) {
      alertusernamegood.css({ display: "block" });
      setTimeout(() => {
        window.location = "index.html";
      }, 3000);
      signup_disappear.remove();
    } else {
      alertloginusername.css({ display: "block" });
      setTimeout(() => {
        alertloginusername.css({ display: "none" });
      }, 3000);
    }
  });
});
