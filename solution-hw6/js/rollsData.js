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

    
    let glazePrice = 0
    // creating the glazePrice based on rollGlazing 
    if (rollGlazing === "Original") {
            glazePrice = 0
        }
        else if (rollGlazing === "Sugar Milk") {
            glazePrice = 0
        }
        else if (rollGlazing === "Vanilla Milk") {
            glazePrice = 0.50
        }
        else {
            glazePrice = 1.50
        }
    

    //  multiplying the right amount for packSize
    let packPrice = 0
    if (packSize === "1") {
            packPrice = 1
        }
        else if (packSize === "3") {
            packPrice = 3
        }
        else if (packSize === "6") {
            packPrice = 5
        }
        else {
            packPrice = 10
        }

    addRoll.calculatedPrice =  ((basePrice + glazePrice) * packPrice).toFixed(2);
    cart.push(addRoll);
    console.log(cart);

    saveToLocalStorage();
}

function saveToLocalStorage () {
    localStorage.setItem("storedCart", JSON.stringify(cart));
    console.log(storedCart);
};

// retrieving data from the local storage
let cartFromStorage = [];
const storedCart = localStorage.getItem("storedCart")
    if (storedCart !== null) {
        cart = JSON.parse(storedCart);
}