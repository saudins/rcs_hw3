"use strict";
console.log("Connected!");

const boxesCont = document.querySelector(".boxes-cont");
const defaultBtn = document.querySelector("#default-btn");
const randomFizz = document.querySelector("#fizz-value");
const randomBuzz = document.querySelector("#buzz-value");
let slider = document.getElementById("my-range");
let output = document.getElementById("slider-value");
const deleteBtn = document.querySelector("#delete-btn");
const clearRandomValuesBtn = document.querySelector("#random-btn-clear");

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

console.log(slider.value);
console.log(randomFizz.value);
console.log(randomBuzz.value);



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
    let rdnFizzValue = randomFizz.value;
    let rdnBuzzValue = randomBuzz.value;
    console.log(boxid);
    for (let i = 0; i < boxid.length; i++) {
    if (i % rdnFizzValue === 0 && i % rdnBuzzValue === 0 && i !== 0) {
        boxid[i].innerText = "FizzBuzz: " + i;
        boxid[i].classList.add("box-fizz-buzz");
    } else if (i % rdnFizzValue === 0 && i % rdnBuzzValue !== 0) {
        boxid[i].innerText = "Fizz: " + i;
        boxid[i].classList.add("box-fizz");
    } else if (i % rdnFizzValue !== 0 && i % rdnBuzzValue === 0){
        boxid[i].innerText = "Buzz: " + i;
        boxid[i].classList.add("box-buzz");
    } else {
        boxid[i].innerText = i;
        boxid[i].classList.add("box-default");
    }
}
// let string = boxid[30].getAttribute("id");
// let numbers = string.match(/\d+/g).map(Number);

}

function onDefault() {
    onClearAll();
    console.log("Clear board before generating new ones");
    console.log("Generate new boxes based on slider input");
    generateBox(output.innerHTML);
    renderScreen();
    
}

function onClearAll() {
    console.log("Clear all elements");
    while (boxesCont.firstChild) {
        boxesCont.removeChild(boxesCont.firstChild);
    }
}

function onClearRandomValues() {
    console.log("Reset random values");
    randomFizz.value = 3;
    randomBuzz.value = 5;
}

function addListeners() {
    console.log("Adding listeners..");
    defaultBtn.addEventListener("click", onDefault);
    deleteBtn.addEventListener("click", onClearAll);
    clearRandomValuesBtn.addEventListener("click", onClearRandomValues);
}

function main() {
    console.log("Starting the application!");
    addListeners();
}

main();