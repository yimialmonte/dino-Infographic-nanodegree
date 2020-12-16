// Create Dino Constructor
function Dino({ species, weight, height, diet, where, when, fact }) {
  this.specie = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// Create Dino Objects
let dinos = [];
fetch('./dino.json')
  .then((res) => res.json())
  .then((data) => {
    dinos = data.Dinos.map((dino) => new Dino(dino));
  });

// Create Human Object
const human = {

}

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
