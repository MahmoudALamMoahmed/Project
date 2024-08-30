/* Start check local Storage and disappear signup and disappear login and appear user and appear logout  */
let user_appear = $(".user_appear");
let useradd = $(".useradd");
let signup_disappearr = $(".signup-disappear");
let login_disappear = $(".login-disappear");

let ff = $(".ff");
let ss = $(".ss");
let gg = $(".gg");
let hh = $(".hh");
let usernamegett = localStorage.getItem("username");
/* let password = localStorage.getItem("password"); */

$(document).ready(function () {
  if (usernamegett) {
    console.log("yes");
    signup_disappearr.remove();
    login_disappear.remove();
    user_appear.css({ display: "flex", "align-items": "center" });
    useradd.append(usernamegett);
    ff.append("<i class='fa-solid fa-user'></i>");
    ss.append("<div class='sc-ce86c11a-3 hxgeim'></div>");
    logout_disapper.append("<div>LogOut</div>");
    gg.append("<i class='fa-solid fa-right-from-bracket'></i>");
    hh.append("<div class='sc-ce86c11a-3 hxgeim'></div>");
  }
});
/* End check local Storage and disappear signup and disappear login and appear user and appear logout */

/*Start Enter Logout*/
let logout_disapper = $(".logout");
$(document).ready(function () {
  logout_disapper.on("click", function () {
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
    localStorage.clear();
  });
});
/*End Enter Logout*/
