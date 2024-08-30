let username = $("#username");
let email = $("#email");
let password = $("#password");
let register_btn = $(".signup");
let alertemail = $(".alertemail");
let alertemailgood = $(".alertemailgood");
let alertfilldata = $(".alertfilldata");
let alertusername = $(".alertusername");
let alertpass = $(".alertpass");

let x = 30;
let z = 20;

let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let validatePass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;
let validateUser = /^[A-Za-z]{5,7}$/;
email.val();
password.val();
/* s = prompt("Enter");
console.log(validateEmail.test(s)); */
$(document).ready(function () {
  register_btn.on("click", function (event) {
    event.preventDefault();

    if (username.val() == "" || email.val() == "" || password.val() == "") {
      alertfilldata.css({ display: "block" });
      setTimeout(() => {
        alertfilldata.css({ display: "none" });
      }, 3000);
    } else if (validateUser.test(username.val()) == false) {
      alertusername.css({ display: "block" });
      setTimeout(() => {
        alertusername.css({ display: "none" });
      }, 3000);
      /* console.log(validateEmail.test(testEmail)); */
    } else if (validateEmail.test(email.val()) == false) {
      alertemail.css({ display: "block" });
      setTimeout(() => {
        alertemail.css({ display: "none" });
      }, 3000);
    } else if (validatePass.test(password.val()) == false) {
      alertpass.css({ display: "block" });
      /* alertemailgood.css({ display: "block" }); */
      alertpass.css({ display: "block" });
      setTimeout(() => {
        alertpass.css({ display: "none" });
      }, 3000);
    } else if (
      validateEmail.test(email.val()) &&
      validatePass.test(password.val()) &&
      validateUser.test(username.val())
    ) {
      alertemailgood.css({ display: "block" });
      localStorage.setItem("username", username.val());
      localStorage.setItem("email", email.val());
      localStorage.setItem("password", password.val());
      setTimeout(() => {
        window.location = "login.html";
      }, 3000);
    }
  });
});

/* Start validate Pass by js */
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
  document.getElementById("message").style.position = "absolute";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-5]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 5) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
/*End validate register*/
