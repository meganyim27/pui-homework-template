const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// const cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const queryString = window.location.search;
console.log(queryString)

const params = new URLSearchParams(queryString);
console.log(params);

const rollType = params.get('roll')
console.log(rollType);

// Update the header text
const headerElement = document.querySelector("#chosenBun-header");
headerElement.innerText = rollType + " Cinnamon Roll";

//Update Image
const productImage = document.querySelector('#product-img');
productImage.src = '../assets/products/' + rolls[rollType].imageFile;

let cart = [];

function cartFunction() {
    const chooseGlaze = document.querySelector("#glazing-dropdown");
    const rollGlazing = chooseGlaze.options[chooseGlaze.selectedIndex].text;
    const choosePack = document.querySelector("#pack-size");
    const packSize = choosePack.options[choosePack.selectedIndex].text;
    const basePrice = rolls[rollType].basePrice
    let addRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(addRoll);
    console.log(cart);
}
