const navAbout = document.querySelector("#about");
const navPortfolio = document.querySelector("#portfolio");
const navContact = document.querySelector("#contact");

document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded");

    // event listeners for nav bar
    navAbout.addEventListener("click", function(){
        console.log("i was about");
        window.location.assign("./index.html")
    });
    navPortfolio.addEventListener("click", function(){
        console.log("i was portfolio");
        window.location.assign("./portfolio.html")
    });
    navContact.addEventListener("click", function(){
        console.log("i was contact");
        window.location.assign("./contact.html")
    });
  });