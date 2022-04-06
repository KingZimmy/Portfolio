function expandMenu() {
  if(document.querySelector(".menu1").style.display = "none") {
    document.querySelector(".menu1").style.display = "block";
    document.querySelector(".menu2").style.display = "block";
    document.querySelector(".menu3").style.display = "block";
    document.querySelector(".menu4").style.display = "block";
    document.querySelector(".menu5").style.display = "block";
    document.querySelector(".menu6").style.display = "block";
    document.querySelector("#expandMenu").style.display = "none";
    document.querySelector("#shrinkMenu").style.display = "block";
    document.querySelector(".centered").style.display = "none";
  }
}

function shrinkMenu() {
  if(document.querySelector(".menu1").style.display = "block") {
    document.querySelector(".menu1").style.display = "none";
    document.querySelector(".menu2").style.display = "none";
    document.querySelector(".menu3").style.display = "none";
    document.querySelector(".menu4").style.display = "none";
    document.querySelector(".menu5").style.display = "none";
    document.querySelector(".menu6").style.display = "none";
    document.querySelector("#expandMenu").style.display = "block";
    document.querySelector("#shrinkMenu").style.display = "none";
    document.querySelector(".centered").style.display = "block";
  }
}

function removeMenuWhenClicked() {
  let mediaQuery = window.matchMedia('(max-width: 600px)');
  if(mediaQuery.matches) {
    document.querySelector(".menu1").style.display = "none";
    document.querySelector(".menu2").style.display = "none";
    document.querySelector(".menu3").style.display = "none";
    document.querySelector(".menu4").style.display = "none";
    document.querySelector(".menu5").style.display = "none";
    document.querySelector(".menu6").style.display = "none";
    document.querySelector("#expandMenu").style.display = "block";
    document.querySelector("#shrinkMenu").style.display = "none";
    document.querySelector(".centered").style.display = "block";
  }
}




function getYear() {
  let d = new Date();
  let year = d.getFullYear();
  document.getElementById("copyright").innerHTML = year;
}

window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.querySelector(".topnav");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position