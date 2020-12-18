// Create Dino Constructor
function Dino({ species, weight, height, diet, where, when, fact } ) {
  this.specie = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.image = `images/${species.toLowerCase()}.png`;
}

// Create Dino Objects
let dinos = [];
let facts = [];

fetch('./dino.json')
  .then((res) => res.json())
  .then((data) => {
    facts = data.Dinos
      .filter((dino) => dino.fact !== "All birds are living dinosaurs.")
      .map((item) => item.fact);

    dinos = data.Dinos.map((dino) => new Dino(dino));
  });

// Create Human Object
const human = {};

// Use IIFE to get human data from form
let humanData = function () {
  (function (human) {
    human.name = document.getElementById('name').value;
    human.height = {
      feet: document.getElementById('feet').value,
      inches: document.getElementById('inches').value,
    };
    human.weight = document.getElementById('weight').value;
    human.diet = document.getElementById('diet').value;
    human.image = 'images/human.png';
  })(human);
};

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function(human) {
  const humanWeight = Number(human.weight)
  if(this.weight > humanWeight) {
    this.fact = `${this.specie} has ${this.weight - human.weight} more weight than human.`
  } else if(this.weight < humanWeight) {
    this.fact = `${this.specie} has ${human.weight - this.weight} less weight than human.`
  } else {
    this.fact = `${this.specie} has the same weight as human.`
  }
}
// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareDeit = function(human) {
}
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen
function removeForm() {
  let formElement = document.getElementById('dino-compare');
  formElement.style.cssText = 'display: none;';
}

// On button click, prepare and display infographic
let btnElement = document.getElementById('btn');

btnElement.addEventListener('click', function () {
  humanData();
  dinos.forEach(dino => dino.compareWeight(human))
  console.log(dinos)
});
