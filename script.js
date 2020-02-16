console.log("connected!");

const resultsCont = document.querySelector(".boxes-cont");
const defaultBtn = document.querySelector("#default-btn");
const randomFizz = document.querySelector("#fizz-value");
const randomBuzz = document.querySelector("#buzz-value");
const slider = document.getElementById("my-range");
const output = document.getElementById("slider-value");
const deleteBtn = document.querySelector("#delete-btn");
const clearRandomValuesBtn = document.querySelector("#random-btn-clear");

output.innerText = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerText = this.value;
}

console.log(resultsCont);
console.log(slider.value);
console.log("Output value", slider.value);
console.log("Fizz value", randomFizz.value);
console.log("Buzz value", randomBuzz.value);



function fizzBuzz(n) {
  
    for(let i = 1; i <= n; i++){

      let elDiv = document.createElement("div");
      let elPar = document.createElement("p");
      let rdnFizzValue = randomFizz.value;
      let rdnBuzzValue = randomBuzz.value;
      
      elDiv.appendChild(elPar);
      resultsCont.appendChild(elDiv).setAttribute("id", "div_" + i); 
      elDiv.classList.add("box");

      if(i % rdnFizzValue === 0 && i % rdnBuzzValue === 0){
         console.log('FizzBuzz');
         elPar.appendChild(document.createTextNode(i + ' = FIZZ BUZZ'));
         resultsCont.appendChild(elDiv).classList.add("box-fizz-buzz");
      }else if(i % rdnFizzValue === 0){
         console.log('Fizz');
         elPar.appendChild(document.createTextNode(i + ' = FIZZ'));
         resultsCont.appendChild(elDiv).classList.add("box-fizz");
      }else if(i % rdnBuzzValue === 0){
         console.log('Buzz');
         elPar.appendChild(document.createTextNode(i + ' = BUZZ'));
         resultsCont.appendChild(elDiv).classList.add("box-buzz");
      }else{
         console.log(i);
         elPar.appendChild(document.createTextNode(i));
         resultsCont.appendChild(elDiv).classList.add("box-default");
      }
    }
 }

 function onDefault() {
   let countOfBoxes = slider.value;
   onClearAll();
   console.log("Clear board before generating new ones");
   console.log("Generate new boxes based on slider input");
   fizzBuzz(countOfBoxes);
   
}

function onClearAll() {
   console.log("Clear all elements");
   while (resultsCont.firstChild) {
      resultsCont.removeChild(resultsCont.firstChild);
   }
}

function onClearRandomValues() {
   console.log("Reset random values");
   randomFizz.value = 3;
   randomBuzz.value = 5;
   slider.value = 50;
}

function addListeners() {
    console.log("adding listeners..");
    defaultBtn.addEventListener("click", onDefault);
    deleteBtn.addEventListener("click", onClearAll);
    clearRandomValuesBtn.addEventListener("click", onClearRandomValues);
}

function main() {
    console.log("Starting the application!");
    addListeners();
}

main();