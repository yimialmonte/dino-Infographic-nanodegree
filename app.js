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
let facts = [];

fetch('./dino.json')
  .then((res) => res.json())
  .then((data) => {
    facts = data.Dinos.filter(
      (dino) => dino.fact !== 'All birds are living dinosaurs.'
    ).map((item) => item.fact);

    dinos = data.Dinos.filter((dino) => dino.species !== 'Pigeon').map(
      (dino) => new Dino(dino)
    );
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
Dino.prototype.compareWeight = function (human) {
  const humanWeight = Number(human.weight);
  if (this.weight > humanWeight) {
    this.fact = `${this.specie} has ${
      this.weight - human.weight
    } more weight than human.`;
  } else if (this.weight < humanWeight) {
    this.fact = `${this.specie} has ${
      human.weight - this.weight
    } less weight than human.`;
  } else {
    this.fact = `${this.specie} has the same weight as human.`;
  }
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareHeight = function (human) {
  const inchesInFeet = 12;
  const humanHeight = human.height.feet * inchesInFeet + human.height.inches;
  const dinoHeight = Number(this.height);

  if (dinoHeight > humanHeight) {
    this.fact = `${this.specie} has ${
      dinoHeight - humanHeight
    } more height than human.`;
  } else if (dinoHeight < humanHeight) {
    this.fact = `${this.specie} has ${
      humanHeight - dinoHeight
    } less height than human.`;
  } else {
    this.fact = `${this.specie} has the same height as human.`;
  }
};
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function eatBaseOnDiet(diet) {
  switch (diet) {
    case 'herbavor':
      return ['Plants', 'Foliage', 'Marine Algae'];
    case 'carnivor':
      return ['Meat', 'Animal tissue', 'Insects'];
    case 'Omnivor':
      return ['Plants', 'Meat', 'Combine Both'];
    default:
      return ['Nothing', 'Nothing', 'Nothing'];
  }
}

Dino.prototype.compareDiet = function (human) {
  if (this.diet === human.diet) {
    this.fact = `This ${this.specie} has the same diet ${this.diet} as human.`;
  } else {
    this.fact = `This ${this.specie} eat ${eatBaseOnDiet(
      this.diet.toLowerCase()
    ).join(", ")} and human eat: ${eatBaseOnDiet(human.diet.toLowerCase()).join(", ")}`;
  }
};

function generateRandomNumber(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

function assignFact(dino, option) {
  switch (option) {
    case 0:
      break;
    case 1:
      return dino.compareWeight(human);
    case 2:
      return dino.compareHeight(human);
    case 3:
      return dino.compareDiet(human);
    case 4:
      dino.fact = `Weight is ${dino.weight} lbs`;
      break;
    case 5:
      dino.fact = `Height is ${dino.height} inches`;
      break;
    case 6:
      dino.fact = `Where is ${dino.where}`;
      break;
  }
}

function generateRandonFact(dinos) {
  const options = {
    0: 'fact from data',
    1: 'fact from compareWeight methods',
    2: 'fact from compareHeight methods',
    3: 'fact from compareDiet methods',
    4: 'fact weight',
    5: 'fact height',
    6: 'fact where',
  };

  let optionsNumber = Object.keys(options).map(Number);

  for (let i = 0; i < dinos.length; i++) {
    let choice = generateRandomNumber(optionsNumber.length);
    let randomOption = optionsNumber[choice];
    optionsNumber.splice(choice, 1);
    assignFact(dinos[i], randomOption);
  }
}
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
  generateRandonFact(dinos);
});
