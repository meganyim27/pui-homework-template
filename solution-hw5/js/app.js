
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

// the array to hold all the Roll Objects
let cart = [];

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {

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
    if (packSize === 1) {
            packPrice = 1
        }
        else if (packSize === 3) {
            packPrice = 3
        }
        else if (packSize === 6) {
            packPrice = 5
        }
        else {
            packPrice = 10
        }


    const rollItem = new Roll(rollType, rollGlazing, packSize, rollPrice);
    rollItem.calculatedPrice =  ((rollPrice + glazePrice) * packPrice).toFixed(2);
    cart.push(rollItem);
    return rollItem;
}   

// all the Roll objects
addNewRoll("Original", "Sugar Milk", 1, 2.49)
addNewRoll("Walnut", "Vanilla Milk", 12, 3.49)
addNewRoll("Raisin", "Sugar Milk", 3, 2.99)
addNewRoll("Apple", "Original", 3, 3.49)

// console.log(cart)

// add to DOM

function displayRoll(roll) {
    let shopping_cart = document.getElementById("cart-list");
    let rollElement = document.createElement("div");
    //assigning an id to all the roll Element divs based on the name of the roll type
    rollElement.id = roll.type;
    
    // get the image for each product item
    let item_img = document.createElement("img");
    item_img.src = '../assets/products/'+roll.type+"-cinnamon-roll.jpg";
    rollElement.appendChild(item_img);
    
    //get the item name for each product item
    let item_name = document.createElement("div");
    item_name.innerText = roll.type + "Cinnamon Roll";
    rollElement.appendChild(item_name);

    //get the glaze for each product Item
    let item_glaze = document.createElement("div");
    item_glaze.innerText = roll.glazing;
    rollElement.appendChild(item_glaze);

    //get the pack size for each product item
    let item_pack = document.createElement("div");
    item_pack,innerText = "Pack Size: " + roll.size;
    rollElement.appendChild(item_pack);

    //get calculated price for each product item
    let item_price = document.createElement("div");
    item_price.innerText = string(roll.calculatedPrice)
    rollElement.appendChild(item_price);

    //remove button
    let removeButton = document.createElement("button");
    removeButton.onClick = () => {
        document.getElementById(roll.type).remove();
        for (const i in cart) {
            if (cart[i].type === roll.type) {
                delete cart[i];
            }
        }
        updatePrice();
    }
    rollElement.appendChild(removeButton);

    shopping_cart.appendChild(rollElement);
}

cart.forEach(displayRoll);

console.log(displayRoll)
