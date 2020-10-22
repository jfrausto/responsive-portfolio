const navAbout = document.querySelector("#about");
const navPortfolio = document.querySelector("#portfolio");
const navContact = document.querySelector("#contact");

document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded");


    navAbout.addEventListener("click", function(){
        console.log("i was about");
    });
    navPortfolio.addEventListener("click", function(){
        console.log("i was portfolio");
    });
    navContact.addEventListener("click", function(){
        console.log("i was contact");
    });
  });