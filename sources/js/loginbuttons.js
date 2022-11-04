function loginStudent (){
    var loginpage = document.getElementById("mainlogin");
    var student = document.getElementById("login_Student");
    loginpage.classList.remove("div_Show");
    loginpage.classList.add("div_Away");
    student.classList.remove("div_Away");
    student.classList.add("div_Show");
}

function loginBegeleider() {
    var loginpage = document.getElementById("mainlogin");
    var begleider = document.getElementById("login_Begleider");
    loginpage.classList.remove("div_Show");
    loginpage.classList.add("div_Away");
    begleider.classList.remove("div_Away");
    begleider.classList.add("div_Show");
}

function loginDocent() {
    var loginpage = document.getElementById("mainlogin");
    var docent = document.getElementById("login_Docent");
    loginpage.classList.remove("div_Show");
    loginpage.classList.add("div_Away");
    docent.classList.remove("div_Away");
    docent.classList.add("div_Show")
}

function studentgoBack () {
    var loginpage = document.getElementById("mainlogin");
    var student = document.getElementById("login_Student");
    student.classList.remove("div_Show");
    student.classList.add("div_Away");
    loginpage.classList.remove("div_Away");
    loginpage.classList.add("div_Show");
}

function begleidergoBack () {
    var loginpage = document.getElementById("mainlogin");
    var begleider = document.getElementById("login_Begleider");
    begleider.classList.remove("div_Show");
    begleider.classList.add("div_Away");
    loginpage.classList.remove("div_Away");
    loginpage.classList.add("div_Show");
}

function docentgoBack () {
    var loginpage = document.getElementById("mainlogin");
    var docent = document.getElementById("login_Docent");
    docent.classList.remove("div_Show");
    docent.classList.add("div_Away");
    loginpage.classList.remove("div_Away");
    loginpage.classList.add("div_Show")
}
