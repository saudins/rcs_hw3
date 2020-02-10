"use strict";
console.log("Connected!");

const boxesCont = document.querySelector(".boxes-cont");
const defaultBtn = document.querySelector("#default-btn");


function generateBox(nbr) {
    console.log("Generate box with ID");
    var boxDiv;
    var i = 0;
    // var fragment = document.createDocumentFragment;
    while (i < nbr) {
        boxDiv = document.createElement("div");
        // boxDiv.innerText = "ID: " + i;
        boxDiv.setAttribute("id", "mybox" + (i+1));
        boxDiv.setAttribute("class", "box");
        boxesCont.appendChild(boxDiv);
        i++;
    // 
    // boxesCont.appendChild(fragment)
    }
}

function renderScreen() {
    let boxid = document.querySelectorAll(".box");
    console.log(boxid);
    for (let i = 0; i < boxid.length; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
        boxid[i].innerText = "FizzBuzz: " + i;
        boxid[i].setAttribute("class", "box-fizz-buzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
        boxid[i].innerText = "Fizz: " + i;
        boxid[i].setAttribute("class", "box-fizz");
    } else if (i % 3 !== 0 && i % 5 === 0){
        boxid[i].innerText = "Buzz: " + i;
        boxid[i].setAttribute("class", "box-buzz");
    } else {
        boxid[i].innerText = i;
        boxid[i].setAttribute("class", "box-default");
    }
}
}

function onDefault() {
    console.log("Default 100 boxes generator button pressed!");
    generateBox(100);
    renderScreen();
}

function addListeners() {
    console.log("Adding listeners..");
    defaultBtn.addEventListener("click", onDefault)
}

function main() {
    console.log("Starting the application!");
    addListeners();
}

main();