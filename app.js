// Create Dino Constructor
function Dino({ species, weight, height, diet, where, when, fact }) {
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
fetch('./dino.json')
  .then((res) => res.json())
  .then((data) => {
    dinos = data.Dinos.map((dino) => new Dino(dino));
  });

// Create Human Object
const human = {};

// Use IIFE to get human data from form
let humanData = function () {
  (function (human) {
    human.Name = document.getElementById('name').value;
    human.Height = {
      feet: document.getElementById('feet').value,
      inches: document.getElementById('inches').value,
    };
    human.Weight = document.getElementById('weight').value;
    human.Diet = document.getElementById('diet').value;
    human.image = 'images/human.png';
  })(human);
};

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

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
  console.log(human);
});
