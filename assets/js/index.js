
var logoclick = 1;
function DarkMode(){
    var bg = document.body.classList.toggle("dark-mode");
    var logo = document.getElementById("logo");

    if(logoclick % 2 == 0){
        logo.setAttribute("src", "assets/img/logo-light-removebg.png");
    }
    else{
        logo.setAttribute("src", "assets/img/logo-dark-removebg.png");
    }
    logoclick ++;
}

const swith = document.querySelector(".switch");

swith.addEventListener("click", e => {
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
})